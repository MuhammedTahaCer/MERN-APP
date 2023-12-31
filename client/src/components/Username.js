import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles  from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {userFormik} from 'formik'

export default function Username() {
  
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen'>
         <div className={styles.glass}>
            <div className='tittle flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Hello Again</h4>
              <p className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore More Content!</p>
            </div>

          <form className='py-1'>
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <input className={styles.textbox} type='text' placeholder='User Name' />
                <button type='submit'> Lets Go </button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
              </div>

          </form>

         </div>
      </div>
    </div>
  )
}
