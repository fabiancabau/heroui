import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {inputVariants} from "@heroui/styles/components/input";

export type HeroInputVariant = "primary" | "secondary";

@Component({
  imports: [CommonModule],
  selector: "hero-input",
  standalone: true,
  template: `<input
    [attr.aria-describedby]="ariaDescribedBy || null"
    [attr.aria-label]="ariaLabel || null"
    [attr.id]="id || null"
    [attr.name]="name || null"
    [attr.placeholder]="placeholder || null"
    [attr.type]="type"
    [class]="classes"
    [disabled]="disabled"
    [readonly]="readonly"
    [required]="required"
    [value]="value"
  />`,
})
export class HeroInputComponent {
  @Input("aria-describedby") ariaDescribedBy = "";
  @Input("aria-label") ariaLabel = "";
  @Input() className = "";
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() id = "";
  @Input() name = "";
  @Input() placeholder = "";
  @Input() readonly = false;
  @Input() required = false;
  @Input() type = "text";
  @Input() value = "";
  @Input() variant: HeroInputVariant = "primary";

  get classes() {
    return inputVariants({
      class: this.className,
      fullWidth: this.fullWidth,
      variant: this.variant,
    });
  }
}
