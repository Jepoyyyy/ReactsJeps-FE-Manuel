import React, { useEffect, useState } from 'react';
import { useToken } from '@/hooks/useToken';
import { getMyProfile } from '@/service/auth/profileApi';
import { X, Mail, Phone, Calendar, MapPin, Loader2, User } from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  maidenName?: string;
  username: string;
  email: string;
  phone: string;
  birthDate: string;
  age: number;
  gender: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user } = useToken();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !user?.accessToken) return;

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMyProfile(user.accessToken);
        setProfileData(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load profile information.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen, user?.accessToken]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_0_#000] z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b-2 border-black bg-white">
          <h2 className="text-3xl font-bold tracking-tight text-black font-playfair">Profile</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-100 transition-all"
            aria-label="Close profile"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-12 h-12 text-black animate-spin mb-4" />
              <p className="text-neutral-600 text-sm font-cascadia">Loading profile...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-6 font-cascadia text-sm">{error}</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-lg font-medium shadow-[3px_3px_0_0_#000] transition-all font-cascadia"
              >
                Close
              </button>
            </div>
          ) : profileData ? (
            <div className="space-y-6">
              {/* Profile Header Card */}
              <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-black shadow-[3px_3px_0_0_#000] shrink-0">
                    <img
                      src={profileData.image}
                      alt={profileData.username || 'Profile picture'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-4xl font-bold font-playfair text-black mb-1">
                      {profileData.firstName} {profileData.maidenName ? `${profileData.maidenName} ` : ''}{profileData.lastName}
                    </h3>
                    <p className="text-neutral-600 font-cascadia text-lg mb-4">@{profileData.username}</p>
                  </div>
                </div>
              </div>

              {/* Personal & Address Information Card */}
              <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                {/* Ditambahkan mb-4 agar judul memiliki ruang napas */}
                <h4 className="text-lg font-bold font-playfair text-black mb-4 pb-3 border-b border-black">
                  Personal Information
                </h4>
                
                <div className="divide-y divide-neutral-200">
                  {/* Row 1: Age */}
                  <div className="flex items-start gap-4 py-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Age</p>
                      <p className="text-sm font-cascadia text-black">{profileData.age} years old</p>
                    </div>
                  </div>
                    
                  {/* Row 2: Gender */}
                  <div className="flex items-start gap-4 py-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Gender</p>
                      <p className="text-sm font-cascadia text-black capitalize">{profileData.gender}</p>
                    </div>
                  </div>

                  {/* Row 3: Email */}
                  <div className="flex items-start gap-4 py-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm font-cascadia text-black break-all">{profileData.email}</p>
                    </div>
                  </div>

                  {/* Row 4: Phone */}
                  <div className="flex items-start gap-4 py-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-sm font-cascadia text-black">{profileData.phone}</p>
                    </div>
                  </div>

                  {/* Row 5: Birth Date */}
                  <div className="flex items-start gap-4 py-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Birth Date</p>
                      <p className="text-sm font-cascadia text-black">{profileData.birthDate}</p>
                    </div>
                  </div>

                  {/* Row 6: Address (Menggunakan pt-4 agar tidak membuat garis sisa di bawah card) */}
                  <div className="flex items-start gap-4 pt-4 px-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors duration-150">
                    <div className="flex-1">
                      <p className="text-xs font-cascadia text-neutral-500 uppercase tracking-wider mb-1">Address</p>
                      <p className="text-sm font-cascadia text-black leading-relaxed">
                        {profileData.address?.address}, {profileData.address?.city}, {profileData.address?.state}, {profileData.address?.stateCode}, {profileData.address?.postalCode}, {profileData.address?.country}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-neutral-500 font-cascadia py-12">No profile data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
