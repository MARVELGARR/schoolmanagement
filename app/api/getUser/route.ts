import { Prisma } from "@/db/prisma-setting/prisma-client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[[...nextauth]]/route";

export async function GET(): Promise<unknown> {
  
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "No session" });
    } else if (!session?.user?.email) {
      return NextResponse.json({ message: "No user email" });
    } else {
      const getuser = await Prisma.user.findUnique({
        where: {
          email: session?.user?.email,
        },
      });

      return NextResponse.json(getuser);
    }
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
