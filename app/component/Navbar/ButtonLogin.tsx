"use client";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const ButtonLogin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Menangani logout
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/'); // Redirect ke halaman home setelah logout
  };
  const handleSignIn = async () => {
    await signIn();
    router.push('/'); // Redirect ke halaman home setelah logout
  };

  // Tentukan label dan URL berdasarkan status sesi pengguna
  const validateLabel = session ? "Sign Out" : "Sign In";
  const validateAction = session ? handleSignOut : handleSignIn

  return (
    <div className="flex items-center justify-between gap-2">
      {session ? (
        <Link
          className="text-accent bg-dark p-3 rounded"
          href="/users/dashboard"
        >
          Dashboard
        </Link>
      ) : null}
      <button
        className="text-accent bg-dark p-3 rounded"
        onClick={validateAction}
      >
        {validateLabel}
      </button>
    </div>
  );
};

export default ButtonLogin;
