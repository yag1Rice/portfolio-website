import {Link} from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/fun", label: "Fun" },
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