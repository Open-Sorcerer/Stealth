
'use client'
import useTokens from '@hooks/useTokens'
import Image from 'next/image'
import { useEffect } from 'react';
const Tokens = () => {

  const tokensList = [
    {
      name: "Solana",
      quantity: 1.01,
      balance: 20,
    },
    {
      name: "Filecoin",
      quantity: 500,
      balance: 203,
    },
    {
      name: "AVAX",
      quantity: 30,
      balance: 200,
    },
    {
      name: "Polygon",
      quantity: 1.01,
      balance: 20,
    },
  ]

  const tokensByOwner = useTokens();
  console.log(tokensByOwner.tokens);

  return (
    <div className="h-full relative mb-40">
      <section className="m-5">
        <div className='w-full h-fit flex flex-col gap-1 mb-12'>
        <h1 className="text-2xl font-bold ">$ 5000.69</h1>
        <h2 className="text-xl font-bold text-green-500">+ $ 0.01</h2>
        </div>
        <div className='w-full h-full flex flex-col gap-3'>
          {
            tokensList.map((item: any) => {
              return (
                <div className="w-full h-fit flex flex-row justify-between  items-center bg-gradient-to-br from-black to-matte-black px-10 py-5 rounded-lg shadow-xl shadow-black" key={item.name}>
                  <div className='flex w-fit h-full flex-row justify-start items-center gap-3'>
                    <div className='w-12 h-12 relative'>
                      <Image src='/sol.png' fill={true}
                        style={{ objectFit: "contain" }}
                        loading="lazy" alt='tokenDP' className='rounded-full ring-1 ring-amber-500' />
                    </div>
                    <div className='flex flex-col w-fit h-full items-start justify-start'>
                      <h2 className='text-base font-semibold'>{item.name}</h2>
                      <h2 className='text-base font-semibold'>{item.quantity}</h2>
                    </div>
                  </div>
                  <h2 className='text-lg font-medium'>${" "}{item.balance.toFixed(2)}</h2>
                </div>
              )
            })
          }
          {/* {tokensByOwner.tokens.map((item:any)=>{
            return (<div key={item}>{item}</div>)
          })} */}
        </div>
      </section>
    </div>
  )
}

export default Tokens
