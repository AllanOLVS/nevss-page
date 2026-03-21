const { Jimp } = require('jimp');

async function main() {
  const image = await Jimp.read('src/assets/logo-nevss-sFundo1.png');
  const size = Math.max(image.bitmap.width, image.bitmap.height);
  
  const square = new Jimp({ width: size, height: size, color: 0x00000000 });
  const x = Math.floor((size - image.bitmap.width) / 2);
  const y = Math.floor((size - image.bitmap.height) / 2);
  
  square.composite(image, x, y);
  await square.write('src/assets/favicon-square.png');
  
  const image2 = await Jimp.read('src/assets/logo-cFundo.png');
  const size2 = Math.max(image2.bitmap.width, image2.bitmap.height);
  const square2 = new Jimp({ width: size2, height: size2, color: 0x00000000 });
  const x2 = Math.floor((size2 - image2.bitmap.width) / 2);
  const y2 = Math.floor((size2 - image2.bitmap.height) / 2);
  square2.composite(image2, x2, y2);
  await square2.write('src/assets/logo-cFundo-square.png');
}
main().catch(console.error);
