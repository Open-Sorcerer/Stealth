'use client'
import { useNfts } from "@hooks/useNfts";
import { NftList } from "@components/nft/NftList";

const Nfts = () => {
  const nfts = useNfts();
  console.log(nfts);
  
  return (
    <div className="w-full h-full relative mb-40">
      <section className="my-5 ">
        <NftList />
      </section>
  </div>
  )
}

export default Nfts
