import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div id="body">
    <nav>
    <a href="javascript:go_back()" id="n_back" className="border">
      <svg width="0.7em" height="0.6em" viewBox="0 0 148 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 88L130 18" stroke="url(#paint0_linear_3_19)" strokeWidth="35" strokeLinecap="round"/>
        <path d="M130 160L18 88" stroke="url(#paint1_linear_3_19)" strokeWidth="35" strokeLinecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_3_19" x1="103.584" y1="35.6507" x2="188.055" y2="-38.6648" gradientUnits="userSpaceOnUse">
        <stop stopColor="#31976C"/>
        <stop offset="0.921875" stopColor="#5BDEBD" stopOpacity="0.907283"/>
        <stop offset="0.9999" stopColor="#02FFD1" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="paint1_linear_3_19" x1="139.164" y1="167.927" x2="65.7322" y2="142.067" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3CC58D"/>
        <stop offset="0.9999" stopColor="#31986D"/>
        </linearGradient>
        </defs>
      </svg>
    </a>
    <a href="javascript:go_forward()" id="n_forward" className="border">
        <svg width="0.7em" height="0.6em" viewBox="0 0 148 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130 88L18 18" stroke="url(#paint0_linear_3_19)" strokeWidth="35" strokeLinecap="round"/>
            <path d="M18 160L130 88" stroke="url(#paint1_linear_3_19)" strokeWidth="35" strokeLinecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_3_19" x1="44.4157" y1="35.6507" x2="-40.0553" y2="-38.6648" gradientUnits="userSpaceOnUse">
            <stop stopColor="#31976C"/>
            <stop offset="0.921875" stopColor="#5BDEBD" stopOpacity="0.907283"/>
            <stop offset="0.9999" stopColor="#02FFD1" stopOpacity="0.9"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3_19" x1="8.83629" y1="167.927" x2="82.2678" y2="142.067" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3CC58D"/>
            <stop offset="0.9999" stopColor="#31986D"/>
            </linearGradient>
            </defs>
        </svg>
    </a>
    <a href="javascript:reload()" id="n_reload" className="border">
        <svg width="0.8em" height="0.8em" viewBox="0 0 141 154" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M128 63L113 13" stroke="url(#paint0_linear_2_11)" strokeWidth="25" strokeLinecap="round"/>
          <path d="M84 69L125 63" stroke="url(#paint1_linear_2_11)" strokeWidth="30" strokeLinecap="round"/>
          <path d="M121.425 65.2613C128.573 62.7747 132.509 54.9088 128.793 48.3165C123.141 38.2884 115.122 29.7721 105.382 23.5965C91.8178 14.9964 75.7548 11.4677 59.9298 13.6118C44.1048 15.7558 29.497 23.4399 18.5953 35.3548C7.69369 47.2697 1.17273 62.6782 0.143549 78.9548C-0.885634 95.2314 3.64064 111.369 12.9511 124.618C22.2617 137.867 35.7803 147.408 51.2038 151.615C66.6272 155.822 83.0011 154.434 97.5355 147.689C107.971 142.845 116.995 135.455 123.863 126.255C128.386 120.196 125.497 111.9 118.741 108.504C111.821 105.025 103.513 108.139 98.0541 113.634C94.6143 117.096 90.5828 119.943 86.1213 122.013C77.4006 126.06 67.5763 126.893 58.3223 124.369C49.0682 121.845 40.957 116.12 35.3707 108.171C29.7844 100.221 27.0686 90.5388 27.6861 80.7729C28.3036 71.0069 32.2162 61.7618 38.7572 54.6129C45.2982 47.464 54.0629 42.8535 63.5579 41.5671C73.0529 40.2806 82.6907 42.3978 90.8292 47.5579C95.0258 50.2187 98.6899 53.6038 101.678 57.5289C106.348 63.6628 114.144 67.7944 121.425 65.2613Z" fill="url(#paint2_linear_2_11)" fillOpacity="0.9"/>
          <defs>
          <linearGradient id="paint0_linear_2_11" x1="115.68" y1="25.2997" x2="105.578" y2="-18.5208" gradientUnits="userSpaceOnUse">
          <stop stopColor="#31976C"/>
          <stop offset="0.921875" stopColor="#5BDEBD" stopOpacity="0.907283"/>
          <stop offset="0.9999" stopColor="#02FFD1" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2_11" x1="80.5544" y1="71.235" x2="105.323" y2="69.4567" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3CC58D"/>
          <stop offset="0.9999" stopColor="#31986D"/>
          </linearGradient>
          <linearGradient id="paint2_linear_2_11" x1="-16" y1="54" x2="126.5" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1DCAAB" stopOpacity="0.9"/>
          <stop offset="0.749066" stopColor="#31976C"/>
          </linearGradient>
          </defs>
        </svg>
      </a>
      <span id="address_box">
          <input type="text" id="address_bar" placeholder="検索するURLを入力"/>
          <a href="javascript:addBookmark()" className="border" id="bookmark">★</a>
          <a href="javascript:search()" className="border">🔍</a>
      </span>
      <a href="javascript:toggle_setting()" className="border">⚙</a>
      <a href="javascript:more_button()" className="border"><i className="fa-solid fa-ellipsis-vertical"></i></a>
      <nav id="blank"></nav>
    </nav>
    <Hello/>
    <Info/>
  </div>
);
