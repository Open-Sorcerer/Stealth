import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import getTokensByOwner from "@utils/tokens";
import { useWallet } from "@hooks/useWallet";
import axios from "axios";

const useTokens = (reload?: number) => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const fetchTokens = async () => {
      setLoading(true);
      setError(false);

      try {
        let tokens = (await getTokensByOwner(publicKey!.toBase58()))

        console.log("filtered: ", tokens);

        // filtered = await Promise.all(
        //   filtered.map(async (nft: any) => {
        //     if (!nft.content.metadata.attributes) {
        //       console.log("fetching separate");
        //       const { data } = await axios.get(nft.content.json_uri);

        //       return {
        //         ...nft,
        //         content: {
        //           ...nft.content,
        //           metadata: {
        //             ...nft.content.metadata,
        //             attributes: data.attributes,
        //           },
        //           files: [...nft.content.files, { uri: data.image }],
        //         },
        //       };
        //     }

        //     return nft;
        //   })
        // );
        setTokens(tokens!);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    if (publicKey) {
      console.log("fetching tokens");
      fetchTokens();
    }
  }, [connection, publicKey, reload]);

  return { tokens, loading, error };
};

export default useTokens;