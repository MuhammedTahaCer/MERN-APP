import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles  from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik } from 'formik'
import {passwordValidate} from '../helper/validate'

export default function Password() {
  
  const formik =useFormik ({
    initialValues: {
      password: 'exam.123'
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
              <h4 className='text-5xl font-bold'>Hello Again</h4>
              <p className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore More Content!</p>
            </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Password' />
                <button type='submit'> Sign In </button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div>

          </form>

         </div>
      </div>
    </div>
  )
}
