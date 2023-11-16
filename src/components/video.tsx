'use client'
import { PlayIcon } from 'lucide-react'
import { useRef, useState } from 'react'

export function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)

  function handlerPlay() {
    videoRef.current?.play()

    setIsPlay(true)
  }

  return (
    <div className="relative -mt-72 md:mt-0">
      <video
        ref={videoRef}
        className="h-[550px] w-[300px]"
        src="/video.MP4"
      ></video>
      {!isPlay && (
        <button
          onClick={handlerPlay}
          className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center "
        >
          <PlayIcon className="text-white" size={50} />
        </button>
      )}
    </div>
  )
}
