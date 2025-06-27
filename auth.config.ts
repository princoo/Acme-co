import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
//   providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = "user";
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role ?? "user";
      }
      return session;
    },
  },
};
