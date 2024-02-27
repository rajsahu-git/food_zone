import { useContext } from "react"
import UserContext from "../utils/UserContext"
const Footer=()=>{
    const {user} = useContext(UserContext)
    return(
        <>
            <h1>Footer</h1>
            {user.name}
        </>
    )
}

export default Footer