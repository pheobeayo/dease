import React, { useState, useEffect } from "react";
import { shortString, Contract, RpcProvider } from "starknet";
import { erc20ABI } from "../constants/erc20abi";
import abi from "../constants/abi.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Paper from "@mui/material/Paper";

function createData(
  tokenName,
  tokenSymbols,
  tokenDecimals,
  totalSupply,
  balance,
  contractAddress,
  action
) {
  return {
    tokenName,
    tokenSymbols,
    tokenDecimals,
    totalSupply,
    balance,
    contractAddress,
    action,
  };
}

const TokenInfoFetcher = () => {
  const [tokenInfo, setTokenInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDetailClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const myNodeUrl = import.meta.env.VITE_RPC_PROVIDER;
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const provider = new RpcProvider({ nodeUrl: `${myNodeUrl}` });

  const bigIntToHex = (bigInt) => "0x" + bigInt.toString(16);

  const decodeLowLevelResponse = (response) => {
    try {
      if (Array.isArray(response)) {
        const hexString = response[1];
        if (hexString && hexString !== "0x0") {
          return shortString.decodeShortString(hexString);
        }
      }
      return shortString.decodeShortString(response);
    } catch (error) {
      console.error("Decode error:", error);
      return null;
    }
  };

  const fetchTokenInfo = async (userAddress) => {
    if (!userAddress) {
      console.warn(
        "User address is not available. Ensure wallet is connected."
      );
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const mainContract = new Contract(abi, contractAddress, provider);
      const deployedAddresses =
        await mainContract.get_all_deployed_contract_by_user(userAddress);

      console.log("Found", deployedAddresses.length, "deployed contracts");

      const tokenInfoPromises = deployedAddresses.map(async (addr) => {
        const hexAddress = bigIntToHex(addr);
        try {
          const nameResponse = await provider.callContract({
            contractAddress: hexAddress,
            entrypoint: "name",
          });

          const symbolResponse = await provider.callContract({
            contractAddress: hexAddress,
            entrypoint: "symbol",
          });

          const contract = new Contract(erc20ABI, hexAddress, provider);
          const decimalsResponse = await contract.decimals().catch(() => 18n);
          const supplyResponse = await contract.total_supply();

          const name = decodeLowLevelResponse(nameResponse) || "No Name";
          const symbol = decodeLowLevelResponse(symbolResponse) || "???";

          return {
            address: hexAddress,
            name,
            symbol,
            totalSupply: Number(supplyResponse),
            decimals: Number(decimalsResponse),
          };
        } catch (error) {
          console.error(`Error fetching token info for ${hexAddress}:`, error);
          return null;
        }
      });

      const tokens = await Promise.all(tokenInfoPromises);
      setTokenInfo(tokens.filter((t) => t !== null));
    } catch (err) {
      setError("Error fetching token info");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedAddress = localStorage.getItem("walletAddress");
    if (storedAddress) {
      setAddress(storedAddress);
      fetchTokenInfo(storedAddress);
    }
  }, []);

  return (
    <div>
      {tokenInfo.length > 0 && (
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 650,
                backgroundColor: "#02071D",
                color: "#595D69",
                borderSpacing: "16px",
              }}
              style={{ borderCollapse: "separate" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Token name
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Token symbols
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Token decimals
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Total supply
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Balance
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Contract Address
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#11162C",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      border: "1px solid #595D69",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tokenInfo.map((token) => (
                  <TableRow key={token.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      {token.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      {token.symbol}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      {token.decimals}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      {token.totalSupply}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      4
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#BFC1C5",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      {token.address}
                    </TableCell>
                    <TableCell
                      onClick={() => handleDetailClick(token)}
                      style={{ cursor: "pointer", color: "#8BB9FF" }}
                      align="center"
                      sx={{
                        color: "#8BB9FF",
                        backgroundColor: "#262D4F",
                        borderRadius: "8px",
                      }}
                    >
                      View Details
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              sx={{ color: "#ffffff", backgroundColor: "#02071D" }}
            >
              Details
            </DialogTitle>
            <DialogContent
              sx={{ color: "#ffffff", backgroundColor: "#02071D" }}
            >
              {selectedRow && (
                <div>
                  <p>
                    <strong>Token Name:</strong> {selectedRow.name}
                  </p>
                  <p>
                    <strong>Total Supply:</strong> {selectedRow.totalSupply}
                  </p>
                  <p className="break-words">
                    <strong>Wallet Address:</strong> {selectedRow.address}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default TokenInfoFetcher;