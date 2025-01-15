import { DNA } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
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

export default LoadingSpinner;