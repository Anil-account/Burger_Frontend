import { Route, Routes } from "react-router-dom"
import Login from "./Login"

const Logout=()=>{
    localStorage.setItem('token','');
    console.log('logout token:'+localStorage.getItem('token'))
    return(
        <Routes>
            <Route element={<Login/>}></Route>
        </Routes>
        
    )

}
export default Logout;