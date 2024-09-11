import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unleash your creativity and make your VR app dreams a reality with our
        user-friendly development tools. Start now and transform your ideas into
        immersive experiences!
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="rounded-md px-5 py-2 mx-3 bg-gradient-to-r from-orange-400 to-orange-800"
        >
          Start for free
        </a>
        <a href="#" className="rounded-md px-4 py-2 mx-3 border">
          Documentation
        </a>
      </div>

      <div className="flex mt-20 justify-center">
        <video
          autoPlay
          loop
          muted
          className="border rounded-lg w-1/2 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="border rounded-lg w-1/2 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
