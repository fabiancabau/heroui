import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {buttonVariants} from "@heroui/styles/components/button";

export type HeroButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger"
  | "danger-soft";
export type HeroButtonSize = "sm" | "md" | "lg";

@Component({
  imports: [CommonModule],
  selector: "hero-button",
  standalone: true,
  template: `<button [attr.type]="type" [class]="classes" [disabled]="disabled">
    <ng-content></ng-content>
  </button>`,
})
export class HeroButtonComponent {
  @Input() className = "";
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() isIconOnly = false;
  @Input() size: HeroButtonSize = "md";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() variant: HeroButtonVariant = "primary";

  get classes() {
    const baseClasses = buttonVariants({
      fullWidth: this.fullWidth,
      isIconOnly: this.isIconOnly,
      size: this.size,
      variant: this.variant,
    });

    return this.className ? `${baseClasses} ${this.className}` : baseClasses;
  }
}
