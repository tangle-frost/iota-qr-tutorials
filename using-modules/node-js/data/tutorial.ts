import { AddressQR } from "@tangle-frost/iota-qr-data/dist/data/addressQR";
import { TrinityPaymentQR } from "@tangle-frost/iota-qr-data/dist/data/trinityPaymentQR";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";
import * as fs from "fs";

async function generateQRCodePaymentData(address: string, value: number, tag: string, message: string, renderType: string, typeNumber: number): Promise<void> {
    try {
        const paymentData = TrinityPaymentQR.generatePaymentData(
            address,
            value,
            tag,
            message);

        const rawData = await TrinityPaymentQR.renderRaw(
            paymentData,
            renderType,
            typeNumber);

        console.log(`Writing paymentData.${renderType}`);
        fs.writeFileSync(`./paymentData.${renderType}`, rawData);
    } catch (err) {
        console.error(err);
    }
}

async function generateQRCodeAddress(address: string, renderType: string) {
    try {
        const rawData = await AddressQR.renderRaw(address, renderType);
        console.log(`Writing address.${renderType}`);
        fs.writeFileSync(`./address.${renderType}`, rawData);
    } catch (err) {
        console.error(err);
    }
}

initRender();

generateQRCodePaymentData("A".repeat(90), 100, "HELLO", "This is a test", "jpg", 16);
generateQRCodeAddress("A".repeat(90), "jpg");