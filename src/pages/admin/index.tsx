import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "../../../auth.config";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authConfig);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const allowedRoles = ["ADMIN"];
  const userRole = session.user?.role;
  if (!allowedRoles.includes(userRole)) {
    return {
      redirect: {
        destination: "/unauthorized",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
export default function index() {
  return (
    <div className="px-32 py-6">
      <h1 className="font-bold text-3xl capitalize">registered users</h1>
      <p className="text-gray-secondary text-sm mt-2">
        Manage all registered users within the system
      </p>
    </div>
  );
}
