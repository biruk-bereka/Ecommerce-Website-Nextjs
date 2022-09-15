import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav className="flex justify-around p-10 bg-slate-300">
      <img src="/logo.png" />
      <div>
        <FontAwesomeIcon icon={faBars} style={{width: '50px'}}/>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
