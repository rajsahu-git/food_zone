import { useRouteError } from "react-router-dom"

const Eroor=()=>{
    const err = useRouteError()
    return(
        <>
            <h1>Somthig went wrong</h1>
            <h2>{err.statusText} : {err.status}</h2>
        </>
    )
}

export default Eroor