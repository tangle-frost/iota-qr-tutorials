# Tangle Frost - IOTA QR Codes - Render Types in Browser using Modules

## Introduction

This tutorial demonstrates using the different IOTA QR render types in your browser from modules.

## Render Types

There are various different types available:

* JPEG
* PNG
* SVG
* Canvas
* Text

## Rendering

First we need to include the specific modules in our code:

```ts
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";
```

In order to render the QR data we first create an instance of the QR class, add the data and then generate the cell data.

```js
const qr = new QR();
qr.addText("This is a test");
const qrCellData = qr.generate();
```

We can then use any of the renderers to generate an HTML element from the cell data.

```js
const jpegRenderer = QRRendererFactory.instance().create("jpeg");
jpegRenderer.renderHtml(qrCellData)
    .then((htmlElement) => {
        // Now add the element to the DOM
    });
```

Instead of generating an HTML element we can generate raw data which could be saved to a file.

```js
const jpegRenderer = QRRendererFactory.instance().create("jpeg");
jpegRenderer.renderRaw(data)
    .then((data) => {
        // Now save the data to a file
    });
```

We can supply different options to the render to change colors and sizes.

```js
import { Color } from "@tangle-frost/iota-core/dist/data/color";

const jpegRenderer = QRRendererFactory.instance().create("jpeg", {
    foreground: Color.fromHex("#FF0000"),
    background: Color.fromHex("#00FF00"),
    cssClass: "my-custom-class"
});
const cellSize = 20;
const marginSize = 0;
jpegRenderer.renderHtml(qrCellData, cellSize, marginSize)
    .then((htmlElement) => {
        // Now add the element to the DOM
    });
```