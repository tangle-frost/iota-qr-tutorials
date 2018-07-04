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
function updateQRCodes(typeNumber, testData) {
    try {
        const qr = new IotaQR.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();
        const jpegRenderer = IotaQR.QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.jpg");
            fs.writeFileSync("./test.jpg", rawData);
        });
        const pngRenderer = IotaQR.QRRendererFactory.instance().create("png");
        pngRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.png");
            fs.writeFileSync("./test.png", rawData);
        });
        const svgRenderer = IotaQR.QRRendererFactory.instance().create("svg");
        svgRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.svg");
            fs.writeFileSync("./test.svg", rawData);
        });
        const txtRenderer = IotaQR.QRRendererFactory.instance().create("text");
        txtRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.txt");
            fs.writeFileSync("./test.txt", rawData);
        });
    }
    catch (err) {
        console.error(err);
    }
}
updateQRCodes(6, "This is a test");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9HQUFzRjtBQUN0Rix1Q0FBeUI7QUFFekIsdUJBQXVCLFVBQWtCLEVBQUUsUUFBZ0I7SUFDdkQsSUFBSTtRQUNBLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzdCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzthQUM1QixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDNUIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFHUCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0tBQ1Y7SUFBQyxPQUFNLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsYUFBYSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIn0=