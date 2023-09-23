import axios from "axios";

export const getAssetsByOwner = async (ownerAddress: string) => {
  const sortBy = {
    sortBy: "created",
    sortDirection: "asc",
  };
  const limit = 1000;
  const page = 1;
  const before= "";
  const after= "";
  const displayOptions= {};

  const { data } = await axios.post(process.env.NEXT_PUBLIC_HELIUS_URL!, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAssetsByOwner",
    params: {
      ownerAddress, // "5AsKgxeYRaHRcZivZDXoCK6PmVCbc7Nnc4LURpBV7tPv",
      sortBy,
      limit,
      page,
      before,
      after,
      displayOptions
    },
  });
  console.log(data);
  return data.result.items;
};

export const getAssets = async (assetId: string) => {
  const { data } = await axios.post(process.env.NEXT_PUBLIC_HELIUS_URL!, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAsset",
    params: [assetId],
  });
  return data.result;
};
