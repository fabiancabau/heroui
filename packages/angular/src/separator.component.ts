import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {separatorVariants} from "@heroui/styles/components/separator";

export type HeroSeparatorOrientation = "horizontal" | "vertical";
export type HeroSeparatorVariant = "default" | "secondary" | "tertiary";

@Component({
  imports: [CommonModule],
  selector: "hero-separator",
  standalone: true,
  template: `<div [attr.aria-orientation]="orientation" [class]="classes" role="separator"></div>`,
})
export class HeroSeparatorComponent {
  @Input() className = "";
  @Input() orientation: HeroSeparatorOrientation = "horizontal";
  @Input() variant: HeroSeparatorVariant = "default";

  get classes() {
    return separatorVariants({
      class: this.className,
      orientation: this.orientation,
      variant: this.variant,
    });
  }
}
