import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate();
    async function handleSignup(e){
        e.preventDefault();
        const res = await fetch("https://payloadhackathon.onrender.com/user/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: 'include',
            body:JSON.stringify({
                username:e.target.username.value,
                email:e.target.email.value,
                password:e.target.password.value
            })
        });
        if(res.status===201){
            navigate("/");
        }
        else if(res.status===400){
            alert("All fields are required");
        }
        else if(res.status===409){
            alert("Username or Email already exists");
        }
        const data = await res.json();
        console.log(data);
    }
    return (
        <div className="flex h-screen w-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">Username</label>
                        <div className="mt-2">
                            <input id="username" type="text" name="username" required autoComplete="username" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>
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
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:cursor-pointer">Sign up</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Already have an account?
                    <NavLink to="/" className="font-semibold text-indigo-400 hover:text-indigo-300">Sign In</NavLink>
                </p>
            </div>
        </div>
    )
}
