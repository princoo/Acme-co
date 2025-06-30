import UsersTable from "@/components/UsersTable";
import { supabase } from "@/lib/superbase";
import { withAuthSSR } from "@/lib/WithAuthSSR";
import { User } from "@/types/user";

export const getServerSideProps = withAuthSSR(
  async (context, session) => {
    const { data, error } = await supabase.from("profiles").select("*");
    return {
      props: {
        session,
        users: data,
        error,
      },
    };
  },
  { allowedRoles: ["ADMIN"] }
);

export default function index({ users }: { users: User[] }) {
  return (
    <div className="px-32 py-6">
      <h1 className="font-bold text-3xl capitalize">registered users</h1>
      <p className="text-gray-secondary text-sm mt-2">
        Manage all registered users within the system
      </p>
      <UsersTable users={users} />
    </div>
  );
}
