import { withAuthSSR } from "@/lib/WithAuthSSR";

export const getServerSideProps = withAuthSSR(
  async (context, session) => {
    return {
      props: {
        session,
      },
    };
  },
  { allowedRoles: ["ADMIN"] }
);

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
