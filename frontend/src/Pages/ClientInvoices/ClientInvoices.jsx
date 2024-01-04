import React from 'react'
import { Link } from "react-router-dom";

const ClientInvoices = () => {
    const tableItems = [
        {
          id: 1,
          name: "Solo learn app",
          Email: "ali@gmail.com",
          PhoneNumber: "01230233124",
          RefNumber: "IT_231",
          Company: "IT-Dev",
          Message: "ssd",
        },
        {
          id: 2,
          name: "Solo learn app",
          Email: "ali@gmail.com",
          PhoneNumber: "01230233124",
          RefNumber: "IT_231",
          Company: "IT-Dev",
          Message: "ssd",
        },
        {
          id: 3,
          name: "Solo learn app",
          Email: "ali@gmail.com",
          PhoneNumber: "01230233124",
          RefNumber: "IT_231",
          Company: "IT-Dev",
          Message: "ssd",
        },
        {
          id: 4,
          name: "Solo learn app",
          Email: "ali@gmail.com",
          PhoneNumber: "01230233124",
          RefNumber: "IT_231",
          Company: "IT-Dev",
          Message: "ssd",
        },
        {
          id: 5,
          name: "Solo learn app",
          Email: "ali@gmail.com",
          PhoneNumber: "01230233124",
          RefNumber: "IT_231",
          Company: "IT-Dev",
          Message: "ssd",
        },
      ];
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="py-4 my-4">
          <p className="text-black font-semibold text-2xl mt-2">
            View and manage the list of invoices of clients.
          </p>
        </div>
        <div className="items-start justify-between md:flex">
          <div className="items-start justify-between md:flex">
            <input
              placeholder="Search by Name or Email"
              type="text"
              required
              className="w-80 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="mt-3 md:mt-0">
            <a
              href="#"
              className="mt-2 inline-block px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-800 active:bg-red-900 md:text-sm"
            >
              Export CSV
            </a>
          </div>
        </div>
        <div className="mt-12 relative h-max overflow-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-900 text-2xl font-medium border-b">
              <tr>
                <th className="py-3 pr-6">id</th>
                <th className="py-3 pr-6">name</th>
                <th className="py-3 pr-6">Email</th>
                <th className="py-3 pr-6">Phone Number</th>
                <th className="py-3 pr-6">Ref Number</th>
                <th className="py-3 pr-6">Company</th>
                <th className="py-3 pr-6">Message</th>
                <th className="py-3 pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-black text-base divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="pr-6 py-4 whitespace-nowrap">{item.Email}</td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.PhoneNumber}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.RefNumber}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.Company}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.Message}
                  </td>
                  <td className="text-left whitespace-nowrap">
                    <Link
                      to="javascript:void()"
                      className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                    >
                      View Message
                    </Link>
                    <Link
                      to="/"
                      className="ms-2 py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                    >
                      🗑️
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ClientInvoices
