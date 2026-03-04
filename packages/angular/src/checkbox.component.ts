import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {checkboxVariants} from "@heroui/styles/components/checkbox";

export type HeroCheckboxVariant = "primary" | "secondary";

@Component({
  imports: [CommonModule],
  selector: "hero-checkbox",
  standalone: true,
  template: `<label
    [attr.aria-checked]="checkedAttr"
    [attr.aria-disabled]="disabledAttr"
    [attr.data-selected]="checkedAttr"
    [class]="baseClass"
  >
    <input
      [checked]="checked"
      [disabled]="disabled"
      [name]="name"
      class="sr-only"
      type="checkbox"
      (change)="onChange($event)"
    />
    <span [class]="controlClass">
      <span [class]="indicatorClass">
        <svg
          *ngIf="checked"
          aria-hidden="true"
          data-slot="checkbox-default-indicator--checkmark"
          fill="none"
          viewBox="0 0 12 10"
        >
          <polyline points="1.5 5.5 4.5 8.5 10.5 1.5" stroke="currentColor"></polyline>
        </svg>
      </span>
    </span>
    <span [class]="contentClass" data-slot="label">
      <ng-content></ng-content>
    </span>
  </label>`,
})
export class HeroCheckboxComponent {
  @Input() checked = false;
  @Input() className = "";
  @Input() disabled = false;
  @Input() name = "";
  @Input() variant: HeroCheckboxVariant = "primary";
  @Output() checkedChange = new EventEmitter<boolean>();

  private get slots() {
    return checkboxVariants({
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get checkedAttr() {
    return this.checked ? "true" : null;
  }

  get contentClass() {
    return this.slots.content();
  }

  get controlClass() {
    return this.slots.control();
  }

  get disabledAttr() {
    return this.disabled ? "true" : null;
  }

  get indicatorClass() {
    return this.slots.indicator();
  }

  onChange(event: Event) {
    this.checkedChange.emit((event.target as HTMLInputElement).checked);
  }
}
