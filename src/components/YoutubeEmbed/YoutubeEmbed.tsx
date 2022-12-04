import './YoutubeEmbed.css'

interface YoutubeProps {
  videoUrl: string
  videoTitle: string
}

export default function YoutubeEmbed({ videoUrl, videoTitle }: YoutubeProps) {
  return(
    <div className="video">
      <iframe
        // width="100%"
        // height="100%"
        src={videoUrl}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}