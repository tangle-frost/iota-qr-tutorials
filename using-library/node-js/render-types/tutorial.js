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
async function updateQRCodes(typeNumber, testData, renderType) {
    try {
        const qr = new IotaQR.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();
        const renderer = IotaQR.QRRendererFactory.instance().create(renderType);
        const rawData = await renderer.renderRaw(qrCellData);
        console.log(`Writing test.${renderType}`);
        fs.writeFileSync(`./test.${renderType}`, rawData);
    }
    catch (err) {
        console.error(err);
    }
}
updateQRCodes(6, "This is a test", "jpg");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9HQUFzRjtBQUN0Rix1Q0FBeUI7QUFFekIsS0FBSyx3QkFBd0IsVUFBa0IsRUFBRSxRQUFnQixFQUFFLFVBQWtCO0lBQ2pGLElBQUk7UUFDQSxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxNQUFNLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsVUFBVSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDckQ7SUFBQyxPQUFNLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsYUFBYSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQyJ9