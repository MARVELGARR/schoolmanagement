import NextAuth from "next-auth/next";
import { Prisma } from "@/db/prisma-setting/prisma-client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { NextAuthOptions } from 'next-auth';



export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(Prisma),
  pages: {
    signIn: '/login', // Customize the sign-in page redirect
    signOut: '/', // Customize the sign-out page redirect
     // Customize the error page redirect
    verifyRequest: '/auth/verify-request', // Customize the verify request page redirect
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return { id: profile.sub, name: profile.name, email: profile.email, image: profile.profile,
          role: profile.role = "STUDENT" 
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile(profile) {
        return { id: profile.sub, name: profile.name, email: profile.email, image: profile.profile,
          role: profile.role = 'STUDENT' 
        }
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        
        email: { label: "Email", type: "string", placeholder: "marvellous obatale" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "string", placeholder: "marvel" },
      },
      async authorize(credentials, req) {
        try {
          // Check if email and password are provided
              if (!credentials?.email || !credentials?.password) {
                  throw new Error("Invalid credentials");
              }

            // Find the user by email
                const user = await Prisma.user.findUnique({
                  where: {
                    email: credentials?.email,
                  },
                });

            // Check if the user exists
            if (!user || !user.hashedPassword) {
                throw new Error("Email has not been registered");
            }

            // Check if the password matches
            const passwordMatches = await bcrypt.compare(credentials.password, user.hashedPassword);

            // Check if the password does not match
            if (!passwordMatches) {
                throw new Error("Password does not match");
            }

            // Return user information
            return user; // Replace with the actual user
                
        } catch (error) {
          console.error("Error authenticating user", error);          
          throw new Error("Authentication failed");
        }
      },
    }),
    // Add other authentication providers as needed
  ],

  
  callbacks: {
    async jwt({ token, user, account }) {
      // Store user information in the token (if needed)
      if (user) {
        token.id = user?.id,
        token.email = user?.email
        token.image = user?.image
        // Add other user properties as needed
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },

    async session({ session, token, user,  }) {
      // Add user information to the session (if needed)
      if (token && user) {
        session.user = {
          email: token?.email,
          image: token?.image as string,
          // Add other user properties as needed
        };
        
      }
      return session;
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
    
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
