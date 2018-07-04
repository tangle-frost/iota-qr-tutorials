import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";

export function updateQRCodes(): void {
    document.getElementById("error").innerHTML = "";
    document.getElementById("jpegQR").innerHTML = "";
    document.getElementById("pngQR").innerHTML = "";
    document.getElementById("svgQR").innerHTML = "";
    document.getElementById("canvasQR").innerHTML = "";
    document.getElementById("txtQR").innerHTML = "";

    try {
        const qr = new QR(parseInt((<HTMLInputElement>document.getElementById("typeNumber")).value, 10));
        qr.addText((<HTMLInputElement>document.getElementById("testData")).value);
        const qrCellData = qr.generate();

        const jpegRenderer = QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
                document.getElementById("jpegQR").appendChild(htmlElement);
            });

        const pngRenderer = QRRendererFactory.instance().create("png");
        pngRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
                document.getElementById("pngQR").appendChild(htmlElement);
            });

        const svgRenderer = QRRendererFactory.instance().create("svg");
        svgRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
                document.getElementById("svgQR").appendChild(htmlElement);
            });

        const canvasRenderer = QRRendererFactory.instance().create("canvas");
        canvasRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
                document.getElementById("canvasQR").appendChild(htmlElement);
            });

        const txtRenderer = QRRendererFactory.instance().create("text");
        txtRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
                document.getElementById("txtQR").appendChild(htmlElement);
            });
    } catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}

initRender();
updateQRCodes();
