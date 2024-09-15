import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout } from "../redux/user/action"



const Profile = () => {
    const { auth, user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className="w-full md:w-11/12 lg:10/12 xl:w-11/12 grid grid-cols-12 py-2 px-2 mx-auto pb-28 md:mt-0">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 p-2 mt-2 aspect-square flex items-center justify-center border">
                <img src="/images/profile_image.png" className="w-full  aspect-square object-contain border" alt="" />
                {/* <input type="file" name="" className="absolute" id="" /> */}
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-8 flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 py-4 px-3 md:px-4 lg:px-6 xl:px-8 justify-end">

                <div className="w-full flex flex-col justify-start items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 xl:gap-x-6 gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-2.5 order-1 border-b pb-5 sm:border-b-0 sm:border-t sm:pb-0 sm:pt-6 sm:order-7 md:mt-8 lg:mt-10 xl:mt-12">
                    <strong className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-nunito font-extrabold capitalize">{auth ? (user.first_name + " " + user.last_name) : "Name Last Nname"}</strong>
                    <span className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-300 w-full bg-gray-100 text-center py-1 rounded">{auth ? user.role : "User"}</span>
                </div>

                <div className="w-full flex justify-start items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 xl:gap-x-6 order-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-8 lg:w-10 stroke-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <span className="text-base md:text-xl lg:text-2xl font-semibold font-nunito text-gray-300">{auth ? user.email : "no email"}</span>
                </div>


                <div className="w-full flex justify-start items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 xl:gap-x-6 order-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-8 lg:w-10 stroke-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                    <span className="text-base md:text-xl lg:text-2xl font-semibold font-nunito text-gray-300">{auth ? user.phone : "no number"}</span>
                </div>

                <div className="w-full flex justify-start items-start gap-x-3 sm:gap-x-4 lg:gap-x-5 xl:gap-x-6 order-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-8 lg:w-10 stroke-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <div className="text-base md:text-xl lg:text-2xl font-semibold font-nunito text-gray-300 flex flex-col">
                        <span>{"Address line in detail"}</span>
                        <span>South Delhi, Delhi - 110019</span>
                        <span>India</span>
                    </div>
                </div>
            </div>

            <div className="col-span-12 mt-4 md:pr-8">
                <button className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 bg-theme-blue-600 w-full py-2">Edit</button>
            </div>

            <ul className="col-span-12 flex flex-col px-4 md:px-6 lg:px-8 xl:px-10 gap-y-5 md:gap-y-6 lg:gap-y-7 mt-14 md:mt-20 lg:mt-20 border-t py-7 md:py-9 lg:py-12">
               { auth && <NavLink to="/dashboard">
                    <li className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 md:w-6 lg:w-7 fill-theme-blue-600">
                            <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
                        </svg>
                        <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">Dashboard</span>
                    </li>
                </NavLink>
}
                <NavLink to="/my/orders">
                    <li className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-7 lg:w-8 stroke-theme-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>

                        <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">My Orders</span>
                    </li>
                </NavLink>

                <li className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-5 md:w-6 lg:w-7 stroke-theme-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">Settings</span>
                </li>

                <li className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 md:w-6 lg:w-7 fill-theme-blue-600">
                        <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                    </svg>
                    <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">Support</span>
                </li>

                <li className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 md:w-6 lg:w-7 fill-theme-blue-600">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">About Us</span>
                </li>

                <li onClick={() => dispatch(logout())} className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-9 cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 stroke-theme-blue-600">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />  <polyline points="10 17 15 12 10 7" />  <line x1="15" y1="12" x2="3" y2="12" />
                    </svg>
                    <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-blue-600 mt-0.5">Logout</span>
                </li>
            </ul>

        </div>
    )
}

export default Profile