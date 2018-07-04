import * as IotaQR from "./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js";
import * as fs from "fs";

function updateQRCodes(typeNumber: number, testData: string): void {
    try {
        const qr = new IotaQR.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();

        const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.jpg");
                fs.writeFileSync("./test.jpg", rawData);
            });

        const pngRenderer = IotaQR.QRRendererFactory.instance().create("png");
        pngRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.png");
                fs.writeFileSync("./test.png", rawData);
            });

        const svgRenderer = IotaQR.QRRendererFactory.instance().create("svg");
        svgRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.svg");
                fs.writeFileSync("./test.svg", rawData);
            });


        const txtRenderer = IotaQR.QRRendererFactory.instance().create("text");
        txtRenderer.renderRaw(qrCellData)
            .then((rawData) => {
                console.log("Writing test.txt");
                fs.writeFileSync("./test.txt", rawData);
            });
    } catch(err) {
        console.error(err);
    }
}

updateQRCodes(6, "This is a test");
