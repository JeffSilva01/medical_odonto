'use client'
import { PlayIcon } from 'lucide-react'
import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'

export function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)

  function handlerPlay() {
    if (isPlay) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }

    setIsPlay(!isPlay)
  }

  return (
    <div className="relative -mt-72 md:mt-0">
      <ReactPlayer
        playing={isPlay}
        width={300}
        height={550}
        url="/video.mp4"
        controls={false}
      />
      <button
        onClick={handlerPlay}
        className="absolute bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center "
      >
        {!isPlay && <PlayIcon className="text-white" size={50} />}
      </button>
    </div>
  )
}
