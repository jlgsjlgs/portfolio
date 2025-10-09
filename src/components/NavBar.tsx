import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick} className="text-slate-300 hover:text-white">
          Home
        </Link>
       
        <div className="flex gap-6">
          <a href="#about" className="text-slate-300 hover:text-white">
            About
          </a>
          <a href="#background" className="text-slate-300 hover:text-white">
            Background
          </a>
         
          <Link to="/projects" className="text-slate-300 hover:text-white">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}