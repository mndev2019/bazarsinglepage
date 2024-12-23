
import FlashVid from "../assets/videos/hero_vid.mp4";
import LogoMain from "../assets/happening.png"
import Coundown from "./Coundown";



export default function FlashScreen({ onScrollComplete, flashEnd }) {
  // const [transformValue, setTransformValue] = useState('translateY(0%)');

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (onScrollComplete) {
        onScrollComplete();
      }
    }
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 max-h-dvh z-50 ${flashEnd ? "hidden" : "overflow-y-auto"}`}
      onScroll={handleScroll}
    >
      <div className=" flex justify-center flex-col items-center h-dvh w-full relative bg-black">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="z-0 h-dvh w-full object-cover absolute top-0 bottom-0 left-0 right-0 brightness-50"
        >
          <source src={FlashVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={LogoMain} alt="logo" className="md:h-24  absolute left-1/2 -translate-x-1/2 z-10 px-3 top-[100px]" />
       
        <Coundown />
        <p className="lg:text-8xl sm:text-6xl min-[440px]:text-5xl text-4xl my-5 z-10 text-white px-3" style={{ animation: "fadeInUpLimit 0.8s ease-out" }}>
          Launching Soon!
        </p>
        {/* <img src={LogoMain} alt="logo" className="md:h-24  absolute bottom-5 left-1/2 -translate-x-1/2 z-10 px-3" /> */}
      </div>
      <div className="h-dvh"></div>
    </div>
  );
}
