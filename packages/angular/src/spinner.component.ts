import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {spinnerVariants} from "@heroui/styles/components/spinner";

export type HeroSpinnerColor = "accent" | "current" | "success" | "warning" | "danger";
export type HeroSpinnerSize = "sm" | "md" | "lg" | "xl";

@Component({
  imports: [CommonModule],
  selector: "hero-spinner",
  standalone: true,
  template: `<span [attr.aria-label]="ariaLabel" [class]="classes" role="status"></span>`,
})
export class HeroSpinnerComponent {
  @Input("aria-label") ariaLabel = "Loading";
  @Input() className = "";
  @Input() color: HeroSpinnerColor = "accent";
  @Input() size: HeroSpinnerSize = "md";

  get classes() {
    return spinnerVariants({
      class: this.className,
      color: this.color,
      size: this.size,
    });
  }
}
