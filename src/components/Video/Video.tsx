type Props = {};

const Video: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center ">
      <video className="object-contain w-full " controls={false}>
        <source src="pişik kremi video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="absolute z-30 bg-red w-24 m-0 p-0 h-24">
        <img src="play.png" alt="" />
      </button>
    </div>
  );
};

export default Video;
