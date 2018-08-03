Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
async function updateQRCodes() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";
    try {
        const qr = new qr_1.QR(parseInt(getElementValue("typeNumber"), 10));
        qr.addText(getElementValue("testData"));
        const qrCellData = qr.generate();
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(getElementValue("testRenderType"), {
            foreground: color_1.Color.fromHex(getElementValue("testForeground")),
            background: color_1.Color.fromHex(getElementValue("testBackground"))
        });
        const htmlElement = await renderer.renderHtml(qrCellData, parseInt(getElementValue("testCellSize"), 10), parseInt(getElementValue("testMarginSize"), 10));
        document.getElementById("outputQR").appendChild(htmlElement);
    }
    catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}
function getElementValue(id) {
    return document.getElementById(id).value;
}
initRender_1.initRender();
updateQRCodes();
document.getElementById("updateButton").onclick = () => updateQRCodes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQWdFO0FBQ2hFLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBRTFFLEtBQUssVUFBVSxhQUFhO0lBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFbkQsSUFBSTtRQUNBLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxNQUFNLFFBQVEsR0FBRyxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQ3hDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNqQztZQUNJLFVBQVUsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVELFVBQVUsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUNmLE1BQU0sV0FBVyxHQUFHLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FDakMsVUFBVSxFQUNWLFFBQVEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzdDLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdELFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsRUFBVTtJQUMvQixPQUEwQixRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBRSxDQUFDLEtBQUssQ0FBQztBQUNqRSxDQUFDO0FBRUQsdUJBQVUsRUFBRSxDQUFDO0FBQ2IsYUFBYSxFQUFFLENBQUM7QUFFaEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMifQ==