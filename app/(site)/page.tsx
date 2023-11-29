'use client'

import { getServerSession } from "next-auth"
import { signOut, useSession } from "next-auth/react"
import { authOptions } from "../api/auth/[[...nextauth]]/route"
import { redirect } from "next/navigation"



export default function Home() {

  const {data:session, status} = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login")
    },
  })
  

  return (
    <main className="">
      <div onClick={() => signOut()} className=" cursor-pointer">log out</div>
    </main>
  )
}
