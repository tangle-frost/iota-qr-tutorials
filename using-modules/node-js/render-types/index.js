var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
const initRender_1 = require("@tangle-frost/iota-qr-render/dist/initRender");
const fs = __importStar(require("fs"));
function updateQRCodes(typeNumber, testData) {
    try {
        const qr = new qr_1.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();
        const jpegRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("jpeg");
        jpegRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.jpg");
            fs.writeFileSync("./test.jpg", rawData);
        });
        const pngRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("png");
        pngRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.png");
            fs.writeFileSync("./test.png", rawData);
        });
        const svgRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("svg");
        svgRenderer.renderRaw(qrCellData)
            .then((rawData) => {
            console.log("Writing test.svg");
            fs.writeFileSync("./test.svg", rawData);
        });
        const txtRenderer = qrRendererFactory_1.QRRendererFactory.instance().create("text");
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
initRender_1.initRender();
updateQRCodes(6, "This is a test");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBQzFFLHVDQUF5QjtBQUV6Qix1QkFBdUIsVUFBa0IsRUFBRSxRQUFnQjtJQUN2RCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsTUFBTSxZQUFZLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzdCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxXQUFXLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxXQUFXLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBR1AsTUFBTSxXQUFXLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0tBQ1Y7SUFBQyxPQUFNLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsdUJBQVUsRUFBRSxDQUFDO0FBQ2IsYUFBYSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIn0=