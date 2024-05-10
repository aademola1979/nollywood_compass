import { useState } from "react"
import siteMetadata from "../lib/siteMetadata"


const LoginPage = () => {
  const [user, setUser] = useState(
    {
      password: "",
      email: ""
    }
  )

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch(`${siteMetadata.BASE_URL}/signIn`, 
      {
        method: 'POST',
        body:JSON.stringify(user),
        headers:{'Content-Type':"application/json"}

      }
    )

    setIsSubmitting(false)



    const json = await response.json()

    if(!response.ok){
      setError(json.error)

    }else{
      setUser(
        {
          email:'',
          password:''
        }
      )
    }
  }

  console.log(user)


  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div 
        className='max-w-[500px] max-h-fit overflow-y-scroll no-scrollbar 
        lg:w-[500px] md:w-[450px] xlsmall:w-fit rounded-md shadow-md relative grid gap-2 px-4 
        xlsmall:px-6 sm:px-8 md:px-12 lg:px-16 pt-12 pb-6 bg-light/70 text-dark'
    >
        <div>
            <h2 className='w-full text-green-600 font-semibold text-xl text-center mb-6'>Welcome back!</h2>
            <p className='text-dark/80 font-normal'>
                Login to share your Nollywood experience.
            </p>

        </div>
        <form className='grid gap-[1.2rem] w-full' onSubmit={handleSubmit}>
            <div className='grid gap-[1rem] w-full'>
              <div className="border-t pt-4 border-gray-300">
                {
                  error 
                  && (
                  <div className="w-full flex justify-center text-rose-500">
                    {error}
                  </div>
                )
                  
      
                }

              </div>
              <div className="w-full grid gap-1 text-xl text-dark/70">
                <label htmlFor="email" className="text-[1rem] capitalize">email<sup className="text-rose-500">*</sup></label>
                <input 
                type="text"
                name="email"
                id="email"
                placeholder="adeade13@gmail.com"
                onChange={e =>handleChange(e)}
                className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
                rounded outline-none focus:outline-none ${error && "!border-rose-500 focus:!border-rose-500"}`}
                required/>
              </div>

              <div className="w-full grid gap-1 text-xl text-dark/70">
                <label htmlFor="email" className="text-[1rem] capitalize">password<sup className="text-rose-500">*</sup></label>
                <input 
                type="password"
                name="password"
                id="password"
                onChange={e =>handleChange(e)}
                className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
                rounded outline-none focus:outline-none ${error && "!border-rose-500 focus:!border-rose-500"}`}
                required/>
              </div>

             
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-green-500 hover:bg-green-600 py-2 rounded-md text-light ${isSubmitting && "bg-green-300"}`}>
              Submit
            </button>

        </form>
    </div>
    </div>
  )
}

export default LoginPage