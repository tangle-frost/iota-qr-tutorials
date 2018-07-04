import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";

export function updateQRCodes(): void {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";

    try {
        const qr = new QR(parseInt((<HTMLInputElement>document.getElementById("typeNumber")).value, 10));
        qr.addText((<HTMLInputElement>document.getElementById("testData")).value);
        const qrCellData = qr.generate();

        const renderer = QRRendererFactory.instance().create(
                    (<HTMLInputElement>document.getElementById("testRenderType")).value, 
                    { 
                        foreground: Color.fromHex((<HTMLInputElement>document.getElementById("testForeground")).value),
                        background: Color.fromHex((<HTMLInputElement>document.getElementById("testBackground")).value)
                    });
        renderer.renderHtml(
                    qrCellData,
                    parseInt((<HTMLInputElement>document.getElementById("testCellSize")).value, 10),
                    parseInt((<HTMLInputElement>document.getElementById("testMarginSize")).value, 10))
            .then((htmlElement) => {
                document.getElementById("outputQR").appendChild(htmlElement);
            });
    } catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}

initRender();
updateQRCodes();

document.getElementById("updateButton").onclick = () => updateQRCodes();
