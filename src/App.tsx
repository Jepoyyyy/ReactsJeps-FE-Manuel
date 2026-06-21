import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { ChevronDown, User, LogOut } from 'lucide-react';
import { useToken } from '@/hooks/useToken';
import { ProfileModal } from '@/components/ProfileModal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { user, logout } = useToken();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app flex flex-col min-h-screen bg-transparent">
      {/* Minimal Global Navigation Bar */}
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-0 h-16 transition-all duration-500 ${
          scrolled ? 'bg-black' : 'bg-white'
        }`}
      >
        {/* Left: Logo (Back to Home) */}
        <NavLink to="/" className="flex items-center shrink-0 group select-none">
  {location.pathname === '/' ? (
    <span className={`font-playfair text-xl md:text-2xl font-black tracking-tight hover:opacity-80 transition-colors duration-500 ${
      scrolled ? 'text-white' : 'text-black'
    }`}>
      ReactsJeps
    </span>
  ) : (
    <div className={`flex items-center gap-2 hover:text-neutral-300 transition-colors duration-500 font-playfair font-black text-xl md:text-2xl ${
      scrolled ? 'text-white' : 'text-black'
    }`}>
      <span>←</span>
      <span className="tracking-tight">ReactsJeps</span>
    </div>
  )}
</NavLink>

        {/* Right: Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-1.5 hover:bg-white/10 rounded px-2 py-1.5 transition-colors"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center overflow-hidden">
              <img
                src={user?.image || 'https://dummyjson.com/icon/emilys/150'}
                alt={user?.username || 'User profile picture'}
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform duration-300 ${
                profileOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
              <div className="absolute right-0 top-full mt-3 w-64 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] animate-scale-in z-50 overflow-hidden">
                {/* User Info Header */}
                <div className="px-4 py-4 bg-neutral-50 border-b-2 border-black">
                  <p className="text-black text-base font-playfair font-bold truncate">{user?.username || 'User'}</p>
                  <p className="text-neutral-600 text-xs font-cascadia truncate mt-0.5">{user?.email || ''}</p>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      setShowProfileModal(true);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-cascadia text-neutral-700 hover:text-black hover:bg-neutral-50 transition-all group"
                  >
                    <div className="p-1.5 bg-neutral-100 border border-neutral-200 rounded-lg group-hover:bg-white group-hover:border-black transition-all">
                      <User className="w-4 h-4" />
                    </div>
                    <span>View Profile</span>
                  </button>

                  <div className="my-2 mx-3 border-t border-neutral-200" />

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-cascadia text-neutral-700 hover:text-black hover:bg-neutral-50 transition-all group"
                  >
                    <div className="p-1.5 bg-neutral-100 border border-neutral-200 rounded-lg group-hover:bg-white group-hover:border-black transition-all">
                      <LogOut className="w-4 h-4" />
                    </div>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content flex-grow pt-16">
        <Outlet />
      </main>

      {/* Profile Modal */}
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </div>
  );
}

export default App;
