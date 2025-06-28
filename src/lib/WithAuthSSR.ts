/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../../auth.config";

type WithAuthOptions = {
  allowedRoles: string[];
};

export function withAuthSSR<P>(
  handler: (
    context: GetServerSidePropsContext,
    session: any
  ) => Promise<GetServerSidePropsResult<P>>,
  options: WithAuthOptions = { allowedRoles: [] }
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await getServerSession(context.req, context.res, authConfig);
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const userRole = session.user?.role;

    if (!options.allowedRoles.includes(userRole)) {
      return {
        redirect: {
          destination: "/unauthorized",
          permanent: false,
        },
      };
    }

    return handler(context, session);
  };
}
