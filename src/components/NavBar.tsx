import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleSectionClick(e, 'home')}
          className="text-slate-300 hover:text-white"
        >
          Home
        </a>
       
        <div className="flex gap-6">
          <a 
            href="#about" 
            onClick={(e) => handleSectionClick(e, 'about')}
            className="text-slate-300 hover:text-white"
          >
            About
          </a>
          <a 
            href="#background" 
            onClick={(e) => handleSectionClick(e, 'background')}
            className="text-slate-300 hover:text-white"
          >
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