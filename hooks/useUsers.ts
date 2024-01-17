import { recievedUserProps, userProps } from '@/interface';
import { UserRole } from '@prisma/client';
import { string } from 'zod';
import { create } from 'zustand';



export interface useUserProps {
  users: {
    students: userProps[];
    teachers: userProps[],
    parents: userProps[],
    users: recievedUserProps[]
  };
  getAllUsers: () => void;
}

export const useUser = create<useUserProps>((set) => ({
  users: {
    students: [],
    teachers: [],
    parents: [],
    users: []
  },
  getAllUsers: async () => {
    try {
      const response = await fetch('/api/getAllUsers');
      const data: recievedUserProps = await response.json();
  
      const arryStudent = data.getAllUsers.filter((student) => student.role === UserRole.STUDENT);
      const arryTeacher = data.getAllUsers.filter((teacher) => teacher.role === UserRole.TEACHER);
      const arryParent = data.getAllUsers.filter((parent) => parent.role === UserRole.PARENTS);
      console.log(arryStudent)
      set({
        users: {
          students: arryStudent,
          teachers: arryTeacher,
          parents: arryParent,
          users: Array(data),
        },
      });
  
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));
