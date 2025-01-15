import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const ManageToken = lazy(() => import("../pages/dashboard/ManageToken"));
const DeployToken = lazy(() => import("../pages/dashboard/DeployToken"));
const TrackHistory = lazy(() => import("../pages/dashboard/TrackHistory"));

const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
    </Route>
    <Route path="/dashboard" element={<DashboardLayout />} >
      <Route index element={<ManageToken />} />
      <Route path="deploy_token" element={<DeployToken />} />
      <Route path="track_history" element={<TrackHistory />} />
    </Route>
  </Route>

))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;