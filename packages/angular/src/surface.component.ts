import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {surfaceVariants} from "@heroui/styles/components/surface";

export type HeroSurfaceVariant = "default" | "secondary" | "tertiary" | "transparent";

@Component({
  imports: [CommonModule],
  selector: "hero-surface",
  standalone: true,
  template: `<div [class]="classes"><ng-content></ng-content></div>`,
})
export class HeroSurfaceComponent {
  @Input() className = "";
  @Input() variant: HeroSurfaceVariant = "default";

  get classes() {
    return surfaceVariants({
      class: this.className,
      variant: this.variant,
    });
  }
}
