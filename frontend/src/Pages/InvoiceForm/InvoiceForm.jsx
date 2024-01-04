import React from 'react'
import Logo from '../../Images/ITEXPERTS_LOGO.png'

const InvoiceForm = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create Invoice</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium">
                                Client Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Client Company Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Client Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Client Number
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Invoice Creation Date
                            </label>
                            <input
                                type="date"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Services
                            </label>
                            <div className='flex  gap-1'>
                            <input
                            placeholder='Service Name'
                                type="text"
                                required
                                className="w-60 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                            <input
                            placeholder='Amount'
                                type="number"
                                required
                                className="w-40 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
                            />
                            </div>
                        </div>
                        <div className='flex justify-around'>
                        <button
                            className="w-50 px-4 py-2 text-white font-medium bg-[#D22B2B] rounded-lg duration-150"
                        >
                            Create Invoice
                        </button>
                        <button
                            className="w-50 px-4 py-2 text-white font-medium bg-[#D22B2B] rounded-lg duration-150"
                        >
                            Preview Invoice
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>
  )
}

export default InvoiceForm
