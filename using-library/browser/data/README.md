# Tangle Frost - IOTA QR Codes - Data in Browser using Library

## Introduction

This tutorial demonstrates using the different IOTA QR data manipulation methods in your browser from the all-in-one library.

## Data

There are various different data generation types available:

* Trinity Payment
* IOTA Address

## Rendering

First include the library:

```html
<script src="./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js"></script>
```

In order to render the QR data we first generate the payment data.

```js
const paymentData = IotaQR.TrinityPaymentQR.generatePaymentData(
                    address,
                    value,
                    tag,
                    message);
```

We can then render the QR code with the options of our choice.

```js
IotaQR.TrinityPaymentQR.renderHtml(paymentData, "jpg", 16)
    .then((htmlElement) => {
        // Add the element to the dom
    });
```

or we can render just an address instead of full payment data, no need for a QR code typeNumber as an address always requires the same capacity QR code.

```js
IotaQR.AddressQR.renderHtml("AAAA...AAA", "jpg")
    .then((htmlElement) => {
        // Add the element to the dom
    });
```

We can supply different options to the render to change colors and sizes.

```js
IotaQR.TrinityPaymentQR.renderHtml(paymentData, "jpg", 16, 4, 0,
        {
            foreground: IotaQR.Color.fromHex("#FF0000"),
            background: IotaQR.Color.fromHex("#00FF00"),
            cssClass: "my-custom-class"
        })
        .then((htmlElement) => {
            // Add the element to the dom
        });
```