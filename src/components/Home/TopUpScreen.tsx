'use client'

const TopUpScreen = (props: any) => {
    const { toggle, setToggle } = props;

    return (
        <div className='w-full h-full flex flex-col justify-start items-start mt-2 md:mt-10'>
            <div className="w-full h-full bg-gradient-to-br from-black to-matte-black p-5 pb-16 rounded-lg shadow-xl shadow-black">
                <div className="flex flex-col gap-2 justify-start items-start mb-3">
                    <div className="text-xl text-neutral-200 font-medium capitalize">
                        Top up private balance
                    </div>
                    <div className="text-sm text-neutral-500 text-left">
                        Add funds to your private balance, so you&apos;re able to send privately.
                    </div>
                </div>
                <div className="text-neutral-400 border-neutral-900 hover:border-white/10 bg-neutral-900  flex rounded-lg w-full px-2 mx-auto border items-center py-3 transition-all duration-150 ease-in justify-between mt-10">
                    <div className="h-full items-center">
                        <input
                            type="text"
                            name="amount"
                            id="amount"
                            className="bg-transparent block w-full text-base border-none rounded-lg focus:outline-none focus:ring-0  placeholder:text-gray-400 dark:placeholder:text-neutral-600"
                            placeholder="0"
                            autoComplete="off"
                        />
                    </div>
                    <div className="h-full items-center flex flex-col justify-center px-2">
                        <button className="bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 dark:bg-neutral-400 dark:hover:bg-neutral-300 dark:text-neutral-800 dark:hover:text-neutral-700  inline-flex items-center px-2 py-0.5 rounded text-xs font-medium  uppercase cursor-pointer transition-all ease-in duration-150 disabled:opacity-50 disabled:cursor-not-allowed">
                            max
                        </button>
                    </div>
                    <div className="h-full items-center w-32 ">
                        <div data-headlessui-state="">
                            <div className="relative">
                                <div className="flex items-center">
                                    <img src="/sol.png" alt="" className="h-5 w-5 flex-shrink-0  absolute ml-2" />
                                    <div className="pl-10 sm:text-sm text-neutral-200">SOL</div>
                                    {/* <input
                      placeholder="Amount"
                      className="w-full  rounded-md  bg-transparent py-2 pl-10  focus:outline-none active:outline-none border-none focus:ring-0 sm:text-sm text-gray-900 dark:text-neutral-200 placeholder:invisible"
                      id="headlessui-combobox-input-:r5:"
                      role="combobox"
                      type="text"
                      aria-expanded="false"
                      aria-autocomplete="list"
                      data-headlessui-state=""
                      defaultValue=""
                    />
                    <button
                      title="Listbox"
                      className="absolute inset-y-0 right-0 flex items-center rounded-r-md  focus:outline-none"
                      id="headlessui-combobox-button-:r6:"
                      type="button"
                      // tabIndex="-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-600 dark:text-neutral-400">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-4.25 4.5a.75.75 0 00-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full items-center justify-between mt-3 mb-4">
                    <div className=" text-sm flex items-center space-x-1">
                        <p className="text-gray-400 dark:text-neutral-500">Wallet balance:</p>
                        <div className="text-red-400 transition-all duration-150 ease-in">0 SOL</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5  cursor-pointer  hover:opacity-75 ease-in transition-all duration-150  text-red-300">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"></path>
                            </svg>
                            <div className="relative z-50"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex flex-col justify-start items-center gap-4 mt-8">
                    <button
                        type="button"
                        className="w-full rounded-lg bg-amber-500 text-black hover:shadow-amber-500/50 shadow-xl font-medium py-3 px-8 ring-2 ring-gray-900 ring-offset-4 ring-offset-black transition-all"
                    >
                        Top Up
                    </button>
                    <button
                        type="button"
                        className="w-full rounded-lg text-white hover:text-amber-500 font-medium py-3 px-8"
                        onClick={() => setToggle(!toggle)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopUpScreen;