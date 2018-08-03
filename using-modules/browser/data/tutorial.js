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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOEVBQTJFO0FBQzNFLDRGQUF5RjtBQUN6Riw2RUFBMEU7QUFFMUUsS0FBSyxVQUFVLHlCQUF5QjtJQUNwQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRW5ELElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsbUNBQWdCLENBQUMsbUJBQW1CLENBQ3BELGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFDOUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDOUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUMxQixlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUVwQyxNQUFNLFdBQVcsR0FBRyxNQUFNLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQzdELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNqQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztLQUNwRDtBQUNMLENBQUM7QUFFRCxLQUFLLFVBQVUscUJBQXFCO0lBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFbkQsSUFBSTtRQUNBLE1BQU0sV0FBVyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDcEgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztLQUNwRDtBQUNMLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxFQUFVO0lBQy9CLE9BQTBCLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2pFLENBQUM7QUFFRCx1QkFBVSxFQUFFLENBQUM7QUFFYixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUM7QUFDdEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyJ9