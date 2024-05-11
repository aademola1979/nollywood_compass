import { useState } from "react"
import siteMetadata from "../lib/siteMetadata"
import { useAuthContext } from "../hooks/useAuthContext"


const SignUPage = () => {
  const [user, setUser] = useState(
    {
      first_name:"",
      last_name: "",
      confirmPassword:"",
      password: "",
      email: ""
    }
  )

  const {dispatch} = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch(`${siteMetadata.BASE_URL}/api/signup`, 
      {
        method: 'POST',
        body:JSON.stringify(user),
        headers:{'Content-Type':"application/json"}

      }
    )

    const json = await response.json()

    if(!response.ok){
      setIsSubmitting(false)
      setError(json.error)

    }
    
    
    if(response.ok){

         //Save response to localStorage
         localStorage.setItem('user', JSON.stringify(json))
            
         //update state
         dispatch({type: 'LOGIN', payload:json})
      
         setUser(
        {
          first_name:'',
          last_name:'',
          email:'',
          password:'',
          confirmPassword:''
        }
      )
      setIsSubmitting(false)
    }
  }

  console.log(user)


  return (
    <div className="flex justify-center items-center !max-w-[100vw] min-w-[100vw] h-full">
      <div 
        className='max-w-[500px] max-h-fit overflow-y-scroll no-scrollbar my-8
        lg:w-[500px] md:w-[450px] xlsmall:w-fit rounded-md shadow-md relative grid gap-2 px-4 
        xlsmall:px-6 sm:px-8 md:px-12 lg:px-16 pt-8 pb-6 bg-light/70 text-dark'
    >
        <div>
          <h1 className="font-semibold font-serif w-full text-center text-base md:text-xl mb-8">Nollywood compass</h1>
            <p className='text-dark/80 font-normal'>
                Sign up to share your Nollywood experience.
            </p>
        </div>
        <form className='grid gap-[1rem] w-full' onSubmit={handleSubmit}>
            <div className='grid gap-[0.5rem] w-full'>
              <div className="border-t border-gray-300">
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
              <div className="w-full grid gap-1 text-xl text-dark/70">
                <label htmlFor="email" className="text-[1rem] capitalize">First name<sup className="text-rose-500">*</sup></label>
                <input 
                type="text"
                name="first_name"
                id="first_name"
                onChange={e =>handleChange(e)}
                className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
                rounded outline-none focus:outline-none ${error && "!border-rose-500 focus:!border-rose-500"}`}
                required/>
              </div>

              <div className="w-full grid gap-1 text-xl text-dark/70">
                <label htmlFor="email" className="text-[1rem] capitalize">Last name<sup className="text-rose-500">*</sup></label>
                <input 
                type="text"
                name="last_name"
                id="last_name"
                onChange={e =>handleChange(e)}
                className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
                rounded outline-none focus:outline-none ${error && "!border-rose-500 focus:!border-rose-500"}`}
                required/>
              </div>
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

              <div className="w-full grid gap-1 text-xl text-dark/70">
                <label htmlFor="email" className="text-[1rem] capitalize">confirm password<sup className="text-rose-500">*</sup></label>
                <input 
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={e =>handleChange(e)}
                className={`pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:border-green-400 border-green-200
                rounded outline-none focus:outline-none ${error && "!border-rose-500 focus:!border-rose-500"}`}
                required/>
              </div>

              
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-green-500 hover:bg-green-600 py-2 rounded-md text-light 
              ${isSubmitting && "bg-green-300"}`}>
             {
              isSubmitting ? "Loading" : "Sign Up"
             }
            </button>

        </form>
    </div>
    </div>
  )
}

export default SignUPage