
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
        <h2 className="text-white lg:text-[20px] md:text-[20px] text-[15px] font-[500] my-8 px-2">
        You currently do not have a token deployed yet, deploy a token
        </h2>

     <TokenInfoFetcher />
    </main>
  )
}

export default ManageToken