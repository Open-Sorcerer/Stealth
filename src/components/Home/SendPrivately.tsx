const SendPrivately = (props: any) => {
    const {toggle, setToggle} = props;
    return (
      <div className='w-full flex flex-col justify-center items-center mt-2 md:mt-10'>
        <div className="w-full h-full bg-gradient-to-br from-black to-matte-black p-5 pb-16 rounded-lg shadow-xl shadow-black">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="text-xl font-elusiv-secondary text-gray-900 dark:text-neutral-200 font-medium capitalize">
                send privately
              </div>
            </div>
            <div className="items-center flex space-x-3">
              <button title="Root Viewing Key" className="disabled:opacity-50 disabled:cursor-not-allowed text-neutral-700 hover:text-neutral-800 rounded-full h-6 w-6 flex justify-center items-center bg-neutral-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="transform w-4 h-4 hover:animate-pulse transition-all duration-150 ease-in">
                  <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="items-center ">
                <button title="Send funds back to your own address, privately." className="rounded-full h-6 w-6 flex justify-center items-center bg-gray-100 dark:bg-neutral-500 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="transform hover:-translate-y-0.5 w-4 h-4 stroke-2 text-gray-400 hover:text-gray-500 dark:text-neutral-700 dark:hover:text-neutral-800 transition-all duration-150 ease-in ">
                    <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"></path>
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                  </svg>
                </button>
                <div className="relative z-50"></div>
              </div>
              <div className="relative inline-block text-left z-50" data-headlessui-state="">
                <div>
                  <button title="Settings" className="w-full flex justify-center items-center outline-none" id="headlessui-menu-button-:r4:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                    <div className="rounded-full h-6 w-6 flex justify-center items-center bg-gray-100 dark:bg-neutral-500 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transform w-4 h-4  text-gray-400 hover:text-gray-500 dark:text-neutral-700 dark:hover:text-neutral-800  hover:rotate-45 transition-all duration-150 ease-in cursor-pointer">
                        <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01-.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
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
              <p className="text-gray-400 dark:text-neutral-500">Private balance:</p>
              <div className="text-red-400 transition-all duration-150 ease-in">0 SOL</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5  cursor-pointer  hover:opacity-75 ease-in transition-all duration-150  text-red-300
            ">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"></path>
                </svg>
                <div className="relative z-50"></div>
              </div>
            </div>
            <div className="inline-flex items-center rounded px-2 py-1 text-sm font-normal space-x-0.5 hover:text-amber-500 hover:text-elusiv-purple-800 dark:hover:text-elusiv-purple-600  transition-all duration-150 ease-in cursor-pointer animate-pulse hover:animate-none" onClick={() => setToggle(!toggle)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd"></path>
              </svg>
              <div>Top up</div>
            </div>
          </div>
  
          <div className="text-neutral-400 border-neutral-900 hover:border-white/10 bg-neutral-900  flex rounded-lg w-full px-2 mx-auto border items-center py-3 transition-all duration-150 ease-in justify-between mt-10">
            <div className="w-full h-full items-center">
              <input
                type="text"
                name="text"
                id="text"
                className="bg-transparent block w-full text-base border-none rounded-lg focus:outline-none focus:ring-0  placeholder:text-gray-400 dark:placeholder:text-neutral-600"
                placeholder="Recipient's address"
                autoComplete="off"
                data-lpignore="true"
                defaultValue=""
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <button
              type="button"
              className="w-full rounded-lg bg-amber-500 text-black hover:shadow-amber-500/50 shadow-xl font-medium py-3 px-8 ring-2 ring-gray-900 ring-offset-4 ring-offset-black transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }


  export default SendPrivately;