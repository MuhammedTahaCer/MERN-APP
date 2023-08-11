import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles  from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik } from 'formik'
import {registerValidate} from '../helper/validate'
import convertToBase64 from '../helper/convert'

export default function Register() {
  
  const[file, setFile]=useState()

  const formik =useFormik ({
    initialValues: {
      mail:'',
      username:'',
      password: ''
    },
    validate:  registerValidate ,
    validateOnBlur: false,
    validateOnChange:false,
    onSubmit: async values=> {
      values = await Object.assign(values, {profile: file ||  ''}) //return ediyoruz son olarak
      console.log(values)
    }
  })

  //upload targeted file
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className='container mx-auto'>

      <Toaster position='bottom-right' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
         <div className={styles.glass} >
            <div className='tittle flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Register</h4>
              <p className='py-4 text-xl w-2/3 text-center text-gray-500'>Happy to join you</p>
            </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor='profile'>
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>
                <input onChange={onUpload} type='file' id="profile" name='profile'></input>
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <input {...formik.getFieldProps('mail')} className={styles.textbox} type='email' placeholder='Your mail adress *' />
                <input {...formik.getFieldProps('username')} className={styles.textbox} type='text' placeholder='Username *' />
                <input {...formik.getFieldProps('password')} className={styles.textbox} type='email' placeholder='Define Password *' />
                <button type='submit'> Register </button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-500'>Already Member? <Link className='text-red-500' to="/">Log In</Link></span>
              </div>

          </form>

         </div>
      </div>
    </div>
  )
}
