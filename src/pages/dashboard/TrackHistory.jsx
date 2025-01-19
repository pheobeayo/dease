import TokenInfoFetcher from "../../components/TokenInfoFetcher";

const TrackHistory = () => {
  return (
    <main className="bg-[#02071D] font-dmsans">
      <div>
        <h1 className="text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 px-2">
          Track History
        </h1>
        <TokenInfoFetcher />
      </div>
    </main>
  );
};

export default TrackHistory;
