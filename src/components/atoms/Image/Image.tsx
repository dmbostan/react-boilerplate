import {ImageTypes} from "./Image.types.ts";

const Image = ({src, alt, className}: ImageTypes) => {
  return(
    <img src={src} className={className} alt={alt} />
  )
}

export default Image;
