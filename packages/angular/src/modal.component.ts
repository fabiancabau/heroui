import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {modalVariants} from "@heroui/styles/components/modal";

export type HeroModalVariant = "opaque" | "blur" | "transparent";
export type HeroModalScroll = "inside" | "outside";
export type HeroModalSize = "xs" | "sm" | "md" | "lg" | "full" | "cover";

@Component({
  imports: [CommonModule],
  selector: "hero-modal",
  standalone: true,
  template: `<div
    *ngIf="isOpen"
    [class]="backdropClass"
    (click)="closeOnBackdropClick ? close() : null"
  >
    <div [class]="containerClass">
      <div
        [attr.aria-describedby]="ariaDescribedBy || null"
        [attr.aria-labelledby]="ariaLabelledBy || null"
        [attr.aria-modal]="true"
        [class]="dialogClass"
        role="dialog"
        (click)="$event.stopPropagation()"
      >
        <button
          *ngIf="showCloseButton"
          [class]="closeTriggerClass"
          [attr.aria-label]="closeButtonLabel"
          type="button"
          (click)="close()"
        >
          ×
        </button>
        <header [class]="headerClass">
          <ng-content select="[hero-modal-header]"></ng-content>
        </header>
        <section [class]="bodyClass">
          <ng-content></ng-content>
        </section>
        <footer [class]="footerClass">
          <ng-content select="[hero-modal-footer]"></ng-content>
        </footer>
      </div>
    </div>
  </div>`,
})
export class HeroModalComponent {
  @Input("aria-describedby") ariaDescribedBy = "";
  @Input("aria-labelledby") ariaLabelledBy = "";
  @Input() className = "";
  @Input() closeButtonLabel = "Close";
  @Input() closeOnBackdropClick = true;
  @Input() isOpen = false;
  @Input() scroll: HeroModalScroll = "inside";
  @Input() showCloseButton = true;
  @Input() size: HeroModalSize = "md";
  @Input() variant: HeroModalVariant = "opaque";
  @Output() isOpenChange = new EventEmitter<boolean>();

  private get slots() {
    return modalVariants({
      scroll: this.scroll,
      size: this.size,
      variant: this.variant,
    });
  }

  get backdropClass() {
    return this.slots.backdrop();
  }

  get bodyClass() {
    return this.slots.body();
  }

  get closeTriggerClass() {
    return this.slots.closeTrigger();
  }

  get containerClass() {
    return this.slots.container();
  }

  get dialogClass() {
    return this.slots.dialog({class: this.className});
  }

  get footerClass() {
    return this.slots.footer();
  }

  get headerClass() {
    return this.slots.header();
  }

  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}
