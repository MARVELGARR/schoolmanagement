import { userProps } from '@/interface';
import { create } from 'zustand';

interface useUserProps {
  users: userProps[];
  getAllUsers: () => void;
}

export const useUser = create<useUserProps>((set) => ({
  users: [],
  getAllUsers: async () => {
    try {
      // Ensure the URL is prefixed with the protocol (e.g., http:// or https://)
      const response = await fetch('/api/getAllUsers');
      const data = await response.json();
      
      // Log the data for debugging purposes

      
      // Update the state with the fetched data
      set({users: data});
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));
