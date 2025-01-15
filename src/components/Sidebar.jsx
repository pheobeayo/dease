import { TbSettings } from "react-icons/tb";
import { MdWorkHistory } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FcDeployment } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';


const Sidebar = () => {


  const activeStyle = {
    borderLeft: '1px solid #0267FF',
    borderRight: '1px solid #0267FF',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#11162C] w-[20%] text-[#8C8F97] p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col'>
      <img src={logo} alt='logo' className="mb-20" />
      <NavLink to="/dashboard" className="text-[14px] text-[#8C8F97] flex items-center py-4 mb-4 px-4 hover:bg-[#0267FF] hover:text-white" style={({ isActive }) => isActive ? activeStyle : null} end><MdManageAccounts className="mr-4" />Manage Tokens</NavLink>
      <NavLink to="deploy_token" className="text-[14px] text-[#8C8F97]  flex items-center py-4 mb-4 px-6 hover:bg-[#0267FF] hover:text-white" style={({ isActive }) => isActive ? activeStyle : null}><FcDeployment className="mr-4" />Deploy Token</NavLink>
      <NavLink to="track_history" className="text-[14px] text-[#8C8F97]  flex items-center py-4 mb-4 px-6 hover:bg-[#0267FF] hover:text-white" style={({ isActive }) => isActive ? activeStyle : null}><MdWorkHistory className="mr-4" /> Track History</NavLink>
      <button className="text-[14px] text-[#8C8F97]  flex items-center py-4 mb-4 px-6 hover:bg-[#0267FF] hover:text-white"><TbSettings className="mr-4" /> Log out</button>
    </div>
  );
}

export default Sidebar;