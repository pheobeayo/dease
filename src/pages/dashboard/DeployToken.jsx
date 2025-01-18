import React, { useState, useMemo, useCallback, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import vector2 from "../../assets/vector2.svg";
import {
  useSendTransaction,
  useContract,
  useNetwork,
  useAccount,
  useTransactionReceipt,
} from "@starknet-react/core";
import abi from "../../constants/abi.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeployToken = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const [userAddress, setUserAddress] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      console.log("Deploying token with data: ", {
        userAddress,
        tokenName,
        symbol,
        totalSupply,
      });
      writeAsync();
    },
    [userAddress, tokenName, symbol, totalSupply]
  );

  const { contract } = useContract({
    abi,
    address: contractAddress,
  });

  const calls = useMemo(() => {
    if (
      !userAddress ||
      !contract ||
      !userAddress ||
      !tokenName ||
      !symbol ||
      !totalSupply
    )
      return [];
    return [
      contract.populate("deploy_token", [
        userAddress,
        tokenName,
        symbol,
        totalSupply,
      ]),
    ];
  }, [contract, userAddress, tokenName, symbol, totalSupply]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({
    calls,
  });

  const {
    data: waitData,
    status: waitStatus,
    isLoading: waitIsLoading,
    isError: waitIsError,
    error: waitError,
  } = useTransactionReceipt({ hash: writeData?.transaction_hash, watch: true });

  useEffect(() => {
    if (waitIsLoading) {
      toast.success("Waiting for confirmation...", { position: "top-center" });
    }
  
    if (waitStatus === "error") {
      toast.error(`Transaction rejected: ${waitError?.message || "Unknown error"}`, {
        position: "top-center",
      });
      setTokenName("");
      setTotalSupply("");
      setUserAddress("");
      setSymbol("");
    }
  
    if (waitStatus === "success") {
      toast.success("Token Deployment Successful", { position: "top-center" });
      setTokenName("");
      setTotalSupply("");
      setUserAddress("");
      setSymbol("");
    }
  }, [waitIsLoading, waitStatus, waitError]);


  return (
    <main className="bg-[#02071D] font-dmsans">
      <div>
        <div className="grid place-content-center my-4">
          <h2 className="text-[#8BB9FF] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center leading-[0.5px]">
            Deploy Token
          </h2>
          <img src={vector2} alt="" className="w-[250px]" />
        </div>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 600,
            margin: "auto",
            mt: 4,
            p: 3,
            backgroundColor: "#02071D",
            color: "#ffffff",
          }}
        >
          <p>Owner Address </p>
          <TextField
            label="e.g. 18"
            variant="outlined"
            name="tokenDecimal"
            type="text"
            sx={{
              color: "#8C8F97",
              backgroundColor: "#1B1B38",
              borderRadius: "5px",
              border: "1px solid #8C8F97",
              "& .MuiInputLabel-root": { color: "#8C8F97" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#0267FF" },
            }}
            required
            fullWidth
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
          <p>Token Name</p>
          <TextField
            label="e.g. MyToken"
            variant="outlined"
            name="name"
            sx={{
              color: "#8C8F97",
              backgroundColor: "#1B1B38",
              borderRadius: "5px",
              border: "1px solid #8C8F97",
              labelColor: "#8C8F97",
              "& .MuiInputLabel-root": { color: "#8C8F97" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#0267FF" },
            }}
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            required
            fullWidth
          />
          <p>Token Symbol </p>
          <TextField
            label="e.g. MTK"
            variant="outlined"
            name="tokenSymbol"
            type="name"
            sx={{
              color: "#8C8F97",
              backgroundColor: "#1B1B38",
              borderRadius: "5px",
              border: "1px solid #8C8F97",
              "& .MuiInputLabel-root": { color: "#8C8F97" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#0267FF" },
            }}
            required
            fullWidth
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />

          <p>Token Total Supply </p>
          <TextField
            label="The total number of tokens to be created."
            variant="outlined"
            name="tokenDecimal"
            type="number"
            sx={{
              color: "#8C8F97",
              backgroundColor: "#1B1B38",
              borderRadius: "5px",
              border: "1px solid #8C8F97",
              "& .MuiInputLabel-root": { color: "#8C8F97" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#0267FF" },
            }}
            required
            fullWidth
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0267FF",
              borderRadius: "20px",
              textTransform: "capitalize",
              height: "50px",
              color: "#ffffff",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#0247B7",
              },
            }}
            fullWidth
          >
            {writeIsPending ? "Deploying.." : "Deploy Token"}
          </Button>
        </Box>
      </div>
    </main>
  );
};

export default DeployToken;
