import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";
import * as fs from "fs";

function updateQRCodes(typeNumber: number, testData: string): void {
    try {
        const qr = new QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();

        const jpegRenderer = QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.jpg");
                fs.writeFileSync("./test.jpg", rawData);
            });

        const pngRenderer = QRRendererFactory.instance().create("png");
        pngRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.png");
                fs.writeFileSync("./test.png", rawData);
            });

        const svgRenderer = QRRendererFactory.instance().create("svg");
        svgRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.svg");
                fs.writeFileSync("./test.svg", rawData);
            });


        const txtRenderer = QRRendererFactory.instance().create("text");
        txtRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.txt");
                fs.writeFileSync("./test.txt", rawData);
            });
    } catch(err) {
        console.error(err);
    }
}

initRender();
updateQRCodes(6, "This is a test");
