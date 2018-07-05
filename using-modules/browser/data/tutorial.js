Object.defineProperty(exports, "__esModule", { value: true });
const addressQR_1 = require("@tangle-frost/iota-qr-data/dist/data/addressQR");
const trinityPaymentQR_1 = require("@tangle-frost/iota-qr-data/dist/data/trinityPaymentQR");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
async function generateQRCodePaymentData() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";
    try {
        const val = getElementValue("testAmount");
        const paymentData = trinityPaymentQR_1.TrinityPaymentQR.generatePaymentData(getElementValue("testAddress"), val.length > 0 ? parseInt(val, 10) : undefined, getElementValue("testTag"), getElementValue("testMessage"));
        const htmlElement = await trinityPaymentQR_1.TrinityPaymentQR.renderHtml(paymentData, getElementValue("testRenderType"), parseInt(getElementValue("typeNumber"), 10));
        document.getElementById("outputQR").appendChild(htmlElement);
    }
    catch (err) {
        document.getElementById("error").innerHTML = err;
    }
}
async function generateQRCodeAddress() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("outputQR").innerHTML = "";
    try {
        const htmlElement = await addressQR_1.AddressQR.renderHtml(getElementValue("testAddress2"), getElementValue("testRenderType2"));
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
document.getElementById("btnPaymentData").onclick = () => generateQRCodePaymentData();
document.getElementById("btnAddress").onclick = () => generateQRCodeAddress();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOEVBQTJFO0FBQzNFLDRGQUF5RjtBQUN6Riw2RUFBMEU7QUFFMUUsS0FBSztJQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFbkQsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxtQ0FBZ0IsQ0FBQyxtQkFBbUIsQ0FDcEQsZUFBZSxDQUFDLGFBQWEsQ0FBQyxFQUM5QixHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUM5QyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQzFCLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sV0FBVyxHQUFHLE1BQU0sbUNBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFDN0QsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQ2pDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqRCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRTtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQUVELEtBQUs7SUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRW5ELElBQUk7UUFDQSxNQUFNLFdBQVcsR0FBRyxNQUFNLHFCQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFBRSxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3BILFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBRUQseUJBQXlCLEVBQVU7SUFDL0IsT0FBMEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUUsQ0FBQyxLQUFLLENBQUM7QUFDakUsQ0FBQztBQUVELHVCQUFVLEVBQUUsQ0FBQztBQUViLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUN0RixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDIn0=