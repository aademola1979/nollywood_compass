
import { createContext, useReducer } from 'react'

export const BlogsContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const blogsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS': 
      return {
        blogs: action.payload
      }
    case 'CREATE_BLOG':
      return {
        blogs: [action.payload, ...state.blogs]
      }
    case 'DELETE_BLOG':
      return {
        blogs: state.blogs.filter((b) => b._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null
  })

  console.log('BolgsContext state: ', state)

  return (
    <BlogsContext.Provider value={{...state, dispatch}}>
      { children }
    </BlogsContext.Provider>
  )
}