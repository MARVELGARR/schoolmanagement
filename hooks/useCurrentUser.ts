// Import types from next-auth/react
'use client'
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


type currentUserProps = {
  id?: string;
  email?: string;
  name?: string;
  image?: string;
  role?: UserRole;
};

const usCurrentUser = () => {


  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const [currentRole, setCurrentRole] = useState<string | null>(null); // Adjusted the type here
  const currentEmail = session?.user?.email;
  const [isLoading, setIsLoading] =useState<boolean>(false)

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      setIsLoading(true)
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
      finally{
        setIsLoading(false);
      }
    };

    // Only fetch user if there is a session
    if (session) {
      fetchUser();
    }
    return ()=>{
      abortController.abort();
    }
  }, []);

  return { currentEmail, currentRole, isLoading };
};

export default usCurrentUser;
