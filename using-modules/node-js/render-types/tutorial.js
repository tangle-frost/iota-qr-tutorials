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
async function updateQRCodes(typeNumber, testData, renderType) {
    try {
        const qr = new qr_1.QR(typeNumber);
        qr.addText(testData);
        const qrCellData = qr.generate();
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(renderType);
        const rawData = await renderer.renderRaw(qrCellData);
        console.log(`Writing test.${renderType}`);
        fs.writeFileSync(`./test.${renderType}`, rawData);
    }
    catch (err) {
        console.error(err);
    }
}
initRender_1.initRender();
updateQRCodes(6, "This is a test", "jpg");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBQzFFLHVDQUF5QjtBQUV6QixLQUFLLFVBQVUsYUFBYSxDQUFDLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQjtJQUNqRixJQUFJO1FBQ0EsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsTUFBTSxRQUFRLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyRDtJQUFDLE9BQU0sR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUFFRCx1QkFBVSxFQUFFLENBQUM7QUFDYixhQUFhLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDIn0=