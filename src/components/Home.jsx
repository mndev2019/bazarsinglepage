
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imagelgo from "../assets/happening.png"

const Home = () => {
    const navigate = useNavigate();


    const handleHostClick = () => {
        navigate("/host");
    };
    const handleGuestClick = () => {
        navigate("/guest");
    };
    return (
        <>
           
            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/previews/010/803/399/non_2x/background-with-colorful-shopping-bags-illustration-sale-and-discount-concept-vector.jpg')",
                }}
            >
                <div className="absolute inset-0 flex  items-center justify-center gap-7">

                    <div className="relative top-[-130px] ">
                        <div className="flex justify-center">
                            <img src={imagelgo} className='w-[250px]' alt="" />
                        </div>
                        <h1 className='text-center text-bold lg:text-5xl text-3xl text-white mb-10'> Welcome to Happening Bazar</h1>

                    </div>
                </div>
                <div className="absolute inset-0 flex  items-center justify-center gap-7">

                    <div className="button-icon" onClick={() => handleHostClick()}>
                        <div className="icon text-black">
                            <FaHome />
                        </div>
                        <div className="cube"  >
                            <span className="side front">Host</span>
                            <span className="side top">Join Host</span>
                        </div>
                    </div>

                    <div className="button-icon" onClick={() => handleGuestClick()}>
                        <div className="icon  text-black">
                            <FaUser />
                        </div>
                        <div className="cube"  >
                            <span className="side front">Guest</span>
                            <span className="side top">Join Guest</span>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Home;
