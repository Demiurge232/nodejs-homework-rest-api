const Jimp = require("jimp");

const resizeImage = async (someImage) => {
  const image = await Jimp.read(someImage);

  await image.resize(250, 250);

  await image.writeAsync(someImage);
};

module.exports = resizeImage;
