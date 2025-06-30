import { makeRole } from "@/lib/utils/MakeRole";
import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const role = makeRole(user.email ?? "");
        token.role = role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        if (!session.user.image) {
          session.user.image = null;
        }
      }
      return session;
    },
  },
};
