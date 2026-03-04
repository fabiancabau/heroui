# @heroui/angular

Experimental Angular v21 compatibility primitives for HeroUI v3.

## Installation

```bash
pnpm add @heroui/angular @heroui/styles
```

Then load HeroUI styles once in your global styles entry:

```css
@import "@heroui/styles/css";
```

## Usage

```ts
import {Component} from "@angular/core";
import {
  HeroAvatarComponent,
  HeroBadgeComponent,
  HeroButtonComponent,
  HeroCardComponent,
  HeroCheckboxComponent,
  HeroChipComponent,
  HeroInputComponent,
  HeroLinkComponent,
  HeroModalComponent,
  HeroRadioComponent,
  HeroSeparatorComponent,
  HeroSelectComponent,
  HeroSkeletonComponent,
  HeroSpinnerComponent,
  HeroSurfaceComponent,
  HeroSwitchComponent,
  HeroTagComponent,
  HeroTextareaComponent,
} from "@heroui/angular";

@Component({
  imports: [
    HeroAvatarComponent,
    HeroBadgeComponent,
    HeroButtonComponent,
    HeroCardComponent,
    HeroCheckboxComponent,
    HeroChipComponent,
    HeroInputComponent,
    HeroLinkComponent,
    HeroModalComponent,
    HeroRadioComponent,
    HeroSeparatorComponent,
    HeroSelectComponent,
    HeroSkeletonComponent,
    HeroSpinnerComponent,
    HeroSurfaceComponent,
    HeroSwitchComponent,
    HeroTagComponent,
    HeroTextareaComponent,
  ],
  selector: "app-root",
  standalone: true,
  template: `
    <hero-surface className="p-6">
    <hero-card>
      <span hero-card-title>Angular + HeroUI</span>
      <span hero-card-description>Experimental wrappers</span>
      <hero-input [(value)]="email" placeholder="Email"></hero-input>
      <hero-textarea [(value)]="notes" placeholder="Notes"></hero-textarea>
      <hero-select [(value)]="selectedPlan" [options]="plans"></hero-select>
      <hero-switch [(checked)]="enabled">Enable notifications</hero-switch>
      <hero-checkbox [(checked)]="accepted">Accept terms</hero-checkbox>
      <hero-radio name="tier" value="starter" [(checked)]="starterSelected">Starter tier</hero-radio>
      <hero-separator></hero-separator>
      <hero-link href="https://heroui.com" target="_blank">Visit HeroUI</hero-link>
      <hero-avatar fallback="HC"></hero-avatar>
      <hero-badge>
        4
        <span hero-badge-anchor><hero-avatar fallback="FC"></hero-avatar></span>
      </hero-badge>
      <hero-chip color="accent" variant="soft">Angular</hero-chip>
      <hero-tag removable (remove)="onTagRemove()">Preview</hero-tag>
      <hero-skeleton className="h-6 w-40"></hero-skeleton>
      <hero-spinner></hero-spinner>
      <hero-button variant="secondary" (click)="isOpen = true">Open modal</hero-button>
      <hero-modal [(isOpen)]="isOpen">
        <div hero-modal-header>Confirm</div>
        Are you sure you want to continue?
        <div hero-modal-footer>
          <hero-button (click)="isOpen = false">Close</hero-button>
        </div>
      </hero-modal>
    </hero-card>
    </hero-surface>
  `,
})
export class AppComponent {
  accepted = false;
  email = "";
  enabled = false;
  isOpen = false;
  notes = "";
  selectedPlan = "starter";
  starterSelected = true;
  plans = [
    {label: "Starter", value: "starter"},
    {label: "Pro", value: "pro"},
  ];

  onTagRemove() {}
}
```
