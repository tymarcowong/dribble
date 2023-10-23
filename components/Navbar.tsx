import { NavLinks } from "@/constants";
import Link from "next/link";
import Auth from "./Auth";

const Navbar = () => {
  const session = null;
  return (
    <nav className=" bg-red-500">
      <Link href="/">Logo</Link>
      <ul>
        {NavLinks.map((link) => (
          <li>
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {session ? (
          <>
            user image (profile)
            <Link href="/create-post">Post</Link>
          </>
        ) : (
          <Auth />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
