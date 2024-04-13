import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { user_register } from "../redux/user/action"


// const Signup = ({ loginToggle, setLoginToggle }) => {
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const userInputHandler = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value })
    }

    const submitUSerForm = (e) => {
        e.preventDefault();
        if (!user.first_name || !user.last_name || !user.email || !user.phone || !user.password || !user.confirmPassword) {
            console.log("please fill all fields !")
        }
        else {
            dispatch(user_register(user))
        }
    }
    return (
        <div className={`w-full h-max max-h-screen overflow-auto min-h-max z-30 top-0 bg-white block fixed `}  >

            <div className="grid grid-cols-12 relative h-max min-h-screen relative">
                <button to="/" onClick={() => {
                    navigate("/")
                    // setLoginToggle(false)
                }} className="absolute z-40 right-3 top-5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-gray-300 md:stroke-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="col-span-12 md:col-span-6 max-h-30vh md:max-h-full flex justify-center bg-theme-blue-600 relative rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
                    <img src="./images/login_bg2.png" className="h-full object-contain relative z-10" style={{ filter: "drop-shadow(2px 2px 5px black)" }} alt="" />
                    <img src="./images/magicpattern-login-blob2-1709559066335.png" className="absolute left-0 size-11/12 top-0 left-0 aspect-square hidden lg:block opacity-10" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute w-full bottom-0 ml-px z-20 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
                        <path className="fill-blue-300" fillOpacity="0.3" d="M0,224L80,234.7C160,245,320,267,480,272C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute w-full bottom-0 ml-px z-10 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
                        <path className="fill-blue-500" fillOpacity="0.3" d="M0,0L120,42.7C240,85,480,171,720,213.3C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                        </path>
                    </svg>
                </div>

                <div className="col-span-12 md:col-span-6 border  min-h-screen max-h-max h-max md:h-full md:max-h-full flex flex-col md:justify-center items-center py-10">

                    <h5 className="w-full text-center text-xl font-extrabold font-nunito text-theme-blue-600">CREATE ACCOUNT</h5>

                    <form onSubmit={submitUSerForm} className="grid grid-cols-12 md:justify-center gap-y-2 md:gap-y-4 mt-4 md:max-w-90% lg:max-w-96 gap-x-3 relative h-max"  >
                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="first_name" className="text-base text-gray-400">First Name</label>
                            <input name="first_name" onChange={userInputHandler} type="text" id="first_name" className="border text-sm py-2 px-2" placeholder="Ex: John Doe" />
                        </fieldset>
                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="last_name" className="text-base text-gray-400">Last Name</label>
                            <input name="last_name" onChange={userInputHandler} type="text" id="name" className="border text-sm py-2 px-2" placeholder="Ex: John Doe" />
                        </fieldset>
                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="email" className="text-base text-gray-400">Email</label>
                            <input name="email" onChange={userInputHandler} type="email" id="email" className="border text-sm py-2 px-2" placeholder="Ex: John Doe" />
                        </fieldset>
                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="number" className="text-base text-gray-400">Number</label>
                            <input name="phone" onChange={userInputHandler} type="tel" id="number" className="border text-sm py-2 px-2" placeholder="Ex: 1234567890" />
                        </fieldset>

                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="password" className="text-base text-gray-400">Password</label>
                            <input id="password" name="password" onChange={userInputHandler} type="password" className="border text-sm py-2 px-2" placeholder="Ex: Abcd1@" />
                            <span className="relative flex gap-x-2 items-center py-2">
                                <input type="checkbox" className="block h-4 w-4" onChange={(e) => {
                                    e.target.checked ? document.getElementById("password").setAttribute("type", "text") : document.getElementById("password").setAttribute("type", "password")
                                }} name="" id="passwordCheckbox" />

                                <span className="text-xs md:text-sm font-semibold text-gray-400">Show</span>
                            </span>
                        </fieldset>

                        <fieldset className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="confirmPassword" className="text-base text-gray-400">Confirm Password</label>
                            <input name="confirmPassword" onChange={userInputHandler} type="password" id="confirmPassword" className="border text-sm py-2 px-2" placeholder="Ex: johnn@gmail.com" />
                            <span className="relative flex gap-x-2 items-center py-2">
                                <input type="checkbox" className="block h-4 w-4" onChange={(e) => {
                                    e.target.checked ? document.getElementById("confirmPassword").setAttribute("type", "text") : document.getElementById("confirmPassword").setAttribute("type", "password")
                                }} name="" id="passwordCheckbox" />

                                <span className="text-xs md:text-sm font-semibold text-gray-400">Show</span>
                            </span>
                        </fieldset>

                        <fieldset className="grid grid-cols-12 col-span-12">
                            <span className="col-span-6 flex gap-x-3">
                                <input type="checkbox" name="" id="remember_pass" />
                                <label className="text-xs text-gray-400" htmlFor="#remember_pass">I agree with the T&C</label>
                            </span>

                            <span className="col-span-6 flex justify-end">
                                <button className="text-xs text-gray-400 underline text-theme-blue-600">Forget Password ?</button>
                            </span>
                        </fieldset>

                        <fieldset className="grid grid-cols-12 mt-4 col-span-12">
                            <button type="submit" className="bg-theme-blue-600 text-gray-100 py-1.5 col-span-12">Sign Up</button>
                            <span className="col-span-12 flex justify-end mt-2">
                                <NavLink to="/login" className="text-xs text-gray-400 text-theme-blue-600">have an account ? Login</NavLink>
                            </span>
                        </fieldset>

                        <fieldset className="grid grid-cols-12 mt-5 col-span-12">
                            <span className="col-span-12 flex justify-center text-xl font-bold text-theme-blue-600">
                                or
                            </span>
                        </fieldset>

                        <div className="flex items-center justify-center gap-x-3 mt-5 col-span-12">
                            <span className="w-10 h-px bg-theme-blue-600"></span>
                            <button className="p-2 shadow-md rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-6 fill-theme-blue-600">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                            </button>
                            <span className="w-10 h-px bg-theme-blue-600"></span>
                        </div>



                    </form>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute z-0 bottom-0 left- w-full block md:hidden">
                        <path className="fill-theme-blue-600" fillOpacity="1" d="M0,64L120,106.7C240,149,480,235,720,261.3C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                        </path>
                    </svg>
                </div>

            </div>

        </div>
    )
}

export default Signup