import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {chipVariants} from "@heroui/styles/components/chip";

export type HeroChipColor = "default" | "accent" | "success" | "warning" | "danger";
export type HeroChipSize = "sm" | "md" | "lg";
export type HeroChipVariant = "primary" | "secondary" | "soft" | "tertiary";

@Component({
  imports: [CommonModule],
  selector: "hero-chip",
  standalone: true,
  template: `<span [class]="baseClass">
    <span [class]="labelClass">
      <ng-content></ng-content>
    </span>
  </span>`,
})
export class HeroChipComponent {
  @Input() className = "";
  @Input() color: HeroChipColor = "default";
  @Input() size: HeroChipSize = "md";
  @Input() variant: HeroChipVariant = "secondary";

  private get slots() {
    return chipVariants({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get labelClass() {
    return this.slots.label();
  }
}
