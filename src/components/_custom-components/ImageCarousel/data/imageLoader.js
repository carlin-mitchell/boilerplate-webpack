import { v4 as uuidv4 } from "uuid";

// Image source info
const idList = Array(100)
  .fill(null)
  .map((e, i) => i)
  .filter((e) => e !== 97);
const randImgHeight = 300;
const randImgWidth = 500;
// add isActive: true to the slide you want to start as active
const imageSources = [
  { src: "https://picsum.photos/400/300", isActive: true },
  ...Array(5)
    .fill(null)
    .map((e) => {
      return {
        src: `https://picsum.photos/id/${
          idList[Math.floor(Math.random() * idList.length)]
        }/${randImgWidth}/${randImgHeight}`,
      };
    }),
];
console.log(imageSources);
export const imageData = imageSources.map((obj) => ({
  ...obj,
  uuid: uuidv4(),
}));
