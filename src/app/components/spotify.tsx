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
  
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
  const [topTracks, setTopTracks] = useState<any>(null);
  const [topArtists, setTopArtists] = useState<any>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<any>(null);
  const [queue, setQueue] = useState<any>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [showRecentlyPlayed, setShowRecentlyPlayed] = useState(false);

  const getCurrentlyPlayingItem = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLoading(false);
    setCurrentlyPlayingItem(response);
    return response;
  };

  const getRecentlyPlayed = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRecentlyPlayed(response);
    return response;
  };

  const getQueue = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/player/queue?limit=5", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('queue', response);
    setQueue(response);
    return response;
  };

  const getTopTracks = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/top/tracks?limit=5", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('top tracks', response);
    setTopTracks(response);
    return response;
  };

  const getTopArtists = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/top/artists?limit=5", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('top artists', response);
    setTopArtists(response);
    return response;
  };

  // const getPlaylists = async () => {
  //   const token = await refreshToken();
  //   const response = await apiClient.get("https://api.spotify.com/v1/me/playlists", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   console.log('playlists', response);
  //   setPlaylists(response);
  //   return response;
  // };

  useEffect(() => {
    getCurrentlyPlayingItem();
    getRecentlyPlayed();
    getQueue();
    // getTopTracks();
    // getTopArtists();
    // getPlaylists();
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
                <div className='z-10 mb-4 flex justify-center'>
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
              <div className=''>
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
                            Now playing
                          </span>
                        </div>
                      ) : (
                        <div className='flex items-center space-x-2'>
                          <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                          <span className='text-gray-400 text-xs font-medium'>
                            Paused
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
                    <p className='text-gray-300 text-xs sm:text-sm truncate mb-2'>
                      {currentlyPlayingItem.item.artists?.map((artist: any) => artist.name).join(', ')}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Shuffle and Repeat Controls */}
            <div className={`flex-shrink-0 flex items-center transition-all duration-500 ease-in-out overflow-hidden ${
              isCollapsed ? 'max-w-0 opacity-0' : 'max-w-full opacity-100 space-x-2 sm:space-x-3 md:space-x-4'
            }`}>
              {/* Shuffle */}
              <span className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none'>
                {currentlyPlayingItem?.shuffle_state && currentlyPlayingItem?.smart_shuffle && (
                  <div className='relative' title='Smart Shuffle'>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                    </svg>
                    <div className='absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full'></div>
                  </div>
                )}
                {currentlyPlayingItem?.shuffle_state && !currentlyPlayingItem?.smart_shuffle && (
                  <svg className='w-5 h-5 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                  </svg>
                )}
                {!currentlyPlayingItem?.shuffle_state && (
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500 hover:text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
                  </svg>
                )}
              </span>

              {/* Repeat */}
              <span className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none'>
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
              </span>
            </div>

          </div>

           <div className={`flex items-center border-t border-gray-700/50 pt-2 ${
             isCollapsed ? 'justify-center' : 'justify-between'
           }`}>

             {!isCollapsed && 
               <div className='flex items-center space-x-2'>
                 {currentlyPlayingItem?.device?.name && (
                   <>
                     <svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                       <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/>
                     </svg>
                     <p className='text-green-400 text-xs sm:text-sm truncate'>
                       {currentlyPlayingItem?.device?.name}
                     </p>
                   </>
                 )}
               </div>
             }

             <div className='flex items-center space-x-2'>
               {/* Queue Toggle */}
               {!isCollapsed && <button 
                 onClick={() => {
                   setShowQueue(!showQueue);
                   setShowRecentlyPlayed(false);
                 }}
                 className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none'
                 title={showQueue ? 'Hide Queue' : 'Show Queue'}
               >
                 <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${showQueue ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                 </svg>
               </button>}

               {/* Recently Played Toggle */}
               {!isCollapsed && <button 
                 onClick={() => {
                   setShowRecentlyPlayed(!showRecentlyPlayed);
                   setShowQueue(false);
                 }}
                 className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none'
                 title={showRecentlyPlayed ? 'Hide Recently Played' : 'Show Recently Played'}
               >
                 <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${showRecentlyPlayed ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                 </svg>
               </button>}

               {/* Collapse Toggle */}
               <button 
                 onClick={() => {
                   setIsCollapsed(!isCollapsed);
                   if (!isCollapsed) {
                     setShowQueue(false);
                     setShowRecentlyPlayed(false);
                   }
                 }}
                 className='p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none'
                 title={isCollapsed ? 'Expand' : 'Collapse'}
               >
                 <svg 
                   className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white transition-all duration-300 ${
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
        
        {/* Refresh Button - Top Right */}
        {!isCollapsed && 
          <button 
            onClick={() => {
              getCurrentlyPlayingItem();
              getQueue();
              getRecentlyPlayed();
            }}
            className='absolute top-2 right-2 p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none bg-black/50 backdrop-blur-sm'
            title="Refresh"
          >
            <svg className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-green-400 transition-colors duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
            </svg>
          </button>
        }


        {(showQueue || showRecentlyPlayed) && 
          <div className='bg-black/95 backdrop-blur-xl border border-green-500/30 rounded-bottom-xl shadow-2xl overflow-hidden z-10 max-h-80'>
            {/* Dynamic Header */}
            <div className='px-4 py-3 border-b border-gray-700/50 bg-gradient-to-r from-green-500/10 to-transparent'>
              <div className='flex items-center justify-between'>
                <h3 className='text-white font-semibold text-sm flex items-center space-x-2'>
                  {showQueue ? (
                    <>
                      <svg className='w-4 h-4 text-green-400' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                      </svg>
                      <span>Up Next</span>
                    </>
                  ) : (
                    <>
                      <svg className='w-4 h-4 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span>Recently Played</span>
                    </>
                  )}
                </h3>
                <span className='text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full'>
                  {showQueue ? (queue?.queue?.length || 0) : (recentlyPlayed?.items?.length || 0)} tracks
                </span>
              </div>
            </div>
            
            {/* Dynamic Items */}
            <div className='overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
              {showQueue ? (
                // Queue Items
                queue?.queue?.length > 0 ? (
                  <div className='divide-y divide-gray-700/30'>
                    {queue.queue.map((item: any, index: number) => (
                      <div 
                        key={index}
                        className='group px-4 py-3 hover:bg-white/5 transition-all duration-200 cursor-pointer'
                      >
                        <div className='flex items-center space-x-3'>
                          {/* Track Number */}
                          <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center'>
                            <span className='text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-200 font-medium'>
                              {index + 1}
                            </span>
                          </div>
                          
                          {/* Album Artwork */}
                          <div className='flex-shrink-0 relative'>
                            <img 
                              src={item.album.images[0]?.url} 
                              alt={item.name} 
                              className='w-10 h-10 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform duration-200' 
                            />
                            <div className='absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
                          </div>
                          
                          {/* Track Info */}
                          <div className='flex-1 min-w-0'>
                            <h4 className='text-white text-sm font-medium truncate group-hover:text-green-400 transition-colors duration-200'>
                              {item.name}
                            </h4>
                            <p className='text-gray-400 text-xs truncate mt-0.5'>
                              {item.artists.map((artist: any) => artist.name).join(', ')}
                            </p>
                          </div>
                          
                          {/* Duration */}
                          <div className='flex-shrink-0'>
                            <span className='text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200'>
                              {Math.floor(item.duration_ms / 60000)}:{(item.duration_ms % 60000 / 1000).toFixed(0).padStart(2, '0')}
                            </span>
                          </div>
                          
                          {/* Play Button (appears on hover) */}
                          <div className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                            <button 
                              onClick={() => {
                                if (item.external_urls?.spotify) {
                                  window.open(item.external_urls.spotify, '_blank', 'noopener,noreferrer');
                                }
                              }}
                              className='p-1.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200 shadow-lg'
                              title="Open in Spotify"
                            >
                              <svg className='w-3 h-3 text-white ml-0.5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M8 5v14l11-7z' />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='px-4 py-8 text-center'>
                    <div className='w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700/50 flex items-center justify-center'>
                      <svg className='w-6 h-6 text-gray-500' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                      </svg>
                    </div>
                    <p className='text-gray-400 text-sm'>No tracks in queue</p>
                    <p className='text-gray-500 text-xs mt-1'>When the_8bitCyborg starts playing music, you can see his queue here</p>
                  </div>
                )
              ) : (
                // Recently Played Items
                recentlyPlayed?.items?.length > 0 ? (
                  <div className='divide-y divide-gray-700/30'>
                    {recentlyPlayed.items.map((item: any, index: number) => (
                      <div 
                        key={index}
                        className='group px-4 py-3 hover:bg-white/5 transition-all duration-200 cursor-pointer'
                      >
                        <div className='flex items-center space-x-3'>
                          {/* Track Number */}
                          <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center'>
                            <span className='text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-200 font-medium'>
                              {index + 1}
                            </span>
                          </div>
                          
                          {/* Album Artwork */}
                          <div className='flex-shrink-0 relative'>
                            <img 
                              src={item.track.album.images[0]?.url} 
                              alt={item.track.name} 
                              className='w-10 h-10 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform duration-200' 
                            />
                            <div className='absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
                          </div>
                          
                          {/* Track Info */}
                          <div className='flex-1 min-w-0'>
                            <h4 className='text-white text-sm font-medium truncate group-hover:text-green-400 transition-colors duration-200'>
                              {item.track.name}
                            </h4>
                            <p className='text-gray-400 text-xs truncate mt-0.5'>
                              {item.track.artists.map((artist: any) => artist.name).join(', ')}
                            </p>
                          </div>
                          
                          {/* Played At Time */}
                          <div className='flex-shrink-0'>
                            <span className='text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200'>
                              {new Date(item.played_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          
                          {/* Play Button (appears on hover) */}
                          <div className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                            <button 
                              onClick={() => {
                                if (item.track.external_urls?.spotify) {
                                  window.open(item.track.external_urls.spotify, '_blank', 'noopener,noreferrer');
                                }
                              }}
                              className='p-1.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200 shadow-lg'
                              title="Open in Spotify"
                            >
                              <svg className='w-3 h-3 text-white ml-0.5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M8 5v14l11-7z' />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='px-4 py-8 text-center'>
                    <div className='w-12 h-12 mx-auto mb-3 rounded-full bg-gray-700/50 flex items-center justify-center'>
                      <svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <p className='text-gray-400 text-sm'>No recently played tracks</p>
                    <p className='text-gray-500 text-xs mt-1'>Start playing music to see your recently played tracks here</p>
                  </div>
                )
              )}
            </div>
          </div>
        }
      </div>

    </div>
  );
};

export default Spotify;