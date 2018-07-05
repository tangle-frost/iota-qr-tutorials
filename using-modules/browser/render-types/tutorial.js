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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQWdFO0FBQ2hFLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBRTFFLEtBQUs7SUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRW5ELElBQUk7UUFDQSxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsTUFBTSxRQUFRLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUN4QyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFDakM7WUFDSSxVQUFVLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1RCxVQUFVLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvRCxDQUFDLENBQUM7UUFDZixNQUFNLFdBQVcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQ2pDLFVBQVUsRUFDVixRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUM3QyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRTtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQUVELHlCQUF5QixFQUFVO0lBQy9CLE9BQTBCLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2pFLENBQUM7QUFFRCx1QkFBVSxFQUFFLENBQUM7QUFDYixhQUFhLEVBQUUsQ0FBQztBQUVoQixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyJ9