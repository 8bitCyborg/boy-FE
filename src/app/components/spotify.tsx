'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/app/api/api';

// Custom CSS for reverse bounce animation and pulsing indicator
const customStyles = `
  @keyframes bounce-reverse {
    0%, 100% {
      transform: translateY(4px);
    }
    50% {
      transform: translateY(0);
    }
  }
  
  @keyframes pulse-indicator {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

// Inject the styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

const apiClient = new ApiClient();

const body = new URLSearchParams({
  grant_type: "refresh_token",
  refresh_token: "AQCU6rDj76h6u8Fxd7BYh-Z9SMaMEAJoSd1CYAfAK_U12QB7tUNQNqcDCPsEcb4wOkL8-5ODbbfqshdt3df5VwXHlTxjlB4kU9FNkbLCtlqlxtyA76JZHV-206poMTE9bew",
  client_id: "f41dc4cb69b04f25a7965ff5f205b9c3",
  client_secret: "3ad6b08d9ca3485d8f48685ad1ecfbdd",
});

async function refreshAccessToken() {
  try {
    const response = await apiClient.post(
      "https://accounts.spotify.com/api/token",
      body.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response;
  } catch (err: any) {
    throw err;
  }
}

async function refreshToken() {
  const token = localStorage.getItem("spotify_access_token");
  const expiry = parseInt(localStorage.getItem("spotify_token_expiry") || "0", 10) || 0;
  const now = Date.now();

  if (token && now < expiry) return token;

  const res = await refreshAccessToken(); 
  const data = res;

  localStorage.setItem("spotify_access_token", data?.access_token);
  localStorage.setItem("spotify_token_expiry", (now + data.expires_in * 1000).toString());

  return data?.access_token;
};

const Spotify = () => {
  const [loading, setLoading] = useState(true);
  const [currentlyPlayingItem, setCurrentlyPlayingItem] = useState<any>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getCurrentlyPlayingItem = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLoading(false);
    setCurrentlyPlayingItem(response);
    console.log('now playing', response);
    return response;
  };

  useEffect(() => {
    getCurrentlyPlayingItem();
  }, []);
  
  return (
    <div className={`fixed top-4 z-50 transition-all duration-500 ease-in-out ${
      isCollapsed 
        ? 'left-4 max-w-16 sm:max-w-20' 
        : 'left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
    } lg:left-4 lg:right-auto lg:transform-none`}>
      <div className='bg-black/80 backdrop-blur-xl rounded-2xl border-2 border-green-500/60 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-black/90 hover:scale-[1.02] hover:border-green-400/80 relative'>
        <div className={`transition-all duration-500 ease-in-out ${
          isCollapsed ? 'p-2 sm:p-3' : 'p-3 sm:p-4 md:p-5 lg:p-6'
        }`}>
          <div className={`flex items-center transition-all duration-500 ease-in-out ${
            isCollapsed 
              ? 'justify-center space-x-0' 
              : 'space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6'
          }`}>
            {/* Album Artwork */}
            <div className='flex-shrink-0 relative group'>
              {/* Playing/Paused indicator - above album art when collapsed */}
              {isCollapsed && currentlyPlayingItem?.item && (
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 z-10'>
                  {currentlyPlayingItem.is_playing ? (
                    <div className='flex space-x-0.5'>
                      <div className='w-0.5 h-2 bg-green-400 rounded-full' style={{
                        animation: 'bounce-reverse 1.5s ease-in-out infinite',
                        animationDelay: '0s'
                      }}></div>
                      <div className='w-0.5 h-3 bg-green-400 rounded-full' style={{
                        animation: 'bounce-reverse 1.5s ease-in-out infinite',
                        animationDelay: '0.3s'
                      }}></div>
                      <div className='w-0.5 h-1.5 bg-green-400 rounded-full' style={{
                        animation: 'bounce-reverse 1.5s ease-in-out infinite',
                        animationDelay: '0.6s'
                      }}></div>
                    </div>
                  ) : (
                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                  )}
                </div>
              )}
              
              {currentlyPlayingItem?.item?.album?.images?.[0]?.url ? (
                <div className='relative'>
                  <img 
                    src={currentlyPlayingItem.item.album.images[0].url} 
                    alt="Album cover"
                    className={`rounded-xl shadow-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${
                      isCollapsed 
                        ? 'w-12 h-12 sm:w-14 sm:h-14' 
                        : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18'
                    }`}
                  />
                  {currentlyPlayingItem.is_playing && !isCollapsed && (
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent'></div>
                  )}
                </div>
              ) : (
                <div className={`rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105 ${
                  isCollapsed 
                    ? 'w-12 h-12 sm:w-14 sm:h-14' 
                    : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18'
                }`}>
                  <svg className={`text-white transition-all duration-500 ease-in-out ${
                    isCollapsed 
                      ? 'w-6 h-6 sm:w-7 sm:h-7' 
                      : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9'
                  }`} fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                  </svg>
                </div>
              )}
              
              {/* Playing indicator */}
              {currentlyPlayingItem?.is_playing && !isCollapsed && (
                <div className='absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center' style={{
                  animation: 'pulse-indicator 1.5s ease-in-out infinite'
                }}>
                  <div className='w-1 h-1 bg-white rounded-full'></div>
                </div>
              )}
            </div>

            {/* Track Information */}
            <div className={`flex-1 min-w-0 transition-all duration-500 ease-in-out overflow-hidden ${
              isCollapsed ? 'max-w-0 opacity-0' : 'max-w-full opacity-100'
            }`}>
              <div className='space-y-2'>
                {loading && (
                  <div className='space-y-3'>
                    <div className='h-4 bg-gray-700/50 rounded-lg animate-pulse'></div>
                    <div className='h-3 bg-gray-600/50 rounded-lg animate-pulse w-3/4'></div>
                    <div className='h-2 bg-gray-500/50 rounded-lg animate-pulse w-1/2'></div>
                  </div>
                )}
                
                {currentlyPlayingItem?.item && (
                  <>
                    {/* Status indicator */}
                    <div className='flex items-center space-x-2'>
                      {currentlyPlayingItem.is_playing ? (
                        <div className='flex items-center space-x-2'>
                          <div className='flex space-x-1'>
                            <div className='w-1 h-2.5 bg-green-400 rounded-full' style={{
                              animation: 'bounce-reverse 1s ease-out-in infinite',
                              animationDelay: '0.9s'
                            }}></div>
                            <div className='w-1 h-3 bg-green-400 rounded-full' style={{
                              animation: 'bounce-reverse 1s ease-in-out infinite',
                              animationDelay: '0.2s'
                            }}></div>
                            <div className='w-1 h-2.5 bg-green-400 rounded-full' style={{
                              animation: 'bounce-reverse 1s ease-in-out infinite',
                              animationDelay: '0.4s'
                            }}></div>
                          </div>
                          <span className='text-green-400 text-xs font-medium'>
                            Now playing{currentlyPlayingItem.device?.name ? ` on ${currentlyPlayingItem.device.name}` : ''}
                          </span>
                        </div>
                      ) : (
                        <div className='flex items-center space-x-2'>
                          <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                          <span className='text-gray-400 text-xs font-medium'>
                            Paused{currentlyPlayingItem.device?.name ? ` on ${currentlyPlayingItem.device.name}` : ''}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Track title */}
                    <div className='flex items-center space-x-2'>
                      {currentlyPlayingItem.context?.external_urls?.spotify ? (
                        <a
                          href={currentlyPlayingItem.context.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center space-x-2 group'
                          title="Open in Spotify"
                        >
                          <h3 className='text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg truncate leading-tight group-hover:text-green-400 transition-colors duration-200'>
                            {currentlyPlayingItem.item.name}
                          </h3>
                          <svg 
                            className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-200 flex-shrink-0' 
                            fill='none' 
                            stroke='currentColor' 
                            viewBox='0 0 24 24'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                          </svg>
                        </a>
                      ) : (
                        <h3 className='text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg truncate leading-tight'>
                          {currentlyPlayingItem.item.name}
                        </h3>
                      )}
                    </div>
                    
                    {/* Artist */}
                    <p className='text-gray-300 text-xs sm:text-sm truncate'>
                      {currentlyPlayingItem.item.artists?.map((artist: any) => artist.name).join(', ')}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className={`flex-shrink-0 flex items-center transition-all duration-500 ease-in-out overflow-hidden ${
              isCollapsed ? 'max-w-0 opacity-0' : 'max-w-full opacity-100 space-x-2 sm:space-x-3 md:space-x-4'
            }`}>
              {/* Shuffle */}
              <button className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-400/50'>
                {currentlyPlayingItem?.shuffle_state && currentlyPlayingItem?.smart_shuffle && (
                  <div className='relative' title='Smart Shuffle'>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                    </svg>
                    <div className='absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full'></div>
                  </div>
                )}
                {currentlyPlayingItem?.shuffle_state && (
                  <svg className='w-5 h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                  </svg>
                )}
                {!currentlyPlayingItem?.shuffle_state && (
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500 hover:text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                  </svg>
                )}
              </button>

              {/* Repeat */}
              <button className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-400/50'>
                {currentlyPlayingItem?.repeat_state === 'track' && (
                  <div className='relative' title='Repeat Track'>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-green-400 text-[8px] font-bold'>1</span>
                    </div>
                  </div>
                )}
                {currentlyPlayingItem?.repeat_state === 'context' && (
                  <svg className='w-5 h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
                  </svg>
                )}
                {!currentlyPlayingItem?.repeat_state && (
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500 hover:text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
        
        {/* Progress bar */}
        {currentlyPlayingItem?.is_playing && !isCollapsed && (
          <div className='h-1 bg-gray-700/50 relative overflow-hidden'>
            <div 
              className='h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-1000 ease-out'
              style={{
                width: currentlyPlayingItem.progress_ms && currentlyPlayingItem.item?.duration_ms 
                  ? `${(currentlyPlayingItem.progress_ms / currentlyPlayingItem.item.duration_ms) * 100}%`
                  : '0%'
              }}
            />
          </div>
        )}
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-400/50 bg-black/50 backdrop-blur-sm ${
            isCollapsed ? 'bottom-2 left-1/2 transform -translate-x-1/2' : 'bottom-2 right-2'
          }`}
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <svg 
            className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-white transition-all duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`} 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Spotify;