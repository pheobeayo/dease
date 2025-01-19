export const erc20ABI = [
    {
      name: "name",
      type: "function",
      inputs: [],
      outputs: [{ type: "core::felt252" }],
      stateMutability: "view"
    },
    {
      name: "symbol",
      type: "function",
      inputs: [],
      outputs: [{ type: "core::felt252" }],
      stateMutability: "view"
    },
    {
      name: "decimals",
      type: "function",
      inputs: [],
      outputs: [{ type: "core::integer::u8" }],
      stateMutability: "view"
    },
    {
      name: "total_supply",
      type: "function",
      inputs: [],
      outputs: [{ type: "core::integer::u256" }],
      stateMutability: "view"
    }
  ];