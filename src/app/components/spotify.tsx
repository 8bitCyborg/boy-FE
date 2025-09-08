'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/app/api/api';

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

  const getCurrentlyPlayingItem = async () => {
    const token = await refreshToken();
    const response = await apiClient.get("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLoading(false);
    setCurrentlyPlayingItem(response);
    return response;
  };
  console.log('currentlyPlayingItem', currentlyPlayingItem);

  useEffect(() => {
    getCurrentlyPlayingItem();
  }, []);
  
  return (
    <div className='w-[30vw] h-[10vh] fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-gray-700 shadow-2xl'>
      <div className='flex items-center h-full px-4 space-x-4'>
        {/* Album Artwork */}
        <div className='flex-shrink-0'>
          {currentlyPlayingItem?.item?.album?.images?.[0]?.url ? (
            <img 
              src={currentlyPlayingItem.item.album.images[0].url} 
              alt="Album cover"
              className='w-12 h-12 rounded-lg shadow-lg object-cover'
            />
          ) : (
            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
              </svg>
            </div>
          )}
        </div>

        {/* Track Information */}
        <div className='flex-1 min-w-0'>
          {loading && (
            <div className='space-y-2'>
              <div className='h-3 bg-gray-700 rounded animate-pulse'></div>
              <div className='h-2 bg-gray-600 rounded animate-pulse w-2/3'></div>
            </div>
          )}
          {currentlyPlayingItem?.item && (
            <div className='space-y-1'>
              {currentlyPlayingItem.is_playing ? (
                  <div className='flex items-center space-x-1'>
                    <div className='w-1 h-1 bg-green-400 rounded-full animate-pulse'></div>
                    <div className='w-1 h-1 bg-green-400 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
                    <div className='w-1 h-1 bg-green-400 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
                    <span className='text-green-400 text-xs font-medium ml-1'>Now Playing</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-1'>
                    <div className='w-2 h-2 bg-gray-400 rounded-sm flex items-center justify-center'>
                      <svg className='w-1 h-1 text-gray-600' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M6 4h4v16H6V4zm8 0h4v16h-4V4z'/>
                      </svg>
                    </div>
                    <span className='text-gray-400 text-xs font-medium ml-1'>Paused</span>
                  </div>
                )}
              <div className='flex items-center space-x-2'>
                
                <h3 className='text-white font-medium text-sm truncate'>
                  {currentlyPlayingItem.item.name}
                </h3>
              </div>
              <p className='text-gray-300 text-xs truncate'>
                {currentlyPlayingItem.item.artists?.map((artist: any) => artist.name).join(', ')}
              </p>
            </div>
          )}
        </div>

        <div className='flex-shrink-0'>
          {currentlyPlayingItem?.shuffle_state && currentlyPlayingItem?.smart_shuffle && (
            <div className='w-6 h-6 flex items-center justify-center text-green-400 relative' title='Smart Shuffle'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
              </svg>
              <div className='absolute top-0 right-0 w-1.5 h-1.5 bg-green-400 rounded-full'></div>
            </div>
          )}
          {currentlyPlayingItem?.shuffle_state && !currentlyPlayingItem?.smart_shuffle && (
            <div className='w-6 h-6 flex items-center justify-center text-green-400' title='Shuffle'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
              </svg>
            </div>
          )}
          {!currentlyPlayingItem?.shuffle_state && (
            <div className='w-6 h-6 flex items-center justify-center text-gray-500' title='Shuffle'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z'/>
              </svg>
            </div>
          )}
        </div>

        <div className='flex-shrink-0'>
          {currentlyPlayingItem?.repeat_state === 'off' && (
            <div className='w-6 h-6 flex items-center justify-center text-gray-500'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
              </svg>
            </div>
          )}
          {currentlyPlayingItem?.repeat_state === 'track' && (
            <div className='w-7 h-7 flex items-center justify-center text-green-400 relative' title='Repeat Track'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
              </svg>
              <div className='absolute inset-1 flex items-center justify-center'>
                <span className='text-green-400 text-[10px] font-bold'>1</span>
              </div>
            </div>
          )}
          {currentlyPlayingItem?.repeat_state === 'context' && (
            <div className='w-6 h-6 flex items-center justify-center text-green-400' title='Repeat Playlist'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'/>
              </svg>
            </div>
          )}
        </div>
        
      </div>
      
      {/* Device Indicator */}
      {currentlyPlayingItem?.device && (
        <div className='absolute bottom-1 left-4 flex items-center space-x-1 text-green-400'>
          <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M3 9v6h4l5 5V4L7 9H3zm7 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm6.5-2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/>
          </svg>
          <span className='text-xs truncate max-w-[200px]' title={currentlyPlayingItem.device.name}>
            {currentlyPlayingItem.device.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default Spotify;