import why from "../assets/why.svg";
import why2 from "../assets/why2.svg";
import why1 from "../assets/why1.svg";
import why3 from "../assets/why3.svg";
import vector2 from "../assets/vector2.svg";

const Why = () => {
    return (
        <div className="bg-[#02071D]">
            <div className="grid place-content-center my-4">
                <h2 className="text-[#8BB9FF] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center leading-[0.5px]">
                    Why Us
                </h2>
                <img src={vector2} alt="" />
            </div>
            <div>
                <div className="flex gap-2 flex-col lg:flex-row md:flex-row items-center px-4 lg:px-8 md:px-8">
                    <div className="lg:w-[50%] md:w-[50%] w-[100%] bg-[#8BB9FF]/10 rounded-xl p-8">
                        <div className="grid place-content-center">
                            <img src={why} alt="" className="w-[100%]" />
                        </div>
                        <h5 className="text-white text-justify px-2 text-base font-dmsans font-semibold">Streamlined Workflow</h5>
                        <p className="text-white text-justify px-2 text-base font-dmsans font-normal">
                            Deploy tokens effortlessly with our user-friendly interface, saving
                            you time and reducing errors.
                        </p>
                    </div>
                    <div className="lg:w-[50%] md:w-[50%] w-[100%]  bg-[#8BB9FF]/10 rounded-xl p-8">
                        <div className="grid place-content-center">
                            <img src={why1} alt="" className="w-[100%]" />
                        </div>
                        <h5 className="text-white text-justify px-2 text-base font-dmsans font-semibold">Comprehensive Insights</h5>
                        <p className="text-white text-justify px-2 text-base font-dmsans font-normal">
                            Access a detailed history of deployed tokens, total supply, and balances through a centralized dashboard.
                        </p>
                    </div>
                </div>
                <div className="mt-4 gap-2 flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-8 md:px-8">
                    <div className="lg:w-[50%] md:w-[50%] w-[100%] bg-[#8BB9FF]/10 rounded-xl p-8">
                        <div className="grid place-content-center">
                            <img src={why2} alt="" className="w-[100%]" />
                        </div>
                        <h5 className="text-white text-justify px-2 text-base font-dmsans font-semibold">Developer-Centric</h5>
                        <p className="text-white text-justify px-2 text-base font-dmsans font-normal">
                            Built with developers in mind, we integrate seamlessly with popular wallets and provide robust security for token management.
                        </p>
                    </div>
                    <div className="lg:w-[50%] md:w-[50%] w-[100%]  bg-[#8BB9FF]/10 rounded-xl p-8">
                        <div className="grid place-content-center">
                            <img src={why3} alt="" className="w-[100%]" />
                        </div>
                        <h5 className="text-white text-justify px-2 text-base font-dmsans font-semibold">Future-Proof</h5>
                        <p className="text-white text-justify px-2 text-base font-dmsans font-normal">
                            Stay ahead of the curve with our commitment to innovation and multi-chain compatibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;