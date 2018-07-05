# Tangle Frost - IOTA QR Codes - Render Types in Browser using Library

## Introduction

This tutorial demonstrates using the different IOTA QR render types in your browser from the all-in-one library.

## Render Types

There are various different types available:

* JPEG
* PNG
* SVG
* Canvas
* Text

## Rendering

First include the library:

```html
<script src="./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js"></script>
```

In order to render the QR data we first create an instance of the QR class, add the data and then generate the cell data.

```js
const qr = new IotaQR.QR();
qr.addText("This is a test");
const qrCellData = qr.generate();
```

We can then use any of the renderers to generate an HTML element from the cell data.

```js
const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpg");
jpegRenderer.renderHtml(qrCellData)
    .then((htmlElement) => {
        // Now add the element to the DOM
    });
```

We can supply different options to the render to change colors and sizes.

```js
const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpg", {
    foreground: IotaQR.Color.fromHex("#FF0000"),
    background: IotaQR.Color.fromHex("#00FF00"),
    cssClass: "my-custom-class"
});
const cellSize = 20;
const marginSize = 0;
jpegRenderer.renderHtml(qrCellData, cellSize, marginSize)
    .then((htmlElement) => {
        // Now add the element to the DOM
    });
```