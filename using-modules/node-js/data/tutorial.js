var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressQR_1 = require("@tangle-frost/iota-qr-data/dist/data/addressQR");
const trinityPaymentQR_1 = require("@tangle-frost/iota-qr-data/dist/data/trinityPaymentQR");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
const fs = __importStar(require("fs"));
async function generateQRCodePaymentData(address, value, tag, message, renderType, typeNumber) {
    try {
        const paymentData = trinityPaymentQR_1.TrinityPaymentQR.generatePaymentData(address, value, tag, message);
        const rawData = await trinityPaymentQR_1.TrinityPaymentQR.renderRaw(paymentData, renderType, typeNumber);
        console.log(`Writing paymentData.${renderType}`);
        fs.writeFileSync(`./paymentData.${renderType}`, rawData);
    }
    catch (err) {
        console.error(err);
    }
}
async function generateQRCodeAddress(address, renderType) {
    try {
        const rawData = await addressQR_1.AddressQR.renderRaw(address, renderType);
        console.log(`Writing address.${renderType}`);
        fs.writeFileSync(`./address.${renderType}`, rawData);
    }
    catch (err) {
        console.error(err);
    }
}
initRender_1.initRender();
generateQRCodePaymentData("A".repeat(90), 100, "HELLO", "This is a test", "jpg", 16);
generateQRCodeAddress("A".repeat(90), "jpg");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhFQUEyRTtBQUMzRSw0RkFBeUY7QUFDekYsNkVBQTBFO0FBQzFFLHVDQUF5QjtBQUV6QixLQUFLLFVBQVUseUJBQXlCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsT0FBZSxFQUFFLFVBQWtCLEVBQUUsVUFBa0I7SUFDekksSUFBSTtRQUNBLE1BQU0sV0FBVyxHQUFHLG1DQUFnQixDQUFDLG1CQUFtQixDQUNwRCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEdBQUcsRUFDSCxPQUFPLENBQUMsQ0FBQztRQUViLE1BQU0sT0FBTyxHQUFHLE1BQU0sbUNBQWdCLENBQUMsU0FBUyxDQUM1QyxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsVUFBVSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDNUQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsS0FBSyxVQUFVLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxVQUFrQjtJQUNwRSxJQUFJO1FBQ0EsTUFBTSxPQUFPLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsVUFBVSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDeEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsdUJBQVUsRUFBRSxDQUFDO0FBRWIseUJBQXlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRixxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=