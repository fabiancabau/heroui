import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {avatarVariants} from "@heroui/styles/components/avatar";

export type HeroAvatarColor = "default" | "accent" | "success" | "warning" | "danger";
export type HeroAvatarSize = "sm" | "md" | "lg";
export type HeroAvatarVariant = "default" | "soft";

@Component({
  imports: [CommonModule],
  selector: "hero-avatar",
  standalone: true,
  template: `<span [class]="baseClass">
    <img *ngIf="src" [alt]="alt" [class]="imageClass" [src]="src" />
    <span *ngIf="!src" [class]="fallbackClass">
      <ng-content>{{ fallback }}</ng-content>
    </span>
  </span>`,
})
export class HeroAvatarComponent {
  @Input() alt = "Avatar";
  @Input() className = "";
  @Input() color: HeroAvatarColor = "default";
  @Input() fallback = "";
  @Input() size: HeroAvatarSize = "md";
  @Input() src = "";
  @Input() variant: HeroAvatarVariant = "default";

  private get slots() {
    return avatarVariants({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get fallbackClass() {
    return this.slots.fallback();
  }

  get imageClass() {
    return this.slots.image();
  }
}
