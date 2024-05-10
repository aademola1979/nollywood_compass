import { useEffect } from "react"
import siteMetadata from '../lib/siteMetadata'
import { useBlogsContext } from "../hooks/useBlogsContext.jsx"

const HomePage = () => {

    const {blogs, dispatch} = useBlogsContext()

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${siteMetadata.BASE_URL}/blogs`)
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'SET_BLOGS', payload: json})
          }
      }
      fetchData()
    }, [dispatch])
    
  
    console.log('blogs: ',blogs)
  return (
    <div className="w-screen container-px flex flex-col gap-4">
      {
        blogs && blogs.map((blog)=>(
          <div key={blog._id} className="w-full justify-around bg-green-400 flex gap-6">
            <h1 className="bg-white">{blog.title}</h1>
            <p className="bg-white">{blog.description}</p>
          </div>
         
        ))
      }
        
    </div>
  )
}

export default HomePage