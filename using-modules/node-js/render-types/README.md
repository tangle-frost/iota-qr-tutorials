# Tangle Frost - IOTA QR Codes - Render Types in NodeJS using Library

## Introduction

This tutorial demonstrates using the different IOTA QR render types in NodeJS from the all-in-one library.

## Render Types

There are various different types available:

* JPEG
* PNG
* SVG
* Canvas - is not available in NodeJS as it is an HTML element only
* Text

## Rendering

First include the library:

```js
const IotaQR = require("./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js");
```

In order to render the QR data we first create an instance of the QR class, add the data and then generate the cell data.

```js
const qr = new IotaQR.QR();
qr.addText("This is a test");
const qrCellData = qr.generate();
```

We can then use any of the renderers to generate the raw image data from the cell data.

```js
const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpeg");
jpegRenderer.renderRaw(qrCellData)
    .then((rawData) => {
        // Now save the data
    });
```

We can supply different options to the render to change colors and sizes.

```js
const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpeg", {
    foreground: IotaQR.Color.fromHex("#FF0000"),
    background: IotaQR.Color.fromHex("#00FF00")
});
const cellSize = 20;
const marginSize = 0;
jpegRenderer.renderRaw(qrCellData, cellSize, marginSize)
    .then((rawData) => {
        // Now save the data
    });
```