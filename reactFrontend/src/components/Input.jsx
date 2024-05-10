import { useEffect, useImperativeHandle, useState, useRef, forwardRef } from "react"
import {get} from 'react-hook-form'
import Eye from "./eye";
import EyeOff from "./eye-off";
import {ErrorMessage} from "@hookform/error-message";



const MyInput = forwardRef(({type, name, label, errors, required, ...props}, ref) => {
    console.log(errors)

    const inputRef = useRef(null)

    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(()=>{
        if(type === "password" && showPassword) {
            setInputType("text")
        }

        if(type === "password" && !showPassword){
            setInputType("password")
        }
    }, [type, showPassword])


    useImperativeHandle(ref, () => inputRef.current)
    const hasError = get(errors, name)

  return (
    <div>
    <div className="w-full z-0 relative text-xs leading-5 font-semibold">
    <input 
        type={inputType}
        placeholder=""
        className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
        ${hasError && "!border-rose-500 focus:!border-rose-500"}`}
        {...props}
        ref={inputRef}
    />
    <label
        htmlFor={name}
        onClick={()=>inputRef.current?.focus()}
        className={`mx-3 px-1 transition-all absolute duration-300 top-3 -z-10 origin-0 text-dark/80
        ${hasError && "!text-rose-500"}`}>
            {label}
            {required && <span className="text-rose-500">*</span>}
    </label>
    {
        type === "password" && (
            <button 
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="text-gray-400 px-4 focus:outline-none transition-all 
                duration-150 outline-none focus:text-gray-700 absolute right-0 top-3">
                    {showPassword ? <Eye/> : <EyeOff />}
            </button>
        )
        
    }
    </div>
    <ErrorMessage
    errors={errors}
    name={name}
    render={({message}) =>{
        return (
            <div className="pt-1 pl-2 text-rose-500 ">
            
                <span>{message}</span>
            </div>
        )
    } 

    }/>
    </div>
  )
})

MyInput.displayName = "MyInput"

export default MyInput