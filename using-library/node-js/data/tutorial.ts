import * as IotaQR from "./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js";
import * as fs from "fs";

async function generateQRCodePaymentData(
    address: string,
    value: number,
    tag: string,
    message: string,
    renderType: string,
    typeNumber: number): Promise<void> {
    try {
        const paymentData = IotaQR.TrinityPaymentQR.generatePaymentData(
                    address,
                    value,
                    tag,
                    message);

        const rawData = await IotaQR.TrinityPaymentQR.renderRaw(paymentData, renderType, typeNumber);

        fs.writeFileSync(`./test.${renderType}`, rawData);
    } catch(err) {
        console.error(err);
    }
}

generateQRCodePaymentData("A".repeat(90), 100, "MYTAG", "This is a test", "jpg", 0);
