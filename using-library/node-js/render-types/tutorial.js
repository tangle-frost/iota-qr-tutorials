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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9HQUFzRjtBQUN0Rix1Q0FBeUI7QUFFekIsS0FBSyxVQUFVLGFBQWEsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsVUFBa0I7SUFDakYsSUFBSTtRQUNBLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxVQUFVLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyRDtJQUFDLE9BQU0sR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtBQUNMLENBQUM7QUFFRCxhQUFhLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDIn0=