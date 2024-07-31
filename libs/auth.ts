import { getServerSession, NextAuthOptions } from "next-auth";

import GithubProviders from "next-auth/providers/github";
import GoogleProviders from "next-auth/providers/google";

import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export const authOption: NextAuthOptions= {
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
}

export const UserSession = async () => {
  // const session = await getServerSession(authOptions);
  // return session?.user;
};



// export const useServerSession = async (context: GetServerSidePropsContext) => {
//   const session = await getSession(context);
//   return session;
// };

// export async function getSessionData(context: any) {
//   const session = await getSession(context);
//   return session;
// }