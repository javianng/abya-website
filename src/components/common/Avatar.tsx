import Link from "next/link";
import { User } from "lucide-react";
import { useAuth } from "./AuthContext";

const Avatar = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center">
      {user ? (
        <Link href="/profile">
          <User className="h-8 w-8 rounded-full bg-brandRed-10 p-1 duration-200 hover:bg-brandRed-30" />
        </Link>
      ) : (
        <>
          <Link href="/register" className="underline-offset-4 hover:underline">
            <p>Register</p>
          </Link>
          <p className="mx-1">/</p>
          <Link href="/login" className="underline-offset-4 hover:underline">
            <p>Login</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Avatar;
