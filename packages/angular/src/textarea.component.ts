import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {textAreaVariants} from "@heroui/styles/components/textarea";

export type HeroTextareaVariant = "primary" | "secondary";

@Component({
  imports: [CommonModule],
  selector: "hero-textarea",
  standalone: true,
  template: `<textarea
    [attr.aria-describedby]="ariaDescribedBy || null"
    [attr.aria-label]="ariaLabel || null"
    [attr.id]="id || null"
    [attr.name]="name || null"
    [attr.placeholder]="placeholder || null"
    [class]="classes"
    [disabled]="disabled"
    [readOnly]="readonly"
    [required]="required"
    [value]="value"
    (input)="onInput($event)"
  ></textarea>`,
})
export class HeroTextareaComponent {
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
  @Input() value = "";
  @Input() variant: HeroTextareaVariant = "primary";
  @Output() valueChange = new EventEmitter<string>();

  get classes() {
    return textAreaVariants({
      class: this.className,
      fullWidth: this.fullWidth,
      variant: this.variant,
    });
  }

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLTextAreaElement).value);
  }
}
