import bg1 from "../assets/bg1.svg";
import vector from "../assets/vector.svg";
import ellipse1 from "../assets/ellipse1.svg";
import ellipse2 from "../assets/ellipse2.svg";
import bgImg from "../assets/bgImg.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const checkWallet = () => {
    toast.error("Please Connect Your Wallet", {
      position: "top-center",
    });
  };
  return (
    <main>
      <section className="bg-[#02071D] relative py-6">
        <div className="lg:w-[70%] md:w-[70%] w-[100%] mx-auto text-center my-12 px-4 lg:px-0 md:px-0">
          <div className="grid place-content-center my-4">
            <img src={bg1} alt="" />
          </div>
          <h1 className="text-white lg:text-[50px] md:text-[50px] text-[28px] font-[700] ">
            <span className="mr-4"> Simplified</span>{" "}
            <span className="text-[#8BB9FF] ">Token Deployment </span> and
          </h1>
          <div className="grid place-content-center items-stretch">
            <img src={vector} alt="" className="w-[550px]" />
          </div>
          <h1 className=" text-white lg:text-[48px] md:text-[48px] text-[28px] font-[700] font-dmsans ">
            Management with Advanced Features at
          </h1>
          <h1 className="text-white lg:text-[48px] md:text-[48px] text-[28px] font-[700] font-dmsans">
            your Fingertips.
          </h1>
          <p className="text-white font-normal font-sans ">
            Empower your blockchain projects with Dease: Deploy, manage, and
            innovate—securely and efficiently.
          </p>
          <div className="grid place-content-center my-8">
            <button
              onClick={checkWallet}
              className="bg-[#0267FF] text-white py-2 px-4 rounded-[20px] lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[200px] "
            >
              {" "}
              Deploy Token
            </button>
          </div>
        </div>
        <section>
          <div
            className="rounded-full bg-circularGradient w-[100%]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse, #02071D, #0267FF, #12BBFF, #02071D, #12BBFF, #02071D,#02071D, #02071D,  #02071D, #02071D,  #02071D )",
            }}
          >
            <div className="flex flex-col lg:flex-row md:flex-row justify-between lg:w-[90%] md:w-[90%] w-[100%] mx-auto mb-10">
              <div className="flex justify-between items-center lg:w-[100%] md:w-[100%] w-[90%]">
                <div className="flex justify-between lg:w-[20%] md:w-[20%] ">
                  <img
                    src={ellipse2}
                    alt=""
                    className="mt-96 hidden lg:block md:block"
                  />
                  <img
                    src={ellipse1}
                    alt=""
                    className="hidden lg:block md:block"
                  />
                </div>
                <img src={bgImg} alt="" className="ml-auto" />
                <div className="flex justify-between  lg:w-[20%] md:w-[20%]">
                  <img
                    src={ellipse2}
                    alt=""
                    className="hidden lg:block md:block"
                  />
                  <img
                    src={ellipse1}
                    alt=""
                    className="hidden lg:block md:block mt-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
