import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/sampleAvatar.jpeg'
import styles  from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik } from 'formik'
import {resetPwdValidate} from '../helper/validate'

export default function Reset() {
  
  const formik =useFormik ({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate:  resetPwdValidate ,//helper folder içinde; init edilen usernamei doğrulayacağız
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
              <h4 className='text-5xl font-bold'>Reset</h4>
              <p className='py-4 text-xl w-2/3 text-center text-gray-500'>Enter New Strong Password</p>
            </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
              {/* <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div> */}
              <div className='textbox flex flex-col items-center gap-6'>
                <input {...formik.getFieldProps('password')} className={styles.textbox} type='password' placeholder='Set New Password' />
                <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='password' placeholder='Confirm New Password' />
                <button type='submit'> Reset </button>
              </div>
          </form>

         </div>
      </div>
    </div>
  )
}
