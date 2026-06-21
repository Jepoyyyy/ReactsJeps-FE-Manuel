import { NavLink } from 'react-router-dom';
import { FileText, CheckSquare, Film, ArrowRight } from 'lucide-react';

const CVBg = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-44 h-44">
    <path d="M30 20 h40 v60 h-40 z" />
    <path d="M30 30 h40M30 40 h40M30 50 h20M30 60 h30" />
    <circle cx="60" cy="60" r="6" />
    <path d="M60 66 c-4 0-6 2-6 4h12c0-2-2-4-6-4z" />
  </svg>
);

const TodoBg = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-44 h-44">
    <rect x="25" y="15" width="50" height="70" rx="3" />
    <rect x="40" y="10" width="20" height="8" rx="1" />
    <rect x="32" y="28" width="8" height="8" />
    <path d="M47 32h20" />
    <rect x="32" y="44" width="8" height="8" />
    <path d="M47 48h20" />
    <rect x="32" y="60" width="8" height="8" />
    <path d="M47 64h20" />
    <path d="M34 48 l2 2 l3-4" />
  </svg>
);

const MoviesBg = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-44 h-44">
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="10" />
    <circle cx="50" cy="30" r="5" />
    <circle cx="50" cy="70" r="5" />
    <circle cx="30" cy="50" r="5" />
    <circle cx="70" cy="50" r="5" />
    <circle cx="36" cy="36" r="5" />
    <circle cx="64" cy="64" r="5" />
    <path d="M20 50 A30 30 0 1 1 80 50" strokeDasharray="3 3" />
  </svg>
);

const techStack = [
  {
    name: 'React',
    label: 'React',
    icon: (
      <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="0" cy="0" r="2" fill="currentColor"/>
        <g stroke="currentColor">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'DummyJSON',
    label: 'DummyJSON',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 3H5c-1.1 0-2 .9-2 2v3c0 2 2 2 2 4s-2 2-2 4v3c0 1.1.9 2 2 2h3M16 3h3c1.1 0 2 .9 2 2v3c0 2-2 2-2 4s2 2 2 4v3c0 1.1-.9 2-2 2h-3M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'TailwindCSS',
    label: 'Tailwind',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-1.2 0-2.4.6-3.6 1.8-1.2 1.2-1.8 2.4-1.8 3.6 0 1.2.6 2.4 1.8 3.6 1.2 1.2 2.4 1.8 3.6 1.8.6 0 1.2-.1 1.8-.3 1.2-.6 1.8-1.2 1.8-1.8 0-.6-.6-1.2-1.8-1.8-.6-.3-1.2-.6-1.8-.9-.6-.3-.9-.6-.9-.9 0-.3.3-.6.9-.9.6-.3 1.2-.3 1.8-.3s1.2.1 1.8.3c1.2.6 1.8 1.2 1.8 1.8 0 .6-.6 1.2-1.8 1.8-.6.3-1.2.6-1.8.9-.6.3-.9.6-.9.9 0 .3.3.6.9.9.6.3 1.2.3 1.8.3 1.2 0 2.4-.6 3.6-1.8 1.2-1.2 1.8-2.4 1.8-3.6 0-1.2-.6-2.4-1.8-3.6-1.2-1.2-2.4-1.8-3.6-1.8z" />
      </svg>
    ),
  },
  {
    name: 'React Router',
    label: 'Router',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3h6v4H9zM9 17h6v4H9z" />
        <path d="M12 7v10M12 12h8" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Axios',
    label: 'Axios',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3L21 8M21 8L16 13M21 8H9C6 8 4 10 4 13v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Lucide',
    label: 'Lucide',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const navCards = [
  {
    to: '/cv-page',
    icon: FileText,
    title: 'CV / Resume',
    description: 'View my professional experience, skills, and qualifications.',
    bgSvg: <CVBg />,
  },
  {
    to: '/todo',
    icon: CheckSquare,
    title: 'Todo App',
    description: 'Manage your tasks with a clean CRUD interface.',
    bgSvg: <TodoBg />,
  },
  {
    to: '/movies',
    icon: Film,
    title: 'Movies',
    description: 'Browse popular, top-rated, and upcoming films.',
    bgSvg: <MoviesBg />,
  },
];

function Homepage() {
  return (
    <div className="homepage min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 pt-24 pb-16">
      {/* Header Block */}
      <div className="w-full max-w-5xl text-left mb-8 px-4">
        <div className="w-full">
          <h1 className="font-playfair text-5xl md:text-7xl font-black tracking-tight text-black m-0 select-none flex flex-wrap items-baseline gap-x-4">
            <span className='tracking-tighter font-semibold'>ReactsJeps</span>
            <span className="font-cascadia text-sm md:text-base text-neutral-600 italic font-normal select-none">
              on JDT-17 Indivara Group
            </span>
          </h1>
        </div>

        {/* Description Text */}
        <p className="font-playfair italic text-black text-xl md:text-2xl max-w-2xl leading-relaxed">
          Meet the sleek new ReactJeps: 3 functions in 1 application, just like your shampoo.....
        </p>
      </div>

      {/* Tech Stack Logo Strip */}
      <div className="w-full max-w-5xl mb-8 px-4 text-left">
        <h4 className="font-cascadia text-xs text-neutral-500 uppercase tracking-widest mb-4">
          Applied technology
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center border border-neutral-200 bg-white p-3 rounded-lg hover:border-black transition-all duration-300 hover:scale-105 group select-none cursor-help relative shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]"
              title={tech.name}
            >
              <div className="text-neutral-700 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mb-2">
                {tech.icon}
              </div>
              <span className="font-cascadia text-[10px] text-neutral-600 uppercase group-hover:text-black transition-colors">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Section Container with thin gray border */}
      <div className="w-full max-w-5xl border border-neutral-200 bg-white/40 p-6 rounded-2xl shadow-[1px_1px_0_0_rgba(0,0,0,0.02)] select-none">
        <h4 className="font-cascadia text-xs text-neutral-500 uppercase tracking-widest mb-6 text-left px-2">
          Navigation Modules
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {navCards.map((card) => (
            <NavLink
              key={card.to}
              to={card.to}
              className="border border-neutral-200 bg-white relative overflow-hidden h-64 flex flex-col p-6 rounded-xl transition-all duration-300 hover:border-black hover:shadow-[3px_3px_0_0_#000] hover:scale-[1.01] group cursor-pointer text-left"
            >
              {/* Top-left name block (Just the name, no icon logo) */}
              <div className="mb-4 z-10">
                <h3 className="font-playfair font-bold text-xl text-black">
                  {card.title}
                </h3>
              </div>

              {/* Background Illustration & Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.18] text-neutral-900 pointer-events-none transition-all duration-500 group-hover:opacity-[0.32] group-hover:scale-105">
                {card.bgSvg}
                {/* Logo icon placed in the background container */}
                <div className="absolute top-6 right-6 opacity-80">
                  <card.icon className="w-12 h-12 stroke-[1]" />
                </div>
              </div>

              {/* Foreground Description */}
              <div className="mt-auto z-10 pr-6">
                <p className="font-cascadia text-sm text-neutral-800 leading-relaxed max-w-[90%]">
                  {card.description}
                </p>
              </div>

              {/* Bottom-right Arrow */}
              <div className="absolute bottom-6 right-6 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 z-10">
                <ArrowRight className="w-5 h-5 stroke-[1.5]" />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
