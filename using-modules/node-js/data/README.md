# Tangle Frost - IOTA QR Codes - Data in NodeJS using Modules

## Introduction

This tutorial demonstrates using the different IOTA QR data manipulation methods in NodeJS from modules.

## Data

There are various different data generation types available:

* Trinity Payment
* IOTA Address

## Rendering

First include the libraries:

```ts
import { AddressQR } from "@tangle-frost/iota-qr-data/dist/data/addressQR";
import { TrinityPaymentQR } from "@tangle-frost/iota-qr-data/dist/data/trinityPaymentQR";
```

In order to render the QR data we first generate the payment data.

```ts
const paymentData = TrinityPaymentQR.generatePaymentData(
                        address,
                        value,
                        tag,
                        message);
```

We can then render the QR code with the options of our choice.

```ts
const rawData = await TrinityPaymentQR.renderRaw(paymentData, "jpg", 16);
// Write the rawData to a file
```

or we can render just an address instead of full payment data, no need for a QR code typeNumber as an address always requires the same capacity QR code.

```ts
const rawData = await AddressQR.renderRaw("AAAA...AAA", "jpg");
// Write the rawData to a file
```

We can supply different options to the render to change colors and sizes.

```ts
const rawData = await TrinityPaymentQR.renderRaw(paymentData, "jpg", 16, 4, 0,
        {
            foreground: IotaQR.Color.fromHex("#FF0000"),
            background: IotaQR.Color.fromHex("#00FF00")
        });
// Write the rawData to a file
```