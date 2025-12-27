import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const Signup = () => {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <div className='flex h-screen items-center justify-center'>
      <div id='' className='width-[600px]'>
        <div className='modal-box'>
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to='/'
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            >
              ✕
            </Link>
        
          <h3 className='font-bold text-lg'>SignUp</h3>
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input
              type='text'
              placeholder='Enter Your Name'
              className='w-80 px-3 py-1 border rounded-md outline-none'
               {...register("name", { required: "Name is required" })}
            />
          </div>
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
               {...register("email", { required: "Email is required" })}
            />
             {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
          </div>
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type='password'
              placeholder='Enter Your Password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
               {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
            />
            {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
          </div>
          {/* Button */}
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-300'>
              SignUp
            </button>
            <p className='text-md'>
              Have account ?{' '}
              <button
                className='underline text-blue-500 cursor-pointer'
                onClick={() =>
                  document.getElementById('my_modal_3').showModal()
                }
              >
                Login
              </button> 
         
            <Login />
               </p>
          </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
