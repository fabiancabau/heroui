import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {tagVariants} from "@heroui/styles/components/tag";

export type HeroTagSize = "sm" | "md" | "lg";
export type HeroTagVariant = "default" | "surface";

@Component({
  imports: [CommonModule],
  selector: "hero-tag",
  standalone: true,
  template: `<button
    [attr.aria-disabled]="disabledAttr"
    [attr.data-disabled]="disabledAttr"
    [attr.type]="type"
    [class]="baseClass"
    [disabled]="disabled"
  >
    <ng-content></ng-content>
    <span
      *ngIf="removable"
      [class]="removeButtonClass"
      aria-hidden="true"
      (click)="onRemove($event)"
    >
      ×
    </span>
  </button>`,
})
export class HeroTagComponent {
  @Input() className = "";
  @Input() disabled = false;
  @Input() removable = false;
  @Input() size: HeroTagSize = "md";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() variant: HeroTagVariant = "default";
  @Output() remove = new EventEmitter<void>();

  private get slots() {
    return tagVariants({
      size: this.size,
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get disabledAttr() {
    return this.disabled ? "true" : null;
  }

  get removeButtonClass() {
    return this.slots.removeButton();
  }

  onRemove(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.remove.emit();
  }
}
