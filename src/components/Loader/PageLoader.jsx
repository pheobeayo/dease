import { InfinitySpin } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[#02071D] z-[55] flex items-center justify-center'>
      <InfinitySpin
       height={300}
       width={300}
       wrapperStyle={{}}
       wrapperClass='infinity-spin-wrapper'
       visible={true}
       color='#0267FF'
       ariaLabel='infinity-spin-loading'
       strokeWidth={2}
       strokeWidthSecondary={2}
      />
    </div>
  );
};

export default PageLoader;