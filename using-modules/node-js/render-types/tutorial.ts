import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";
import * as fs from "fs";

async function updateQRCodes(typeNumber: number, testData: string, renderType: string): Promise<void> {
    try {
        const qr = new QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();

        const renderer = QRRendererFactory.instance().create(renderType);
        const rawData = await renderer.renderRaw(qrCellData);
        console.log(`Writing test.${renderType}`);
        fs.writeFileSync(`./test.${renderType}`, rawData);
    } catch(err) {
        console.error(err);
    }
}

initRender();
updateQRCodes(6, "This is a test", "jpg");
