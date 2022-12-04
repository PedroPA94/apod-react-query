import { PictureData } from "../../interfaces";

interface PictureProps {
  picture: PictureData
}

export default function PictureDescription({ picture }: PictureProps) {
  return(
    <>
      <h3>{picture.title}</h3>
      <p>{picture.explanation}</p>
    </>
  )
}