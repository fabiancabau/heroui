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
  HeroButtonComponent,
  HeroCardComponent,
  HeroInputComponent,
  HeroModalComponent,
  HeroSelectComponent,
} from "@heroui/angular";

@Component({
  imports: [
    HeroButtonComponent,
    HeroCardComponent,
    HeroInputComponent,
    HeroModalComponent,
    HeroSelectComponent,
  ],
  selector: "app-root",
  standalone: true,
  template: `
    <hero-card>
      <span hero-card-title>Angular + HeroUI</span>
      <span hero-card-description>Experimental wrappers</span>
      <hero-input placeholder="Email"></hero-input>
      <hero-select [options]="plans"></hero-select>
      <hero-button variant="secondary" (click)="isOpen = true">Open modal</hero-button>
      <hero-modal [(isOpen)]="isOpen">
        <div hero-modal-header>Confirm</div>
        Are you sure you want to continue?
        <div hero-modal-footer>
          <hero-button (click)="isOpen = false">Close</hero-button>
        </div>
      </hero-modal>
    </hero-card>
  `,
})
export class AppComponent {
  isOpen = false;
  plans = [
    {label: "Starter", value: "starter"},
    {label: "Pro", value: "pro"},
  ];
}
```
