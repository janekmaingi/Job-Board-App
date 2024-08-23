import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  const signOutUrl = await getSignUpUrl();

  return (
    <header>
      <div
        className="container items-center
          flex justify-between mx-auto my-4"
      >
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link
              href={signInUrl}
              className="py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-gray-200"
            >
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 py-1 px-2 sm:py-2 sm:px-4 rounded-md"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            href={"/new-listing"}
            className="py-1 px-2 sm:py-2 sm:px-4 rounded-md bg-blue-600 text-white"
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
