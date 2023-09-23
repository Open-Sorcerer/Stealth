
'use client'
import { Loading } from '@components/Loading';
import useTokens from '@hooks/useTokens'
import Image from 'next/image'
import { useEffect } from 'react';

const Tokens = () => {

  const tokensByOwner = useTokens();
  // console.log(tokensByOwner.tokens);
  // While loading return Loader
  if (tokensByOwner.loading) {
    return <Loading stuff="Tokens"/>;
  }
  return (
    <div className="h-full relative mb-10">
      <section className="m-5">
        <div className='w-full h-fit flex flex-col gap-1'>
        {/* <h1 className="text-2xl font-bold ">$ 5000.69</h1> */}
        {/* <h2 className="text-xl font-bold text-green-500">+ $ 0.01</h2> */}
        </div>
        <div className='w-full h-full flex flex-col gap-3'>
          {
            tokensByOwner.tokens.map((item: any) => {
              return (
                <div className="w-full h-fit flex flex-row justify-between  items-center bg-gradient-to-br from-black to-matte-black px-10 py-5 rounded-lg shadow-xl shadow-black" key={item.name}>
                  <div className='flex w-fit h-full flex-row justify-start items-center gap-3'>
                    <div className='w-12 h-12 relative'>
                      <img src={item.imageURI} 
                        // fill={true}
                        style={{ objectFit: "contain" }}
                        loading="lazy" alt='tokenDP' className='rounded-full ring-1 ring-amber-500' />
                    </div>
                    <div className='flex flex-col w-fit h-full items-start justify-start'>
                      <h2 className='text-base font-semibold'>{item.tokenName}</h2>
                      <h2 className='text-base font-semibold'>{item.amount/Math.pow(10,item.decimals)}</h2>
                    </div>
                  </div>
                  {/* <h2 className='text-lg font-medium'>${" "}{item.balance.toFixed(2)}</h2> */}
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Tokens
