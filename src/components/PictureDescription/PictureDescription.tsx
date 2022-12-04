import { PictureData } from "../../interfaces";
import './PictureDescription.css';

interface PictureProps {
  picture: PictureData
}

export default function PictureDescription({ picture }: PictureProps) {
  return(
    <div className="pic-description">
      <h3>{picture.title}</h3>
      <p>{picture.explanation}</p>
      <p>©{picture.copyright}</p>
    </div>
  )
}