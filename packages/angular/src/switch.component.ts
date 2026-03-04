import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {switchVariants} from "@heroui/styles/components/switch";

export type HeroSwitchSize = "sm" | "md" | "lg";

@Component({
  imports: [CommonModule],
  selector: "hero-switch",
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
      <span [class]="thumbClass">
        <span [class]="iconClass" aria-hidden="true">{{ checked ? "✓" : "" }}</span>
      </span>
    </span>
    <span [class]="contentClass">
      <ng-content></ng-content>
    </span>
  </label>`,
})
export class HeroSwitchComponent {
  @Input() checked = false;
  @Input() className = "";
  @Input() disabled = false;
  @Input() name = "";
  @Input() size: HeroSwitchSize = "md";
  @Output() checkedChange = new EventEmitter<boolean>();

  private get slots() {
    return switchVariants({
      size: this.size,
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

  get iconClass() {
    return this.slots.icon();
  }

  get thumbClass() {
    return this.slots.thumb();
  }

  onChange(event: Event) {
    this.checkedChange.emit((event.target as HTMLInputElement).checked);
  }
}
