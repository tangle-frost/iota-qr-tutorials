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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFDbEcsNkVBQTBFO0FBQzFFLHVDQUF5QjtBQUV6QixLQUFLLHdCQUF3QixVQUFrQixFQUFFLFFBQWdCLEVBQUUsVUFBa0I7SUFDakYsSUFBSTtRQUNBLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxNQUFNLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsVUFBVSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDckQ7SUFBQyxPQUFNLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7QUFDTCxDQUFDO0FBRUQsdUJBQVUsRUFBRSxDQUFDO0FBQ2IsYUFBYSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQyJ9