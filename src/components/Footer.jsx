
import logo from "../assets/logo.svg"


const Footer = () => {
  return (
    <footer className="bg-[#02071D] text-white py-8">
      <div className=" bg-[#1B1B38] w-[100%] flex justify-between flex-col lg:flex-row md:flex-row items-center lg:px-0 md:px-0">
        <div className="lg:w-[40%] md:w-[40%] p-4">
          <img src={logo} alt="" className="w-[235px] h-[43px]" />
        </div>
        <div className="lg:w-[40%] md:w-[40%] w-[100%] flex items-center justify-between flex-col lg:flex-row md:flex-row">
          <p className="lg:mr-4 md:mr-4">Terms</p>
          <p className="lg:mr-4 md:mr-4">Privacy</p>
          <p className="lg:mr-4 md:mr-4">Support</p>
          <p className="lg:mr-4 md:mr-4">About</p>
          <p className="lg:mr-4 md:mr-4">Resources</p>
          <p className="lg:mr-12 md:mr-12">Contact</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
