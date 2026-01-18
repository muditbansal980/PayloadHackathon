import {useNavigate,useState} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from "../../Loading/Loading";
export default function Signin() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        
        e.preventDefault();
        try{
        setLoading(true);
        const res = await fetch("https://payloadhackathon.onrender.com/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        if (res.status === 200) {
            navigate("/home");
        }
        if (res.status === 400) {
            alert("All fields are required");
        }
        if (res.status === 401) {
            alert("Invalid email or password");
        }
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    if(loading){
        return <Loading />;
    }
    return (
        <div className="flex h-screen w-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                        <div className="mt-2">
                            <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Don't have an account?
                    <NavLink to="/Signup" className="font-semibold text-indigo-400 hover:text-indigo-300">Sign Up</NavLink>
                </p>
            </div>
        </div>
    )
}
