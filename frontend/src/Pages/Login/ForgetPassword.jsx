import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/ITEXPERTS_LOGO.png'

const ForgetPassword = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5">
                <div className="text-center pb-4">
                    <img src={Logo} width={150} className="mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Forget Password </h3>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5 border border-gray-200 p-10 rounded-lg bg-gray-100"
                >
                    <div className='pb-5'>
                        <label className="font-medium">
                            Please enter your Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <Link to='/resetpass'>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Send Code
                    </button>
                    </Link>
                </form>
            </div>
        </main>
    </>
  )
}

export default ForgetPassword
