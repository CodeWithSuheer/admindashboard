import React from "react";

const InvoiceForm = () => {
  return (
    <>
      <section class="max-w-4xl p-6 mx-auto mt-20 bg-white rounded-md shadow-md dark:bg-gray-800 ">
    <h2 class="text-gray-800 text-3xl font-bold sm:text-3xl text-center">Create Invoice</h2>

    <form className=" p-10">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl">Client Name</label>
                <input type="text" placeholder="Name" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl" for="emailAddress">Client Company Name</label>
                <input type="text" placeholder="Company Name" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl" for="password">Client Email</label>
                <input type="email" placeholder="Email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl">Client Number</label>
                <input type="number" placeholder="Phone Number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl" for="password">Invoice Creation Date</label>
                <input type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200 font-medium text-xl">Reference Number</label>
                <input type="number" placeholder="Ref-Number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
            </div>

        </div>
        <div className="mt-5">
        <label class="text-gray-700 dark:text-gray-200 font-medium text-xl" for="password">Services</label>
        <div className="border-solid border-2 border-gray-200 p-5 rounded-lg">
            <div className="flex justify-center gap-5 w-100">
                <input type="text" placeholder="Service Name" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
                <input type="number" placeholder="Service Amount" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#D22B2B] focus:ring-[#D22B2B] focus:ring-opacity-40 dark:focus:border-[#D22B2B] focus:outline-none focus:ring" />
                
            </div>
            <button class=" mt-5 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]">Add Services</button>
            </div>
          </div>
        <div class="flex justify-center gap-10 mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-gray-600">Create Invoice</button>
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D22B2B] rounded-md hover:bg-[#D22B2B] focus:outline-none focus:bg-[#D22B2B]">Preview Invoice</button>
        </div>
    </form>
</section>
    </>
  );
};

export default InvoiceForm;
