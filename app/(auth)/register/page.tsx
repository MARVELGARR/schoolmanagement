"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-hot-toast"



export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")

    const router = useRouter()
    
    const registerUser = async (e: any) =>{
        e.preventDefault();
        try{

            const newUser = await fetch("api/register", {
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify({name, email, password})
            })
            if(newUser.ok){
                setEmail('')
                setName('')
                SetPassword("")
                toast.success("user registered successfully", )
                router.push('/login')
            }
            else{
                toast.error("user registration failed")
            }
        }
        catch(error){
            toast.error("Failed to create new user ")
            console.error("Failed to create new user ", error)
        }
    }

    return (
      <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register new account
            </h2>
          </div>
  
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={registerUser}>
                    <fieldset className="">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                                type="text"
                                required
                                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                type="email"
                                autoComplete="email"
                                required
                                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </fieldset>
    
                    <fieldset>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e)=>SetPassword(e.target.value)}
                            value={password}
                            autoComplete="current-password"
                            required
                            className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </fieldset>
    
                    <div className=''>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign up
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center mt-5 font-bold">

                    <div className='w-full flex justify-end'>Sign in with</div>
                    <div className='flex w-full gap-2 mt-3 items-center justify-center'>
                        <button type='button' onClick={()=>signIn("github")} className="w-full flex bg-white border-black border-4 rounded-xl items-center justify-center">
                            <img 
                                src="/svg/github.svg"
                                alt="github"
                                className="w-10 h-10"
                            />
                            <p className="">github</p>
                        </button>
                        <button type='button' onClick={()=>signIn("google")} className="w-full flex rounded-xl border-black border-4 justify-center items-center">
                            <img 
                                src="/svg/google.svg"
                                alt="goggle"
                                className="w-10 h-10"
                            />
                            <p>google</p>
                        </button>
                    </div>
                </div>
  
            </div>
        </div>
      </>
    )
}
  