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
import {HeroButtonComponent} from "@heroui/angular";

@Component({
  imports: [HeroButtonComponent],
  selector: "app-root",
  standalone: true,
  template: `<hero-button variant="secondary">Click me</hero-button>`,
})
export class AppComponent {}
```
