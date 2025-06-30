import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
  return (
    <div className=" mt-10 rounded-lg border border-secondary overflow-hidden">
      <div className="grid grid-cols-2 bg-gray-secondary border-b border-secondary text-white">
        <div className="px-6 py-4 text-left">
          <span className="text-sm font-medium">Name</span>
        </div>
        <div className="px-6 py-4 text-right">
          <span className="text-sm font-medium">Role</span>
        </div>
      </div>

      <div className="divide-y divide-secondary">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`grid grid-cols-2 hover:bg-secondary ${
              index % 2 === 0 ? "bg-white" : "bg-secondary/30"
            }`}
          >
            <div className="px-6 py-4">
              <span className="text-sm font-medium capitalize">{user.full_name}</span>
            </div>
            <div className="px-6 py-4 text-right">
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium ${
                  user.role === "ADMIN"
                    ? "bg-gray-secondary text-primary"
                    : "bg-secondary"
                }`}
              >
                {user.role === "USER" ? "User" : user.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
