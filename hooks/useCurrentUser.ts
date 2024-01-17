// Import types from next-auth/react
'use client'
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


type currentUserProps = {
  id?: string;
  email?: string;
  name?: string;
  image?: string;
  role?: UserRole;
};

const usCurrentUser = () => {

  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const [currentRole, setCurrentRole] = useState<string | null>(null); // Adjusted the type here
  const currentEmail = session?.user?.email;
  

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      try {
        const userData = await fetch('api/getCurrentUser',{

          signal: abortController.signal
        });
        const currentUser: currentUserProps = await userData.json();

        setCurrentRole(currentUser?.role as UserRole);
        console.log('Current User:', currentUser);
      } catch (error) {
        console.error('Failed to fetch currentUser:', error);
      }

    };

    // Only fetch user if there is a session
    if (status === 'authenticated') {
      fetchUser();
    }
    return ()=>{
      abortController.abort();
    }
  }, [session]);

  return { currentEmail, currentRole, isLoading: status === 'loading' };
};

export default usCurrentUser;
