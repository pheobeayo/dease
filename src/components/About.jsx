import about from "../assets/about.svg";
import vector2 from "../assets/vector2.svg";

const About = () => {
  return (
    <div className="bg-[#8BB9FF]/10 w-[95%] rounded-xl 2xl:mx-10 lg:mx-8 md:mx-8">
      <div className="grid place-content-center">
        <h2 className="text-[#8BB9FF] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center leading-[0.5px]">
          About Us
        </h2>
        <img src={vector2} alt="" />
      </div>
      <div>
        <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
          <div className="lg:w-[50%] md:w-[50%] w-[100%]">
            <p className="text-white text-justify px-12 text-xl ">
              At Dease, we empower developers to seamlessly build and manage tokens for the
              decentralized future. Our platform is designed to simplify token deployment,
              enhance cross-chain functionality, and provide powerful tools to track and optimize
              token performance. We bridge technical expertise with usability, ensuring every
              developer—from novice to expert—has access to cutting-edge tokenization tools.
            </p>
          </div>
          <div className="lg:w-[45%] md:w-[45%] w-[100%]">
            <img src={about} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;