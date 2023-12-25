'use client'
import { UserRole } from "@prisma/client";

import { redirect } from "next/navigation";


const useRoute = (role: UserRole) => {

  const redirectTo = (path: string) => {
    redirect(path);
  };
    
    switch (role) {
        case UserRole.ADMIN:
            redirectTo("/admin");
            break;
        case UserRole.STUDENT:
            redirectTo("/student");
        break;
        case UserRole.TEACHER:
            redirectTo("/teacher");
            break;
        case UserRole.USER:
            redirectTo("/users-registration");
            break;
        case UserRole.PARENTS:
            redirectTo("/parent");
            break;
        default:
        // Handle unexpected roles or situations
            console.error('Invalid or unexpected user role:', role);
        // Redirect to a default location or show an error page
            redirect('/login');
        break;
    }
};

export default useRoute;
