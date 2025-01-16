import { InfinitySpin } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
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

export default LoadingSpinner;