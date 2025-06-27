export const protectedRoutes = [
  {
    path: "/dashboard",
    allowedRoles: ["user"],
  },
  {
    path: "/admin",
    allowedRoles: ["admin"],
  },
];