import { useAuthContext } from "./useAuthContext"

export const UseLogout = () =>{

    const {dispatch} = useAuthContext()

    const logOut = () => {

        //Remove token from local storage
        localStorage.removeItem('user')


        //Update state
        dispatch({type:"LOGOUT"})

    }

    return {logOut}

}