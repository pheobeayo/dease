import { useState } from 'react';
import TokenInfoFetcher from '../../components/TokenInfoFetcher';


const ManageToken = () => {
 

  // const { data: readData, refetch: dataRefetch, isError: readIsError, isLoading: readIsLoading, error: readError } = useReadContract({
  //   functionName: "get_balance",
  //   args: [address],
  //   abi: abi,
  //   address: contractAddress,
  //   watch: true,
  //   refetchInterval: 1000
  // });

  // console.log(readData)

  return (
    <main className="bg-[#02071D] font-dmsans">
     <TokenInfoFetcher />
    </main>
  )
}

export default ManageToken