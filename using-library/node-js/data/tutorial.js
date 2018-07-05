var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const IotaQR = __importStar(require("./node_modules/@tangle-frost/iota-qr-lib/pkg/iota-qr-lib.js"));
const fs = __importStar(require("fs"));
async function generateQRCodePaymentData(address, value, tag, message, renderType, typeNumber) {
    try {
        const paymentData = IotaQR.TrinityPaymentQR.generatePaymentData(address, value, tag, message);
        const rawData = await IotaQR.TrinityPaymentQR.renderRaw(paymentData, renderType, typeNumber);
        fs.writeFileSync(`./test.${renderType}`, rawData);
    }
    catch (err) {
        console.error(err);
    }
}
generateQRCodePaymentData("A".repeat(90), 100, "MYTAG", "This is a test", "jpg", 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9HQUFzRjtBQUN0Rix1Q0FBeUI7QUFFekIsS0FBSyxvQ0FDRCxPQUFlLEVBQ2YsS0FBYSxFQUNiLEdBQVcsRUFDWCxPQUFlLEVBQ2YsVUFBa0IsRUFDbEIsVUFBa0I7SUFDbEIsSUFBSTtRQUNBLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FDbkQsT0FBTyxFQUNQLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxDQUFDLENBQUM7UUFFckIsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFN0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLFVBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JEO0lBQUMsT0FBTSxHQUFHLEVBQUU7UUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQztBQUVELHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==