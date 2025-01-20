
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
      <h1 className="text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 px-2">
          Manage Token
        </h1>
       <TokenInfoFetcher />
    </main>
  )
}

export default ManageToken