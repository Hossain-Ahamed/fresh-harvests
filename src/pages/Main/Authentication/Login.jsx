import React from 'react';

const Login = () => {
    return (
        <>
                   <div>
            <label htmlFor="_1" className='hover:cursor-pointer'>
               Sign in
            </label>

            {/* hidden toggle  */}
            <input type="checkbox" id="_1" className="peer modal-toggle" />


            {/* form address change  modal */}
            <label htmlFor="_1" className="cursor-pointer modal  bg-gray-700/50 m-0 p-0" >

                <label className=' modal-box px-4 md:px-6  py-8 scale-90 rounded-3xl bg-white transition shadow-2xl '>

                    {/* toggle cross  */}
                    <label htmlFor="_1" className=" btn-lg absolute right-1 cursor-pointer top-3 font-semibold text-red-600  active:bg-transparent ">lj</label>
                    {/* modal  */}
                    <div className='text-left max-h-[700px] pb-3'>

                        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Profile Info.</span></h1>
                    </div>
                </label>
            </label>

        </div>
        </>
    );
};

export default Login;