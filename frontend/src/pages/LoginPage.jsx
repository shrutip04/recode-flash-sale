function LoginPage(){

return(

<div className="flex items-center justify-center min-h-screen">

<div className="card p-8 w-[400px]">

<h1 className="text-center text-2xl neon mb-6">
SIGN IN
</h1>

<input
placeholder="Email"
className="w-full mb-4 p-3 bg-slate-800 rounded"
/>

<input
placeholder="Password"
type="password"
className="w-full mb-4 p-3 bg-slate-800 rounded"
/>

<button className="primary-btn w-full">
ENTER
</button>

</div>

</div>

)

}

export default LoginPage