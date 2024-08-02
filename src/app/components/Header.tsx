import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div
        className="container items-center
          flex justify-between mx-auto my-4"
      >
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
          <Link href={"/login"} className="bg-gray-200">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-blue-600 text-white">
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}