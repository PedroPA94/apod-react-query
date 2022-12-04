interface YoutubeProps {
  videoUrl: string
  videoTitle: string
}

export default function YoutubeEmbed({ videoUrl, videoTitle }: YoutubeProps) {
  return(
    <iframe
      width="1024px"
      height="576px"
      src={videoUrl}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}