import { useNavigate } from "react-router-dom"

function LoginPage(){

const navigate = useNavigate()

const handleLogin = ()=>{
navigate("/")
}

return(

<div className="flex justify-center items-center min-h-screen bg-[#0b0f14]">

<div className="bg-slate-800 p-10 rounded-xl w-96">

<h1 className="text-2xl mb-6 text-center text-cyan-400">
SIGN IN
</h1>

<input
className="w-full p-3 mb-4 bg-slate-700 rounded"
placeholder="Email"
/>

<input
type="password"
className="w-full p-3 mb-6 bg-slate-700 rounded"
placeholder="Password"
/>

<button
onClick={handleLogin}
className="w-full bg-cyan-500 py-2 rounded"
>
ENTER
</button>

</div>

</div>

)

}

export default LoginPage