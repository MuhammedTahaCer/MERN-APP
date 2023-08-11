import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles  from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik } from 'formik'
import {passwordValidate} from '../helper/validate'

export default function Recovery() {
  
  const formik =useFormik ({
    initialValues: {
      password: ""
    },
    validate:  passwordValidate ,//helper folder içinde; init edilen usernamei doğrulayacağız
    validateOnBlur: false,
    validateOnChange:false,
    onSubmit: async values=> {
      console.log(values)
    }
  })

  return (
    <div className='container mx-auto'>

      <Toaster position='bottom-right' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
         <div className={styles.glass}>
            <div className='tittle flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Recovery</h4>
              <p className='py-4 text-xl w-2/3 text-center text-gray-500'>Enter OTP to recover your password</p>
            </div>

          <form className='pt-20' >
              <div className='textbox flex flex-col items-center gap-6'>

                <div className='input text-center'>
                <span className='py-4 text-sm text-left to-gray-500'> Enter 6 digit OTP to sent your mail adrress </span>
                  <input className={styles.textbox} type='text' placeholder='OTP' />
                </div>

                <button type='submit'> Sign In </button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-500'>Can't get OTP? <button className='text-red-500' to="/">Resend</button></span>
              </div>

          </form>

         </div>
      </div>
    </div>
  )
}
