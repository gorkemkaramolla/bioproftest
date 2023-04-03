type Props = {
  videoSrc: string;
};

const Video: React.FC<Props> = ({ videoSrc }) => {
  return (
    <div className=' flex items-center justify-center '>
      <video
        className='object-contain w-full z-80'
        poster='/bioprof-poster.png'
        controls
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
