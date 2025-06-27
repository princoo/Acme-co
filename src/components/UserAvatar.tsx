"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserAvatar() {
  const { data: session } = useSession();
  if (!session || !session.user) return null;
  console.log(session.user.image)
  return (
    <div className="hidden sm:block">
      <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-secondary">
        <div className="text-xl font-bold text-black dark:text-accent">
          {session.user.image ? (
            // <img
            //   src={session.user.image}
            //   alt={session.user.name}
            //   className="w-full h-full object-cover"
            // />
            <Image
              src={session.user.image}
              alt={session.user.name ?? "avatar"}
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
            // <p>there is the image {session.user.image}</p>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {session.user?.name?.charAt(0)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
