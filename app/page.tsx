'use client'
import CreateStudentForm from "@/components/MarvelComponents/dialogs/createStudentDialog"
import { UserRole } from "@prisma/client"
import { useSession } from "next-auth/react"
import {  useRouter } from "next/navigation"

import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const me = await fetch('/api/routeUsers');
        const user = await me.json()
        console.log(user)
        if (!user) {
          // Redirect or handle the case where user is not found
          throw new Error('No user Found')
          
        }
        console.log(user)
        if (user?.role === UserRole.ADMIN) {
          router.push('/app/admin')
        } else if (user?.role === UserRole.STUDENT) {
          router.push('/app/students')
        } else if (user?.role === UserRole.TEACHER) {
          router.push('/app/teachers')
        } else if (user?.role === UserRole.PARENTS) {
          router.push('/app/parents')
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        // Handle the error as needed
      }
      finally{
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {isLoading ? (
        // Show loading state or placeholder content
        <p>Loading...</p>
      ) : (
        <CreateStudentForm />
      )}
    </div>
  )
}
