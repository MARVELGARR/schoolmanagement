'use client'
import { UserRole } from '@prisma/client';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useRoute from '@/hooks/UseRoute';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useEffect } from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const {data: session} = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/login'); 
        }
    })

    const {isLoading, currentEmail, currentRole} = useCurrentUser()
    if(currentRole !== null ){

        useRoute(currentRole as UserRole)

    }

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
