import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {selectVariants} from "@heroui/styles/components/select";

export type HeroSelectVariant = "primary" | "secondary";

export type HeroSelectOption = {
  label: string;
  value: string;
};

@Component({
  imports: [CommonModule],
  selector: "hero-select",
  standalone: true,
  template: `<div [class]="baseClass">
    <select
      [attr.aria-describedby]="ariaDescribedBy || null"
      [attr.aria-label]="ariaLabel || null"
      [class]="triggerClass"
      [disabled]="disabled"
      [value]="value"
      (change)="onNativeChange($event)"
    >
      <option *ngIf="placeholder" value="" disabled>{{ placeholder }}</option>
      <option *ngFor="let option of options" [value]="option.value">
        {{ option.label }}
      </option>
    </select>
    <span [class]="indicatorClass" aria-hidden="true">▾</span>
  </div>`,
})
export class HeroSelectComponent {
  @Input("aria-describedby") ariaDescribedBy = "";
  @Input("aria-label") ariaLabel = "";
  @Input() className = "";
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() options: HeroSelectOption[] = [];
  @Input() placeholder = "";
  @Input() value = "";
  @Input() variant: HeroSelectVariant = "primary";
  @Output() valueChange = new EventEmitter<string>();

  private get slots() {
    return selectVariants({
      fullWidth: this.fullWidth,
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get indicatorClass() {
    return this.slots.indicator();
  }

  get triggerClass() {
    return this.slots.trigger();
  }

  onNativeChange(event: Event) {
    const nextValue = (event.target as HTMLSelectElement).value;

    this.valueChange.emit(nextValue);
  }
}
