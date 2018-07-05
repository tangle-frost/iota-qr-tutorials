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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhFQUEyRTtBQUMzRSw0RkFBeUY7QUFDekYsNkVBQTBFO0FBQzFFLHVDQUF5QjtBQUV6QixLQUFLLG9DQUFvQyxPQUFlLEVBQUUsS0FBYSxFQUFFLEdBQVcsRUFBRSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUFrQjtJQUN6SSxJQUFJO1FBQ0EsTUFBTSxXQUFXLEdBQUcsbUNBQWdCLENBQUMsbUJBQW1CLENBQ3BELE9BQU8sRUFDUCxLQUFLLEVBQ0wsR0FBRyxFQUNILE9BQU8sQ0FBQyxDQUFDO1FBRWIsTUFBTSxPQUFPLEdBQUcsTUFBTSxtQ0FBZ0IsQ0FBQyxTQUFTLENBQzVDLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxDQUFDLENBQUM7UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM1RDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUFFRCxLQUFLLGdDQUFnQyxPQUFlLEVBQUUsVUFBa0I7SUFDcEUsSUFBSTtRQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLFVBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQztBQUVELHVCQUFVLEVBQUUsQ0FBQztBQUViLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckYscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyJ9