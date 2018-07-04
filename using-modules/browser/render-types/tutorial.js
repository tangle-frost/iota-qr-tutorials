Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
function updateQRCodes() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";
    try {
        const qr = new qr_1.QR(parseInt(document.getElementById("typeNumber").value, 10));
        qr.addText(document.getElementById("testData").value);
        const qrCellData = qr.generate();
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(document.getElementById("testRenderType").value, {
            foreground: color_1.Color.fromHex(document.getElementById("testForeground").value),
            background: color_1.Color.fromHex(document.getElementById("testBackground").value)
        });
        renderer.renderHtml(qrCellData, parseInt(document.getElementById("testCellSize").value, 10), parseInt(document.getElementById("testMarginSize").value, 10))
            .then((htmlElement) => {
            document.getElementById("outputQR").appendChild(htmlElement);
        });
    }
    catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}
exports.updateQRCodes = updateQRCodes;
initRender_1.initRender();
updateQRCodes();
document.getElementById("updateButton").onclick = () => updateQRCodes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQWdFO0FBQ2hFLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBRTFFO0lBQ0ksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2hELFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVuRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsUUFBUSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLEVBQUUsQ0FBQyxPQUFPLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLEtBQUssRUFDbkU7WUFDSSxVQUFVLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLEtBQUssQ0FBQztZQUM5RixVQUFVLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLEtBQUssQ0FBQztTQUNqRyxDQUFDLENBQUM7UUFDZixRQUFRLENBQUMsVUFBVSxDQUNQLFVBQVUsRUFDVixRQUFRLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUMvRSxRQUFRLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDekYsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7S0FDVjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQXpCRCxzQ0F5QkM7QUFFRCx1QkFBVSxFQUFFLENBQUM7QUFDYixhQUFhLEVBQUUsQ0FBQztBQUVoQixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyJ9