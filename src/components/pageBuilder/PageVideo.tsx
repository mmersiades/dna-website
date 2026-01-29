import { Video } from '@/sanity/types';
import { FC } from 'react';

const PageVideo: FC<Video> = ({ url, videoLabel }) => {
  if (!url) return null;

  if (url?.includes('www.youtube.com/embed')) {
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        title={videoLabel}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <video
      width="320"
      height="240"
      controls
      preload="none"
    >
      <source
        src={url}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default PageVideo;
