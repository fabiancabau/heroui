import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {linkVariants} from "@heroui/styles/components/link";

@Component({
  imports: [CommonModule],
  selector: "hero-link",
  standalone: true,
  template: `<a
    [attr.aria-label]="ariaLabel || null"
    [attr.href]="href || null"
    [attr.rel]="rel || null"
    [attr.target]="target || null"
    [class]="baseClass"
  >
    <span [class]="iconClass" *ngIf="showLeadingIcon" aria-hidden="true">↗</span>
    <ng-content></ng-content>
  </a>`,
})
export class HeroLinkComponent {
  @Input("aria-label") ariaLabel = "";
  @Input() className = "";
  @Input() href = "";
  @Input() rel = "";
  @Input() showLeadingIcon = false;
  @Input() target = "";

  private get slots() {
    return linkVariants();
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get iconClass() {
    return this.slots.icon();
  }
}
