import { AddressQR } from "@tangle-frost/iota-qr-data/dist/data/addressQR";
import { TrinityPaymentQR } from "@tangle-frost/iota-qr-data/dist/data/trinityPaymentQR";
import { initRender } from "@tangle-frost/iota-qr-render/dist/initRender";

async function generateQRCodePaymentData() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";

    try {
        const val = getElementValue("testAmount");
        const paymentData = TrinityPaymentQR.generatePaymentData(
            getElementValue("testAddress"),
            val.length > 0 ? parseInt(val, 10) : undefined,
            getElementValue("testTag"),
            getElementValue("testMessage"));

        const htmlElement = await TrinityPaymentQR.renderHtml(paymentData,
            getElementValue("testRenderType"),
            parseInt(getElementValue("typeNumber"), 10));

        document.getElementById("outputQR").appendChild(htmlElement);
    } catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}

async function generateQRCodeAddress() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";

    try {
        const htmlElement = await AddressQR.renderHtml(getElementValue("testAddress2"), getElementValue("testRenderType2"));
        document.getElementById("outputQR").appendChild(htmlElement);
    } catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}

function getElementValue(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

initRender();

document.getElementById("btnPaymentData").onclick = () => generateQRCodePaymentData();
document.getElementById("btnAddress").onclick = () => generateQRCodeAddress();
