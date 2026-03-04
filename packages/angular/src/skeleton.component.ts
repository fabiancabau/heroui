import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {skeletonVariants} from "@heroui/styles/components/skeleton";

export type HeroSkeletonAnimation = "none" | "pulse" | "shimmer";

@Component({
  imports: [CommonModule],
  selector: "hero-skeleton",
  standalone: true,
  template: `<div [class]="baseClass" aria-hidden="true"><ng-content></ng-content></div>`,
})
export class HeroSkeletonComponent {
  @Input() animationType: HeroSkeletonAnimation = "shimmer";
  @Input() className = "";

  get baseClass() {
    return skeletonVariants({
      animationType: this.animationType,
    }).base({class: this.className});
  }
}
