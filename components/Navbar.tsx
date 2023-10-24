import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className=" bg-red-500">
      <Link href="/">Logo</Link>
      <ul>
        {NavLinks.map((link) => (
          <li key={link.text}>
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {session?.user ? (
          <>
            <Image src={session?.user?.avatarUrl} alt={session.user.name} />
            <Link href="/create-post">Post</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
