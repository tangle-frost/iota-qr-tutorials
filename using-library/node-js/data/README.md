# Tangle Frost - IOTA QR Codes - Data in NodeJS using Library

## Introduction

This tutorial demonstrates using the different IOTA QR data manipulation methods in NodeJS from the all-in-one library.

## Data

There are various different data generation types available:

* Trinity Payment
* IOTA Address

## Rendering

First include the library:

```ts
import * as IotaQR from "./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js";
```

In order to render the QR data we first generate the payment data.

```ts
const paymentData = IotaQR.TrinityPaymentQR.generatePaymentData(
                    address,
                    value,
                    tag,
                    message);
```

We can then render the QR code with the options of our choice.

```ts
const rawData = await IotaQR.TrinityPaymentQR.renderRaw(paymentData, "jpg", 16);
// Write the rawData to a file
```

or we can render just an address instead of full payment data, no need for a QR code typeNumber as an address always requires the same capacity QR code.

```ts
const rawData = await IotaQR.AddressQR.renderRaw("AAAA...AAA", "jpg");
// Write the rawData to a file
```

We can supply different options to the render to change colors and sizes.

```ts
const rawData = await IotaQR.TrinityPaymentQR.renderRaw(paymentData, "jpg", 16, 4, 0,
                    {
                        foreground: IotaQR.Color.fromHex("#FF0000"),
                        background: IotaQR.Color.fromHex("#00FF00"),
                        cssClass: "my-custom-class"
                    });
// Write the rawData to a file
```