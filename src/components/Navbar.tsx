import {Link} from "react-router-dom";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/fun", label: "Fun" },
  {to: "/blog", label: "Blog"},
  {to: "/publications", label: "Publications"},
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="flex gap-6 px-6 py-4 bg-slate-950 text-slate-300">
      {navLinks.map(l => (
        <Link key={l.to} to={l.to} className="hover:text-cyan-400">{l.label}</Link>
      ))}
    </nav>
  )
}

export default Navbar