import { DNA } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
      <DNA
        height={80}
        width={80}
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
        visible={true}
        ariaLabel='dna-loading'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default PageLoader;