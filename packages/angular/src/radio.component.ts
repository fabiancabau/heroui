import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {radioVariants} from "@heroui/styles/components/radio";

@Component({
  imports: [CommonModule],
  selector: "hero-radio",
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
      [value]="value"
      class="sr-only"
      type="radio"
      (change)="onChange($event)"
    />
    <span [class]="controlClass">
      <span [class]="indicatorClass"></span>
    </span>
    <span [class]="contentClass">
      <ng-content></ng-content>
    </span>
  </label>`,
})
export class HeroRadioComponent {
  @Input() checked = false;
  @Input() className = "";
  @Input() disabled = false;
  @Input() name = "";
  @Input() value = "";
  @Output() checkedChange = new EventEmitter<boolean>();

  private get slots() {
    return radioVariants();
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
