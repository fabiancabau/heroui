import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {cardVariants} from "@heroui/styles/components/card";

export type HeroCardVariant = "default" | "secondary" | "tertiary" | "transparent";

@Component({
  imports: [CommonModule],
  selector: "hero-card",
  standalone: true,
  template: `<article [class]="baseClass">
    <header [class]="headerClass">
      <h3 [class]="titleClass">
        <ng-content select="[hero-card-title]"></ng-content>
      </h3>
      <p [class]="descriptionClass">
        <ng-content select="[hero-card-description]"></ng-content>
      </p>
      <ng-content select="[hero-card-header]"></ng-content>
    </header>
    <section [class]="contentClass">
      <ng-content></ng-content>
    </section>
    <footer [class]="footerClass">
      <ng-content select="[hero-card-footer]"></ng-content>
    </footer>
  </article>`,
})
export class HeroCardComponent {
  @Input() className = "";
  @Input() variant: HeroCardVariant = "default";

  private get slots() {
    return cardVariants({
      variant: this.variant,
    });
  }

  get baseClass() {
    return this.slots.base({class: this.className});
  }

  get contentClass() {
    return this.slots.content();
  }

  get descriptionClass() {
    return this.slots.description();
  }

  get footerClass() {
    return this.slots.footer();
  }

  get headerClass() {
    return this.slots.header();
  }

  get titleClass() {
    return this.slots.title();
  }
}
