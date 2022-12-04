import 'dotenv';
import { useQuery } from "react-query";
import { PictureData } from "../../interfaces";
import PictureDescription from "../PictureDescription/PictureDescription";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

const API_KEY = process.env.API_KEY

const fetchPicture = async () => {
  const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  const pictureData = await data.json();
  return pictureData as PictureData
}

export default function Picture() {
  const { isLoading, isError, isIdle, data, error } = useQuery<PictureData, Error>('picture', fetchPicture)

  if (isLoading || isIdle ) return <p>Loading...</p>
  
  if(isError) return <p>Algo deu errado: {error.message}</p>
  
  return (
      <>
        {
          data.media_type === 'image'
          ? <img src={data.url} alt={data.title}/>
          : <YoutubeEmbed videoUrl={data.url} videoTitle={data.title} />
        }
        <PictureDescription picture={data} />
      </>
  )
}