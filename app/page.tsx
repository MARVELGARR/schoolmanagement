'use client'
import useRoute from "@/hooks/UseRoute"
import useCurrentUser from "@/hooks/useCurrentUser"
import { UserRole } from "@prisma/client"
import { useSession } from "next-auth/react"
import {  useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })

  const {isLoading, currentRole} = useCurrentUser()

  if(currentRole !== null ){
    useRoute(currentRole as UserRole)
  }


  return (
    <div className="h-screen w-full flex items-center justify-center">
      {isLoading ? (
        // Show loading state or placeholder content
        <p>Loading...</p>
      ) : (
        <div className='w-full '>


        </div>
      )}
    </div>
  )
}
