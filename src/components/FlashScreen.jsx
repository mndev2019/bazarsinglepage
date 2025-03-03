
import FlashVid from "../assets/videos/hero_vidnew.mp4"
import LogoMain from "../assets/happening.png"

import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";




export default function FlashScreen() {
    const navigate = useNavigate();
    // const [transformValue, setTransformValue] = useState('translateY(0%)');

    // const handleScroll = (e) => {
    //   const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    //   if (scrollTop + clientHeight >= scrollHeight) {
    //     if (onScrollComplete) {
    //       onScrollComplete();
    //     }
    //   }
    // };
    const handlehost = () => {

        navigate("/host");

    };

    return (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 max-h-dvh z-50"
        // onScroll={handleScroll}
        >
            <div className=" flex justify-center flex-col items-center h-dvh w-full relative bg-black">
                <div className="absolute top-0 left-0 right-0 bg-[#ec323763] h-full z-10"></div>
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
                <div className="circle h-[100px] w-[100px] bg-[#ec3237] z-[12] rounded-full absolute border-3 border-white flex justify-center items-center left-[100px]" onClick={handlehost}>
                    <p className="text-white text-xl font-bold mb-0 myFont">
                        Host
                    </p>
                </div>
                <div className="circle2 h-[100px] w-[100px] bg-[#ec3237] z-[12] rounded-full absolute border-3 border-white flex justify-center items-center right-[100px]" onClick={() => navigate('/guest')}>
                    <p className="text-white text-xl font-bold mb-0 myFont">
                        Guest
                    </p>
                </div>

                <div className="bg-white z-10 px-2 py-[80px] w-[40%]">
                    {/* <img src={LogoMain} alt="logo" className="md:h-24  absolute left-1/2 -translate-x-1/2 z-10 px-3 top-[40px]" /> */}
                    <img src={LogoMain} alt="logo" className="w-[80px] mx-auto" />

                    <Countdown />
                    <p className="lg:text-7xl sm:text-6xl min-[440px]:text-5xl text-4xl  z-10 text-[#f89e32] px-3 myFont font-bold red-shadow py-3" style={{ animation: "fadeInUpLimit 0.8s ease-out" }}>
                        LAUNCHING <span className="block text-[#ec3237] myFont font-bold yellow-shadow ">
                            SOON!
                        </span>
                    </p>
                </div>
            </div>


            <div className="h-dvh"></div>
        </div>

    );
}
