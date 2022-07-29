import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import { Video } from './../types';

interface IProps {
  post: Video;
  // isShowingOnHome?: boolean;
}

const VideoCard: NextPage<IProps> = ({ post: { caption, postedBy, video, _id, likes } }) => {
  // const VideoCard: NextPage<IProps> = ({ post: { caption, postedBy, video, _id, likes }, isShowingOnHome }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // const onVideoPress = () => {
  //   if (playing) {
  //     videoRef?.current?.pause();
  //     setPlaying(false);
  //   } else {
  //     videoRef?.current?.play();
  //     setPlaying(true);
  //   }
  // };

  // useEffect(() => {
  //   if (videoRef?.current) {
  //     videoRef.current.muted = isVideoMuted;
  //   }
  // }, [isVideoMuted]);

  // if (true || '!isShowingOnHome') {
  //   return (
  //     <div>
  //        <Link href={`/detail/${_id}`}>
  //         <video loop src={video.asset.url} className='w-[250px] md:w-full rounded-xl cursor-pointer'></video>
  //       </Link>
  //       <div className='flex gap-2 -mt-8 items-center ml-4'>
  //         <p className='text-white text-lg font-medium flex gap-1 items-center'>
  //           <BsPlay className='text-2xl' />
  //           {likes?.length || 0}
  //         </p>
  //       </div>
  //       <Link href={`/detail/${_id}`}>
  //         <p className='mt-5 text-md text-gray-800 cursor-pointer w-210'>{caption}</p>
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div id={`video-card-${_id}`} className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
          <div className='md:w-16 md:h-16 w-10 h-10'>
            {/* Avatar */}
            <Link href={`/profile/\${postedBy?._id}`}>
              <>
                <Image width={62} height={62} className='rounded-full' src={postedBy.image} alt='user-profile' layout='responsive' />
              </>
            </Link>
          </div>
          <div>
            {/* Username */}
            <Link href={`/profile/\${postedBy?._id}`}>
              <div className='flex items-center gap-2'>
                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                  {postedBy.userName} <GoVerified className='text-blue-400 text-md' />
                </p>
                <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>{postedBy.userName}</p>
              </div>
            </Link>
            {/* Caption / Post title */}
            <Link href={`/detail/${_id}`}>
              <p className='mt-2 font-normal '>{caption}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='lg:ml-20 flex gap-4 relative'>
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='rounded-3xl'>
          <Link href={`/detail/${_id}`}>
            <video
              className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
              loop
              ref={videoRef}
              src={video.asset.url}></video>
          </Link>

          {/* Playback buttons */}
          {isHover && (
            <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3'>
              {/* Play / pause */}
              {playing ? (
                <button onClick={() => 'onVideoPress'}>
                  <BsFillPauseFill className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={() => 'onVideoPress'}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
              {/* Sound */}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={() => setIsVideoMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;