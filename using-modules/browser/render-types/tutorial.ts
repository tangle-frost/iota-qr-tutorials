import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";

async function updateQRCodes(): Promise<void> {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";

    try {
        const qr = new QR(parseInt(getElementValue("typeNumber"), 10));
        qr.addText(getElementValue("testData"));
        const qrCellData = qr.generate();

        const renderer = QRRendererFactory.instance().create(
                    getElementValue("testRenderType"), 
                    { 
                        foreground: Color.fromHex(getElementValue("testForeground")),
                        background: Color.fromHex(getElementValue("testBackground"))
                    });
        const htmlElement = await renderer.renderHtml(
                    qrCellData,
                    parseInt(getElementValue("testCellSize"), 10),
                    parseInt(getElementValue("testMarginSize"), 10));

        document.getElementById("outputQR").appendChild(htmlElement);
    } catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}

function getElementValue(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

initRender();
updateQRCodes();

document.getElementById("updateButton").onclick = () => updateQRCodes();
