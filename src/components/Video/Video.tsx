type Props = {};

const Video: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center ">
      <video className="object-contain w-full" controls>
        <source src="pişik kremi video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
