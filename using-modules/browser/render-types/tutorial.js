Object.defineProperty(exports, "__esModule", { value: true });
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
function updateQRCodes() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("jpegQR").innerHTML = "";
    document.getElementById("pngQR").innerHTML = "";
    document.getElementById("svgQR").innerHTML = "";
    document.getElementById("canvasQR").innerHTML = "";
    document.getElementById("txtQR").innerHTML = "";
    try {
        const qr = new qr_1.QR(parseInt(document.getElementById("typeNumber").value, 10));
        qr.addText(document.getElementById("testData").value);
        const qrCellData = qr.generate();
        const jpegRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
            document.getElementById("jpegQR").appendChild(htmlElement);
        });
        const pngRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("png");
        pngRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
            document.getElementById("pngQR").appendChild(htmlElement);
        });
        const svgRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("svg");
        svgRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
            document.getElementById("svgQR").appendChild(htmlElement);
        });
        const canvasRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("canvas");
        canvasRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
            document.getElementById("canvasQR").appendChild(htmlElement);
        });
        const txtRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("text");
        txtRenderer.renderHtml(qrCellData)
            .then((htmlElement) => {
            document.getElementById("txtQR").appendChild(htmlElement);
        });
    }
    catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}
exports.updateQRCodes = updateQRCodes;
initRender_1.initRender();
updateQRCodes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQXdEO0FBQ3hELHFHQUFrRztBQUNsRyw2RUFBMEU7QUFFMUU7SUFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25ELFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVoRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsUUFBUSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLEVBQUUsQ0FBQyxPQUFPLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE1BQU0sWUFBWSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUM5QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sV0FBVyxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUM3QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sV0FBVyxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUM3QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sY0FBYyxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUNoQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sV0FBVyxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUM3QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztLQUNWO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBN0NELHNDQTZDQztBQUVELHVCQUFVLEVBQUUsQ0FBQztBQUNiLGFBQWEsRUFBRSxDQUFDIn0=