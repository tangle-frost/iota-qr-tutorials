import * as IotaQR from "./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js";
import * as fs from "fs";

async function updateQRCodes(typeNumber: number, testData: string, renderType: string): Promise<void> {
    try {
        const qr = new IotaQR.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();

        const renderer = IotaQR.QRRendererFactory.instance().create(renderType);
        const rawData = await renderer.renderRaw(qrCellData);
        console.log(`Writing test.${renderType}`);
        fs.writeFileSync(`./test.${renderType}`, rawData);
    } catch(err) {
        console.error(err);
    }
}

updateQRCodes(6, "This is a test", "jpg");
