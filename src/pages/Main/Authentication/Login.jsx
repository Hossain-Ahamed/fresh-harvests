import React, { useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { validateEmail } from '../../../assets/scripts/script';

const Login = () => {
  const [displayItem, setDisplayItem] = useState('Signin');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Sign in</button>

      <Modal

        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement='center'
        classNames={{
          body: "py-6 rounded-[4px]",
          backdrop: "bg-[#FFF]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white px-5 py-6 md:px-8 md:py-6",
          header: "",
          footer: "",
          closeButton: "hover:bg-white/5 active:bg-white/10 mt-4 me-4 text-[24px]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>

              {
                displayItem === 'Signin' ?
                  <SignIn onClose={onClose} onOpenChange={onOpenChange} displayItem={displayItem} setDisplayItem={setDisplayItem} />
                  :
                  <Register onClose={onClose} onOpenChange={onOpenChange} displayItem={displayItem} setDisplayItem={setDisplayItem} />
              }

              <div className="inline-flex items-center justify-center w-full relative">
                <hr className="w-full h-[1px] font-thin my-6 border-0 rounded bg-grey-50" />
                <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2 button-3 text-grey-100">Or</div>
              </div>
              {
                displayItem === 'Signin' ?
                  <>
                    <div className='flex justify-center items-center gap-1 my-3'>
                      <p className='text-black button-3'>Don't have an account?</p>
                      <button className='text-primary button-3' onClick={() => setDisplayItem('Register')}>Sign up</button>
                    </div>
                  </>
                  :
                  <>
                    <div className='flex justify-center items-center gap-1 my-3'>
                      <p className='text-black button-3'>Already have an account?</p>
                      <button className='text-primary button-3' onClick={() => setDisplayItem('Signin')}>Sign in</button>
                    </div>
                  </>
              }
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;


const SignIn = ({ onOpenChange, onClose }) => {

  const [showPass, setShowPass] = useState(false); //password hidden an show

  /**
   * ----------- store Location from which user redirected to login page 
   */

  const navigate = useNavigate();
  //pass the previous location
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // console.log(from)

  // ------------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();


  // ------------------------------ SIGN IN -------------------------------------
  const { loginByEmailPass, setIsLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const onSubmit = data => {
    const email = data.email;
    const password = data?.password;
    if (!email || !password) {
      return;
    }


    loginByEmailPass(email, password)
      .then(result => {
        navigate(from, { replace: true });
      }).catch(e => {
        setIsLoading(false)
        console.log(e);
        
      })

  }


  return (
    <>
      <ModalHeader className="flex flex-col gap-1 justify-center items-center text-black heading-4">
        Login
      </ModalHeader>
      <ModalBody>
        {/* login form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="">

          {/* email  */}
          <div>
            <label htmlFor="email" className="body-2 text-black">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                placeholder="Enter your email"
                {...register("email", {
                  required: "*Email is required",

                  validate: {
                    notEmail: (value) => validateEmail(value)
                  },
                })}
              />

              {errors.email?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.email.message}</p>)}
              {errors.email?.type === "notEmail" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">*not valid E-mail</p>)}
            </div>
          </div>


          {/* password  */}
          <div className='mt-5'>
            <label htmlFor="password" className="body-2 text-black ">Password</label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={() => setShowPass(prev => !prev)}>
                {
                  showPass ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M7.10293 11.96C6.96043 11.96 6.81793 11.9075 6.70543 11.795C6.09043 11.18 5.75293 10.3625 5.75293 9.5C5.75293 7.7075 7.20793 6.2525 9.00043 6.2525C9.86293 6.2525 10.6804 6.59 11.2954 7.205C11.4004 7.31 11.4604 7.4525 11.4604 7.6025C11.4604 7.7525 11.4004 7.895 11.2954 8L7.50043 11.795C7.38793 11.9075 7.24543 11.96 7.10293 11.96ZM9.00043 7.3775C7.83043 7.3775 6.87793 8.33 6.87793 9.5C6.87793 9.875 6.97543 10.235 7.15543 10.55L10.0504 7.655C9.73543 7.475 9.37543 7.3775 9.00043 7.3775Z" fill="#171717" />
                        <path d="M4.19988 14.3825C4.07238 14.3825 3.93738 14.3375 3.83238 14.2475C3.02988 13.565 2.30988 12.725 1.69488 11.75C0.899883 10.5125 0.899883 8.49499 1.69488 7.24999C3.52488 4.38499 6.18738 2.73499 8.99988 2.73499C10.6499 2.73499 12.2774 3.30499 13.7024 4.37749C13.9499 4.56499 14.0024 4.91749 13.8149 5.16499C13.6274 5.41249 13.2749 5.46499 13.0274 5.27749C11.7974 4.34749 10.4024 3.85999 8.99988 3.85999C6.57738 3.85999 4.25988 5.31499 2.63988 7.85749C2.07738 8.73499 2.07738 10.265 2.63988 11.1425C3.20238 12.02 3.84738 12.7775 4.55988 13.3925C4.79238 13.595 4.82238 13.9475 4.61988 14.1875C4.51488 14.315 4.35738 14.3825 4.19988 14.3825Z" fill="#171717" />
                        <path d="M8.99993 16.265C8.00242 16.265 7.02742 16.0625 6.08992 15.665C5.80492 15.545 5.66992 15.215 5.78992 14.93C5.90992 14.645 6.23992 14.51 6.52492 14.63C7.31992 14.9675 8.15242 15.14 8.99242 15.14C11.4149 15.14 13.7324 13.685 15.3524 11.1425C15.9149 10.265 15.9149 8.735 15.3524 7.8575C15.1199 7.49 14.8649 7.1375 14.5949 6.8075C14.3999 6.5675 14.4374 6.215 14.6774 6.0125C14.9174 5.8175 15.2699 5.8475 15.4724 6.095C15.7649 6.455 16.0499 6.845 16.3049 7.25C17.0999 8.4875 17.0999 10.505 16.3049 11.75C14.4749 14.615 11.8124 16.265 8.99993 16.265Z" fill="#171717" />
                        <path d="M9.51768 12.7025C9.25518 12.7025 9.01518 12.515 8.96268 12.245C8.90268 11.9375 9.10518 11.645 9.41268 11.5925C10.2377 11.4425 10.9277 10.7525 11.0777 9.92751C11.1377 9.62001 11.4302 9.42501 11.7377 9.47751C12.0452 9.53751 12.2477 9.83002 12.1877 10.1375C11.9477 11.435 10.9127 12.4625 9.62268 12.7025C9.58518 12.695 9.55518 12.7025 9.51768 12.7025Z" fill="#171717" />
                        <path d="M1.50008 17.5625C1.35758 17.5625 1.21508 17.51 1.10258 17.3975C0.885078 17.18 0.885078 16.82 1.10258 16.6025L6.70508 11C6.92258 10.7825 7.28258 10.7825 7.50008 11C7.71758 11.2175 7.71758 11.5775 7.50008 11.795L1.89758 17.3975C1.78508 17.51 1.64258 17.5625 1.50008 17.5625Z" fill="#171717" />
                        <path d="M10.8975 8.16502C10.755 8.16502 10.6125 8.11252 10.5 8.00002C10.2825 7.78252 10.2825 7.42252 10.5 7.20502L16.1025 1.60252C16.32 1.38502 16.68 1.38502 16.8975 1.60252C17.115 1.82002 17.115 2.18002 16.8975 2.39752L11.295 8.00002C11.1825 8.11252 11.04 8.16502 10.8975 8.16502Z" fill="#171717" />
                      </svg>
                    </>
                    :
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </>
                }
              </span>
              {errors.password?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">*Enter password</p>)}
            </div>
          </div>

          <div className='flex justify-between items-center my-6'>
            <div className='flex justify-start items-center gap-2 cursor-pointer'>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.334 0.5C17.723 0.5 20 2.878 20 6.416V14.584C20 18.122 17.723 20.5 14.333 20.5H5.665C2.276 20.5 0 18.122 0 14.584V6.416C0 2.878 2.276 0.5 5.665 0.5H14.334ZM14.334 2H5.665C3.135 2 1.5 3.733 1.5 6.416V14.584C1.5 17.267 3.135 19 5.665 19H14.333C16.864 19 18.5 17.267 18.5 14.584V6.416C18.5 3.733 16.864 2 14.334 2ZM14.0895 7.597C14.3825 7.89 14.3825 8.364 14.0895 8.657L9.3435 13.403C9.1975 13.55 9.0055 13.623 8.8135 13.623C8.6225 13.623 8.4295 13.55 8.2835 13.403L5.9095 11.03C5.6165 10.737 5.6165 10.263 5.9095 9.97C6.2025 9.677 6.6765 9.677 6.9695 9.97L8.8135 11.812L13.0295" fill="#E16F3D" />
                </svg>
              </div>

              <p className='text-grey-100 body-4'>Remember me</p>
            </div>
            <div className='cursor-pointer underline'>
              <p className='text-grey-100 body-4' onClick={(e) => {
                e.preventDefault();

              }}>
                Forgot Password
              </p>
            </div>

          </div>


          <button
            type="submit"
            className="block w-full  px-8 py-4 text-sm button-1 text-[#FFF] bg-primary rounded-lg"
          >
            Sign in
          </button>

        </form>
      </ModalBody>

    </>
  );
};
const Register = ({ onOpenChange, onClose }) => {

  const [showPass, setShowPass] = useState(false); //password hidden an show

  /**
   * ----------- store Location from which user redirected to login page 
   */

  const navigate = useNavigate();
  //pass the previous location
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // console.log(from)

  // ------------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();


  // ------------------------------ SIGN IN -------------------------------------
  const { signup, setIsLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const onSubmit = data => {
    const fullName = data.fullName;
    const email = data.email;
    const password = data?.password;
    if (!fullName || !email || !password) {
      return;
    }


    console.log(data)
    signup(fullName,email, password)
      .then(result => {
        navigate(from, { replace: true });
      }).catch(e => {
        setIsLoading(false)
        console.log(e);
        
      })
  }


  return (
    <>
      <ModalHeader className="flex flex-col gap-1 justify-center items-center text-black heading-4">
        Sign up
      </ModalHeader>
      <ModalBody>
        {/* login form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="">

          {/* name  */}
          <div>
            <label htmlFor="email" className="body-2 text-black">Name</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                placeholder="Enter your name"
                {...register("fullName", {
                  required: "*name is required",
                })}
              />

              {errors.email?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.fullName.message}</p>)}

            </div>
          </div>

          {/* email  */}
          <div className='mt-5'>
            <label htmlFor="email" className="body-2 text-black">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                placeholder="Enter your email"
                {...register("email", {
                  required: "*Email is required",

                  validate: {
                    notEmail: (value) => validateEmail(value)
                  },
                })}
              />

              {errors.email?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.email.message}</p>)}
              {errors.email?.type === "notEmail" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">*not valid E-mail</p>)}
            </div>
          </div>


          {/* password  */}
          <div className='mt-5'>
            <label htmlFor="password" className="body-2 text-black ">Password</label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={() => setShowPass(prev => !prev)}>
                {
                  showPass ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M7.10293 11.96C6.96043 11.96 6.81793 11.9075 6.70543 11.795C6.09043 11.18 5.75293 10.3625 5.75293 9.5C5.75293 7.7075 7.20793 6.2525 9.00043 6.2525C9.86293 6.2525 10.6804 6.59 11.2954 7.205C11.4004 7.31 11.4604 7.4525 11.4604 7.6025C11.4604 7.7525 11.4004 7.895 11.2954 8L7.50043 11.795C7.38793 11.9075 7.24543 11.96 7.10293 11.96ZM9.00043 7.3775C7.83043 7.3775 6.87793 8.33 6.87793 9.5C6.87793 9.875 6.97543 10.235 7.15543 10.55L10.0504 7.655C9.73543 7.475 9.37543 7.3775 9.00043 7.3775Z" fill="#171717" />
                        <path d="M4.19988 14.3825C4.07238 14.3825 3.93738 14.3375 3.83238 14.2475C3.02988 13.565 2.30988 12.725 1.69488 11.75C0.899883 10.5125 0.899883 8.49499 1.69488 7.24999C3.52488 4.38499 6.18738 2.73499 8.99988 2.73499C10.6499 2.73499 12.2774 3.30499 13.7024 4.37749C13.9499 4.56499 14.0024 4.91749 13.8149 5.16499C13.6274 5.41249 13.2749 5.46499 13.0274 5.27749C11.7974 4.34749 10.4024 3.85999 8.99988 3.85999C6.57738 3.85999 4.25988 5.31499 2.63988 7.85749C2.07738 8.73499 2.07738 10.265 2.63988 11.1425C3.20238 12.02 3.84738 12.7775 4.55988 13.3925C4.79238 13.595 4.82238 13.9475 4.61988 14.1875C4.51488 14.315 4.35738 14.3825 4.19988 14.3825Z" fill="#171717" />
                        <path d="M8.99993 16.265C8.00242 16.265 7.02742 16.0625 6.08992 15.665C5.80492 15.545 5.66992 15.215 5.78992 14.93C5.90992 14.645 6.23992 14.51 6.52492 14.63C7.31992 14.9675 8.15242 15.14 8.99242 15.14C11.4149 15.14 13.7324 13.685 15.3524 11.1425C15.9149 10.265 15.9149 8.735 15.3524 7.8575C15.1199 7.49 14.8649 7.1375 14.5949 6.8075C14.3999 6.5675 14.4374 6.215 14.6774 6.0125C14.9174 5.8175 15.2699 5.8475 15.4724 6.095C15.7649 6.455 16.0499 6.845 16.3049 7.25C17.0999 8.4875 17.0999 10.505 16.3049 11.75C14.4749 14.615 11.8124 16.265 8.99993 16.265Z" fill="#171717" />
                        <path d="M9.51768 12.7025C9.25518 12.7025 9.01518 12.515 8.96268 12.245C8.90268 11.9375 9.10518 11.645 9.41268 11.5925C10.2377 11.4425 10.9277 10.7525 11.0777 9.92751C11.1377 9.62001 11.4302 9.42501 11.7377 9.47751C12.0452 9.53751 12.2477 9.83002 12.1877 10.1375C11.9477 11.435 10.9127 12.4625 9.62268 12.7025C9.58518 12.695 9.55518 12.7025 9.51768 12.7025Z" fill="#171717" />
                        <path d="M1.50008 17.5625C1.35758 17.5625 1.21508 17.51 1.10258 17.3975C0.885078 17.18 0.885078 16.82 1.10258 16.6025L6.70508 11C6.92258 10.7825 7.28258 10.7825 7.50008 11C7.71758 11.2175 7.71758 11.5775 7.50008 11.795L1.89758 17.3975C1.78508 17.51 1.64258 17.5625 1.50008 17.5625Z" fill="#171717" />
                        <path d="M10.8975 8.16502C10.755 8.16502 10.6125 8.11252 10.5 8.00002C10.2825 7.78252 10.2825 7.42252 10.5 7.20502L16.1025 1.60252C16.32 1.38502 16.68 1.38502 16.8975 1.60252C17.115 1.82002 17.115 2.18002 16.8975 2.39752L11.295 8.00002C11.1825 8.11252 11.04 8.16502 10.8975 8.16502Z" fill="#171717" />
                      </svg>
                    </>
                    :
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </>
                }
              </span>
              {errors.password?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">*Enter password</p>)}
            </div>
          </div>




          <button
            type="submit"
            className="block w-full  px-8 py-4 text-sm button-1 text-[#FFF] bg-primary rounded-lg  mt-6"
          >
            Sign up
          </button>

        </form>
      </ModalBody>

    </>
  );
};






