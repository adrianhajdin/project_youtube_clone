import { CardMedia, CircularProgress } from "@mui/material";
import { forwardRef, SyntheticEvent, useRef, useState } from "react";
import { demoProfilePicture } from "../utils/constants";

type ImageType = {
  url: string;
  width?: number;
  height?: number;
};

export interface Props {
  src: { url: string; type: string };
  version?: object | undefined;
  containerStyle?: object;
  sxMediaStyle?: object;
  imageType?: string;
  default?: ImageType;
}

const ImageViewer = forwardRef((props: Props, _ref) => {
  const [imageLoading, setImageLoading] = useState(true);
  const versionImageCheck = useRef([props.src.type]);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const demoImage = props.default?.url ?? demoProfilePicture;

    if (!props.version) {
      if (event.currentTarget.src !== demoImage) {
        console.log("return Set Picture to Demo/Default");
        event.currentTarget.src = demoImage;
      }
      return;
    }

    var newSet = false;
    const thumbnails: object = props.version ?? [];
    for (let key in thumbnails) {
      let itemImage = (thumbnails as any)[key];

      if (!versionImageCheck.current.includes(key) && !newSet) {
        var image: string = itemImage?.url;

        event.currentTarget.src = image;
        newSet = true;

        const newVersionImageCheck = versionImageCheck.current;
        newVersionImageCheck.push(key);
        versionImageCheck.current = newVersionImageCheck;

        console.log(`Set Picture to ${key} ${image}`, itemImage);
      }
    }

    // Set Default Picture
    if (!newSet) {
      console.log("Set Picture to Demo/Default");
      event.currentTarget.src = demoImage;
    }
  };

  const imageOnLoadHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageLoading(false);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.containerStyle,
      }}
    >
      <CardMedia
        component="img"
        image={props?.src?.url}
        onLoad={imageOnLoadHandler}
        onError={handleImageError}
        sx={{
          ...(props.imageType === "avatar"
            ? {
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }
            : {}),
          overflow: "hidden",
          ...props.sxMediaStyle,
        }}
      />
      {imageLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
      )}
    </div>
  );
});

ImageViewer.displayName = "Image Viewer Component";
export default ImageViewer;
