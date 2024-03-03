

const Login = ({ loginToggle, setLoginToggle }) => {
    return (
        <div className={`w-full px-4 h-screen fixed z-30 top-0 bg-white ${loginToggle ? "block" : "hidden"}`}>

            <div className="grid grid-cols-12 relative">
                <button onClick={()=> setLoginToggle(false)} className="absolute right-3 top-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="col-span-12 md:col-span-6 max-h-30vh flex justify-center">
                    <img src="./images/login_bg2.png" className="h-full" alt="" />
                </div>

                <div className="col-span-12 md:col-span-6 max-h-70vh">
                    <h5 className="w-full text-center text-xl font-extrabold font-nunito text-theme-blue-600">LOGIN</h5>

                    <div className="flex flex-col gap-y-4 mt-8">
                        <fieldset className="flex flex-col">
                            <label htmlFor="email" className="text-base text-gray-400">Email</label>
                            <input type="email" className="border text-sm py-2 px-2" placeholder="Ex: johnn@gmail.com" />
                        </fieldset>

                        <fieldset className="flex flex-col">
                            <label htmlFor="password" className="text-base text-gray-400">Password</label>
                            <input type="password" className="border text-sm py-2 px-2" placeholder="Ex: Abcd1@" />
                        </fieldset>

                        <fieldset className="grid grid-cols-12">
                            <span className="col-span-6 flex gap-x-3">
                                <input type="checkbox" name="" id="remember_pass" />
                                <label className="text-xs text-gray-400" htmlFor="#remember_pass">Remember password</label>
                            </span>

                            <span className="col-span-6 flex justify-end">
                                <button className="text-xs text-gray-400 underline text-theme-blue-600">Forget Password ?</button>
                            </span>
                        </fieldset>

                        <fieldset className="grid grid-cols-12 mt-4">
                            <button className="bg-theme-blue-600 text-gray-100 py-1.5 col-span-12">Login</button>
                            <span className="col-span-12 flex justify-end mt-2">
                                <button className="text-xs text-gray-400 text-theme-blue-600">Don't have account ? Sign up</button>
                            </span>
                        </fieldset>

                        <div className="flex items-center justify-center gap-x-3 mt-8">
                            <span className="w-10 h-px bg-theme-blue-600"></span>
                            <button className="p-2 shadow-md rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-6 fill-theme-blue-600">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                            </button>
                            <span className="w-10 h-px bg-theme-blue-600"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login