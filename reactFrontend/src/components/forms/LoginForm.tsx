/* eslint-disable */
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import MyInput from '../Input';
import {useForm} from "react-hook-form";
import Spinner from "../spinner"



const LoginForm = () => {

    const [error, setError] = useState(null);
    const [authError, setAuthError] = useState('');

    const handleError = (e) => {
        setAuthError('Invalid email or password')
    }

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm();

    const myOnSubmit = async() =>{
        try {
           
        } catch (error) {
            console.log('Sign in failed', error.message)
            
        }

    }






  return (
    <div 
        className='max-w-[500px] max-h-fit overflow-y-scroll no-scrollbar 
        lg:w-[500px] md:w-[450px] xlsmall:w-fit rounded relative grid gap-2 px-4 
        xlsmall:px-6 sm:px-8 md:px-12 lg:px-16 pt-12 pb-6 bg-light/70 text-dark'
    >
        {
            isSubmitting && (
                <div className='z-30 fixed inset-0 bg-light bg-opacity-50 flex justify-center w-full items-center'>
                    <Spinner size='24'/>
                </div>
            )
        }
        <div>
            <h2 className='w-full text-green-600 font-semibold text-xl text-center mb-6'>Welcome back!</h2>
            <p className='text-dark/80 font-normal'>
                Please, login to share your Nollywood experience.
            </p>

        </div>
        <form className='grid gap-[1rem] w-full' onSubmit={handleSubmit(myOnSubmit, handleError)}>
            <div className='grid gap-[1rem] w-full'>
                <MyInput 

                
                    />

            </div>

        </form>
    </div>
  )
}

export default LoginForm