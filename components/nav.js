import Link from "next/link";

function Navigation() {
    return(
        <nav className="links">
          <Link href="https://twitter.com/">
            <a>Twitter</a>
          </Link>
          <Link href="https://www.linkedin.com/">
            <a>LinkedIn</a>
          </Link>
        </nav>
    )
}

export default Navigation