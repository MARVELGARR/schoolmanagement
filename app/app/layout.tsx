'use client'
import { useEffect, useState } from 'react';
import { UserRole } from '@prisma/client';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const {data: session} = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/login'); 
        }
    })
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            try{

                const me = await fetch('api/routeUsers')
                const user = await me.json()
                console.log(user)
                if (user.role === UserRole.ADMIN) {
                    router.push('/app/admin');
                } else if (user.role === UserRole.STUDENT) {
                    router.push('/app/student');
                } else if (user.role === UserRole.TEACHER) {
                    router.push('/app/teacher');
                } else if (user.role === UserRole.PARENTS) {
                    router.push('/app/parent')
                }
                else{
                    router.push('/')
                }
            }
            catch(error){
                console.error(error)
            }
            finally{
                setIsLoading(false)
            }
        }

        
        fetchData()
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className=''>
        {
            isLoading ? (
                <div className='w-full flex h-screen items-center justify-center'>Loading...</div>
            ):(

                <div className="w-full h-screen flex items-center">
                
                    {children}
                </div>
            )
        }
    </div>
  );
};

export default AppLayout;
