import { useEffect, useState } from "react";

function CenterCroppedImage(props: { imgPath: string; size: string }) {
  const { imgPath, size } = props;
  const [croppedImageUrl, setCroppedImageUrl] = useState("/beer copy.png");
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const image = new Image();
    image.src = imgPath;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const smallestLength = Math.min(image.width, image.height);

      let startX = 0;
      let startY = 0;
      if (image.height < image.width) {
        startX = (image.width - image.height) / 2;
        startY = 0;
      } else {
        startX = 0;
        startY = (image.height - image.width) / 2;
      }

      canvas.width = smallestLength;
      canvas.height = smallestLength;

      ctx!.drawImage(
        image,
        startX,
        startY,
        smallestLength,
        smallestLength,
        0,
        0,
        smallestLength,
        smallestLength
      );
      const croppedImage = canvas.toDataURL("image/png");
      setCroppedImageUrl(croppedImage);
      setIsReady(true);
    };
    image.onerror = () => {
      setCroppedImageUrl("/beer copy.png");
      setIsReady(true);
    };
  }, [imgPath]);

  return (
    <img
      style={
        isReady
          ? croppedImageUrl === "/beer copy.png"
            ? { width: size, height: size, alignSelf: "center" }
            : {
                width: size,
                height: size,
                borderRadius: "50%",
                alignSelf: "center",
              }
          : { width: size, height: size, alignSelf: "center" }
      }
      src={croppedImageUrl}
    />
  );
}

export default CenterCroppedImage;
