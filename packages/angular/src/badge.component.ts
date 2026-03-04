import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {badgeVariants} from "@heroui/styles/components/badge";

export type HeroBadgeColor = "default" | "accent" | "success" | "warning" | "danger";
export type HeroBadgePlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type HeroBadgeSize = "sm" | "md" | "lg";
export type HeroBadgeVariant = "primary" | "secondary" | "soft";

@Component({
  imports: [CommonModule],
  selector: "hero-badge",
  standalone: true,
  template: `<span [class]="anchorClass">
    <ng-content select="[hero-badge-anchor]"></ng-content>
    <span [class]="baseClass">
      <span [class]="labelClass">
        <ng-content></ng-content>
      </span>
    </span>
  </span>`,
})
export class HeroBadgeComponent {
  @Input() className = "";
  @Input() color: HeroBadgeColor = "default";
  @Input() placement: HeroBadgePlacement = "top-right";
  @Input() size: HeroBadgeSize = "md";
  @Input() variant: HeroBadgeVariant = "primary";

  private get slots() {
    return badgeVariants({
      color: this.color,
      placement: this.placement,
      size: this.size,
      variant: this.variant,
    });
  }

  get anchorClass() {
    return this.slots.anchor();
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get labelClass() {
    return this.slots.label();
  }
}
