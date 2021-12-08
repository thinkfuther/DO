<template>
  <section class="ant-layout ant-layout-has-sider">
    <header
      class="ant-layout-header"
      style="background: white; height: 70px; position: fixed; z-index: 100; width: 100%; padding: 0px 30px;"
    >
      <nav class="flex items-center noselect">
        <div class="pr-2 pt-2 is-size-4" style="cursor: pointer;">
          <a
            href="https://www.pinksale.finance/#/?chain=BSC"
            style="color: rgba(0,0,0,.85) !important;"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
        <a class="logo mr-3" href="https://www.pinksale.finance/#/?chain=BSC">
          <div class="logo-icon">
            <img src="../img/pinkswap.png" alt="pinksale" />
          </div>
          <div class="logo-text pt-1 hide-on-mobile">PinkSale</div>
        </a>
        <div class="flex-1"></div>
        <div class="ant-dropdown-trigger connectButton on-mobile">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            t="1551322312294"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <path
              d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
            ></path>
            <path
              d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
            ></path></svg
          ><span class="ml-2 hide-on-mobile">Create</span>
        </div>
        <div class="network on-mobile" style="cursor: pointer;">
          <img src="../img/ic-bsc.svg" width="18" alt="" /><span
            class="ml-2 hide-on-mobile"
            >BSC MAINNET</span
          >
        </div>
        <!-- info -->
        <div v-if="account" class="ant-dropdown-trigger connectButton">
          <span>{{ getAccount }}</span>
        </div>
        <div v-else @click="connectWallet" class="connectButton">Connect</div>
      </nav>
    </header>
    <aside
      class="ant-layout-sider ant-layout-sider-dark ant-layout-sider-collapsed ant-layout-sider-below ant-layout-sider-zero-width"
      style="background: white; overflow: auto; height: 100vh; position: fixed; top: 70px; left: 0px; z-index: 10; flex: 0 0 0px; max-width: 0px; min-width: 0px; width: 0px;"
    >
      <div class="ant-layout-sider-children">
        <ul
          class="ant-menu ant-menu-root ant-menu-vertical ant-menu-light ant-menu-inline-collapsed"
          role="menu"
          tabindex="0"
          data-menu-list="true"
        >
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-home"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
              ></path></svg
            ><span class="ant-menu-title-content"
              ><a href="#/?chain=BSC">Home</a></span
            >
          </li>
          <li
            class="ant-menu-submenu ant-menu-submenu-vertical ant-menu-submenu-selected"
            role="none"
          >
            <div
              role="menuitem"
              class="ant-menu-submenu-title"
              tabindex="-1"
              aria-expanded="false"
              aria-haspopup="true"
              data-menu-id="rc-menu-uuid-64045-1-launchpads-menu"
              aria-controls="rc-menu-uuid-64045-1-launchpads-menu-popup"
              style=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ant-menu-item-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  d="M7,9 L7,14 C7,14 4,16 4,19 L4,20 L8,20 L10,23 L14,23 L16,20 L20,20 L20,19 C20,16 17,14 17,14 L17,9 C17,5 14,1 12,1 C10,1 7,5 7,9 Z M8,20 L16,20 M12,9 C12.5522847,9 13,8.55228475 13,8 C13,7.44771525 12.5522847,7 12,7 C11.4477153,7 11,7.44771525 11,8 C11,8.55228475 11.4477153,9 12,9 Z"
                ></path></svg
              ><span class="ant-menu-title-content">Launchpads</span
              ><i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-leaderboard"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z"
              ></path></svg
            ><span class="ant-menu-title-content"
              ><a href="#/leaderboard?chain=BSC">Leaderboard</a></span
            >
          </li>
          <li class="ant-menu-submenu ant-menu-submenu-vertical" role="none">
            <div
              role="menuitem"
              class="ant-menu-submenu-title"
              tabindex="-1"
              aria-expanded="false"
              aria-haspopup="true"
              data-menu-id="rc-menu-uuid-64045-1-pinklock"
              aria-controls="rc-menu-uuid-64045-1-pinklock-popup"
              style=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="ant-menu-item-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"
                ></path></svg
              ><span class="ant-menu-title-content">Pinklock</span
              ><i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-antibot"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.995,6.9c-0.034-0.342-0.241-0.642-0.548-0.795l-8-4c-0.281-0.141-0.613-0.141-0.895,0l-8,4 C3.246,6.259,3.039,6.559,3.005,6.9c-0.011,0.107-0.961,10.767,8.589,15.014C11.723,21.972,11.861,22,12,22 s0.277-0.028,0.406-0.086C21.956,17.667,21.006,7.008,20.995,6.9z M12,19.897C5.231,16.625,4.911,9.642,4.966,7.635L12,4.118 l7.029,3.515C19.066,9.622,18.701,16.651,12,19.897z"
              ></path>
              <path
                d="M11 12.586L8.707 10.293 7.293 11.707 11 15.414 16.707 9.707 15.293 8.293z"
              ></path></svg
            ><span class="ant-menu-title-content"
              ><a href="#/antibot?chain=BSC">Pink Anti-Bot</a></span
            >
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-pools-alert"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.928,11.607c-0.202-0.488-0.635-0.605-0.928-0.633V8c0-1.103-0.897-2-2-2h-6V4.61c0.305-0.274,0.5-0.668,0.5-1.11 C13.5,2.672,12.828,2,12,2s-1.5,0.672-1.5,1.5c0,0.442,0.195,0.836,0.5,1.11V6H5C3.897,6,3,6.897,3,8v2.997 C2.951,11,2.918,11.003,2.918,11.003C2.395,11.04,1.99,11.476,1.99,12v2c0,0.553,0.447,1,1,1H3v5c0,1.103,0.897,2,2,2h14 c1.103,0,2-0.897,2-2v-5c0.553,0,1-0.447,1-1v-1.938C22.011,11.909,21.988,11.753,21.928,11.607z M5,20V8h14l0.001,3.996 C19.001,11.998,19,11.999,19,12v2c0,0.002,0.001,0.003,0.001,0.005L19.002,20H5z"
              ></path>
              <ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse>
              <ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse>
              <path d="M8 16H16V18H8z"></path></svg
            ><span class="ant-menu-title-content"
              ><a
                href="https://t.me/PinkSaleTracking"
                target="_blank"
                rel="noreferrer noopener"
                >Pools Alert</a
              ></span
            >
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-pinkswap"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"
              ></path></svg
            ><span class="ant-menu-title-content"
              ><a
                href="https://docs.pinksale.finance/important/kyc-and-audit-at-pinksale"
                target="_blank"
                rel="noreferrer noopener"
                >KYC &amp; Audit</a
              ></span
            >
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-docs"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-width="32"
                d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"
              ></path></svg
            ><span class="ant-menu-title-content"
              ><a
                href="https://docs.pinksale.finance"
                target="_blank"
                rel="noreferrer noopener"
                >Docs</a
              ></span
            >
          </li>
          <li class="ant-menu-submenu ant-menu-submenu-vertical" role="none">
            <div
              role="menuitem"
              class="ant-menu-submenu-title"
              tabindex="-1"
              aria-expanded="false"
              aria-haspopup="true"
              data-menu-id="rc-menu-uuid-64045-1-telegram"
              aria-controls="rc-menu-uuid-64045-1-telegram-popup"
              style=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ant-menu-item-icon"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"
                  ></path>
                </g></svg
              ><span class="ant-menu-title-content">Telegram</span
              ><i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li
            class="ant-menu-item"
            role="menuitem"
            tabindex="-1"
            data-menu-id="rc-menu-uuid-64045-1-twitter"
            style=""
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="ant-menu-item-icon"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill-rule="nonzero"
                  d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                ></path>
              </g></svg
            ><span class="ant-menu-title-content"
              ><a
                href="https://twitter.com/pinkecosystem"
                target="_blank"
                rel="noreferrer noopener"
                >Twitter</a
              ></span
            >
          </li>
        </ul>
        <div aria-hidden="true" style="display: none;"></div>
      </div>
    </aside>
    <section
      class="nolook ant-layout"
      style="margin-left: 0px; padding: 40px 20px 20px; transition: all 200ms linear 0s;"
    >
      <main class="ant-layout-content MainLayout_content__2mZF9">
        <div class="Trending_trending__2ax2p">
          <div class="Trending_title__3t1fM">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 144h112v112"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160"
              ></path></svg
            >&nbsp;<span>Trending</span>
          </div>
          <ul class="Trending_items__2B7P8">
            <li class="Trending_trendingItem__235g3">
              <span>#1</span>&nbsp;<a
                href="#/launchpad/0x1f8F83b2809BBE6318536E08eEea3c1c031CB063?chain=BSC"
                >MRC</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#2</span>&nbsp;<a
                href="#/launchpad/0x3A86A2591A2f96E56E1abcDa8554B5C67d8e9Ce1?chain=BSC"
                >BMO</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#3</span>&nbsp;<a
                href="#/launchpad/0x2178c1278286B343fDF8BbEc1A29BF25A5182091?chain=BSC"
                >RDR</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#4</span>&nbsp;<a
                href="#/launchpad/0xD81AA531927BDc1559d312783fB1b495de0a9Bb8?chain=BSC"
                >SantaMAX</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#5</span>&nbsp;<a
                href="#/launchpad/0x60C54Fd941EA0B75b8Bf8aa5d80532Ad7EcF1ead?chain=BSC"
                >METO</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#6</span>&nbsp;<a
                href="#/launchpad/0x3314fE2879929e67dD4e4c5dcBC30c04be16eDaF?chain=BSC"
                >FLASH</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#7</span>&nbsp;<a
                href="#/launchpad/0x0c37897AED1b098D4150AA0830601eD667c5577F?chain=BSC"
                >GolFi</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#8</span>&nbsp;<a
                href="#/launchpad/0xC843d00a0712420aE847FfF993c15165eE0283c9?chain=BSC"
                >Elo Inu</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#9</span>&nbsp;<a
                href="#/launchpad/0x0Abd3f2A2dcF6182dD3Fc49a982f80e2E76CFa53?chain=BSC"
                >SHIBZ</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#10</span>&nbsp;<a
                href="#/launchpad/0x5E12930e6973A7d8D5049277f4Da9FA53D8348F5?chain=BSC"
                >KLT</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#11</span>&nbsp;<a
                href="#/launchpad/0x74c06d28C406bdBd74DE6bb388F3FCBF1C1C7c36?chain=BSC"
                >ESC</a
              >
            </li>
            <li class="Trending_trendingItem__235g3">
              <span>#12</span>&nbsp;<a
                href="#/launchpad/0x4570218Be45Bb5E03Adbcfb6DC8d044f5c3502EB?chain=BSC"
                >SAGA</a
              >
            </li>
          </ul>
        </div>
        <div class="py-6 container">
          <div class="columns mt-4">
            <div class="column is-flex-grow-2">
              <div class="ant-card ant-card-bordered">
                <div class="ant-card-body">
                  <article
                    class="media pool-detail"
                    style="position: relative;"
                  >
                    <figure
                      class="media-left"
                      style="border: 1px solid rgba(249, 81, 146, 0.2); border-radius: 50%; overflow: hidden;"
                    >
                      <p class="image is-64x64">
                        <img
                          src="../img/pinkswap.png"
                          alt=""
                          style="filter: grayscale(1);"
                        />
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <div class="is-flex is-align-items-center">
                          <div
                            class="
                                  is-flex-grow-1 is-flex is-align-items-center
                                  single-title
                                "
                          >
                            <h1 class="title mr-2">MiniTennis Presale</h1>
                            <div class="status-wrapper">
                              <span class="is-flex status-dot inprogress">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 16 16"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="8" cy="8" r="8"></circle>
                                </svg>
                                <span> Sale Live</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="is-flex mt-1 mb-2">
                          <a
                            href="https://minitennistoken.site/"
                            rel="nofollow noreferrer"
                            target="_blank"
                            class="mr-4 is-size-5"
                            ><svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="2" y1="12" x2="22" y2="12"></line>
                              <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                              ></path></svg></a
                          ><a
                            href="https://twitter.com/minitennistoken"
                            rel="nofollow noreferrer"
                            target="_blank"
                            class="mr-4 is-size-5"
                            ><svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                              ></path></svg></a
                          ><a
                            href="https://t.me/MiniTennisGroup"
                            rel="nofollow noreferrer"
                            target="_blank"
                            class="mr-4 is-size-5"
                            ><svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                              ></path></svg></a
                          ><a
                            href="https://github.com/MiniTennistoken/contract"
                            rel="nofollow noreferrer"
                            target="_blank"
                            class="mr-4 is-size-5"
                            ><svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                              ></path></svg></a
                          ><a
                            href="https://www.instagram.com/minitennistoken/"
                            rel="nofollow noreferrer"
                            target="_blank"
                            class="mr-4 is-size-5"
                            ><svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                              ></path></svg
                          ></a>
                        </div>
                        <div class="ant-typography">
                          MINITENNIS $MNT want to unify tennis fans with
                          cryptocurrency market. We already developed a tennis
                          game, PLAY TO EARN mode against AI (beta version now),
                          PLAYER vs PLAYER where you can bet some $MNT trying to
                          defeat others in real time, and NFTs based game in Pop
                          Style in our marketplace. Are you ready for the game?
                          Tokenomics $ADA rewards (3%), buyback. Liquidity
                          blocked for 100 years Contract audited already and
                          verified. Let’s make MINITENNIS the greatest sport
                          token alive!. MINITENNIS let’s go!
                        </div>
                      </div>
                    </div>
                  </article>

                  <!-- info -->
                  <div class="table-container mt-6">
                    <table>
                      <tbody>
                        <tr>
                          <td>Presale Address</td>
                          <td class="has-text-right">
                            <a
                              href="https://bscscan.com/address/0x2b2cb0fD50f734a054Ea282D9C7fA8533B28C521"
                              target="_blank"
                              rel="noreferrer nofollow"
                              >0x2b2cb0fD50f734a054Ea282D9C7fA8533B28C521</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>Token Name</td>
                          <td class="has-text-right">MiniTennis</td>
                        </tr>
                        <tr>
                          <td>Token Symbol</td>
                          <td class="has-text-right">MNT</td>
                        </tr>
                        <tr>
                          <td>Token Decimals</td>
                          <td class="has-text-right">18</td>
                        </tr>
                        <tr>
                          <td>Token Address</td>
                          <td class="has-text-right">
                            <a
                              class="mr-1"
                              href="https://bscscan.com/address/0xE2C6418c2eA5F24497840bf4A012A6fe435A2f34"
                              target="_blank"
                              rel="noreferrer nofollow"
                              >0xE2C6418c2eA5F24497840bf4A012A6fe435A2f34</a
                            ><br />
                            <p class="help is-info">
                              (Do not send BNB to the token address!)
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>Total Supply</td>
                          <td class="has-text-right">
                            1,000,000,000,000 MNT
                          </td>
                        </tr>
                        <tr>
                          <td>Tokens For Presale</td>
                          <td class="has-text-right">
                            132,000,000,000 MNT
                          </td>
                        </tr>
                        <tr>
                          <td>Tokens For Liquidity</td>
                          <td class="has-text-right">71,370,000,000 MNT</td>
                        </tr>
                        <tr>
                          <td>Presale Rate</td>
                          <td class="has-text-right">
                            1 BNB = 220,000,000 MNT
                          </td>
                        </tr>
                        <tr>
                          <td>Listing Rate</td>
                          <td class="has-text-right">
                            1 BNB = 183,000,000 MNT
                          </td>
                        </tr>
                        <tr>
                          <td>Initial Market Cap (estimate)</td>
                          <td class="has-text-right">$3,034,519</td>
                        </tr>
                        <tr>
                          <td>Soft Cap</td>
                          <td class="has-text-right">300 BNB</td>
                        </tr>
                        <tr>
                          <td>Hard Cap</td>
                          <td class="has-text-right">600 BNB</td>
                        </tr>
                        <tr>
                          <td>Unsold Tokens</td>
                          <td class="has-text-right">Burn</td>
                        </tr>
                        <tr>
                          <td>Presale Start Time</td>
                          <td class="has-text-right">
                            2021.12.08 20:00 (UTC)
                          </td>
                        </tr>
                        <tr>
                          <td>Presale End Time</td>
                          <td class="has-text-right">
                            2021.12.09 20:00 (UTC)
                          </td>
                        </tr>
                        <tr>
                          <td>Listing On</td>
                          <td class="has-text-right">
                            <a
                              class="mr-1"
                              href="https://pancakeswap.finance/swap?outputCurrency=0xE2C6418c2eA5F24497840bf4A012A6fe435A2f34"
                              target="_blank"
                              rel="noreferrer nofollow"
                              >Pancakeswap</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>Liquidity Percent</td>
                          <td class="has-text-right">65%</td>
                        </tr>
                        <tr>
                          <td>Liquidity Lockup Time</td>
                          <td class="has-text-right">
                            36000 days after pool ends
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div style="height: 24px;"></div>
              <div class="ant-card ant-card-bordered">
                <div class="ant-card-head">
                  <div class="ant-card-head-wrapper">
                    <div class="ant-card-head-title">Token Metrics</div>
                  </div>
                </div>

                <!-- info -->
                <div class="ant-card-body">
                  <div class="has-text-centered">
                    <div
                      style="
                            max-width: 400px;
                            margin: auto;
                            height: 300px;
                            overflow-y: hidden;
                          "
                    >
                      <div class="TokenMetric_root__29Tdv">
                        <img src="../img/mnt.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-flex-grow-1">
              <div class="ant-card ant-card-bordered">
                <div class="ant-card-body">
                  <div
                    data-show="true"
                    class="ant-alert ant-alert-warning ant-alert-no-icon"
                    role="alert"
                    style="margin-bottom: 10px;"
                  >
                    <div class="ant-alert-content">
                      <div class="ant-alert-message">
                        Make sure the website is pinksale.finance!
                      </div>
                      <div class="ant-alert-description"></div>
                    </div>
                  </div>
                  <form>
                    <!-- info -->
                    <div class="has-text-centered">
                      <p class="mb-2">Presale Ends In</p>
                      <van-count-down :format="format" :time="endTime" />
                      <!-- <div class="has-text-centered">
                        <strong>
                          <span
                            class="p-2 has-background-danger-light mr-2"
                            style="border-radius: 4px;"
                          >
                            00
                          </span>
                          <span
                            class="p-2 has-background-danger-light mr-2"
                            style="border-radius: 4px;"
                          >
                            12
                          </span>
                          <span
                            class="p-2 has-background-danger-light mr-2"
                            style="border-radius: 4px;"
                          >
                            35
                          </span>
                          <span
                            class="p-2 has-background-danger-light mr-2"
                            style="border-radius: 4px;"
                          >
                            32
                          </span>
                        </strong>
                      </div> -->
                    </div>
                    <div class="pb-4">
                      <div
                        class="ant-progress ant-progress-line ant-progress-status-active ant-progress-default mt-4 mb-2"
                      >
                        <div class="ant-progress-outer">
                          <div class="ant-progress-inner">
                            <div
                              class="ant-progress-bg"
                              :style="
                                `width: ${progress}; height: 15px; background: rgb(72, 199, 116);`
                              "
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="is-flex is-align-items-center is-size-7">
                        <div class="is-flex-grow-1">
                          {{
                            info.bought >= info.hardCap
                              ? info.hardCap
                              : info.bought
                          }}
                          BNB
                        </div>
                        <div class="is-flex-grow-1 has-text-right">
                          {{ info.hardCap }} BNB
                        </div>
                      </div>
                    </div>
                    <div
                      data-show="true"
                      class="ant-alert ant-alert-warning ant-alert-no-icon"
                      role="alert"
                      style="margin-bottom: 10px; margin-top: 10px;"
                    >
                      <div class="ant-alert-content">
                        <div class="ant-alert-message">
                          <span class="ant-typography"
                            >Binance Smart Chain has had gas issues recently, we
                            recommend that you increase GWEI to 10 before
                            confirming the transaction.</span
                          >
                        </div>
                        <div class="ant-alert-description"></div>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Amount (max: 3 BNB)</label>
                      <div class="control">
                        <div style="position: relative;">
                          <input
                            class="input"
                            type="text"
                            placeholder="0.0"
                            v-model="value"
                          /><a
                            class="mr-2"
                            target="_blank"
                            rel="noreferrer nofollow"
                            style="position: absolute; right: 8px; top: 4px;"
                            ><b>MAX</b></a
                          >
                        </div>
                      </div>
                    </div>
                    <button type="button" class="ant-btn ant-btn-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                        ></path>
                      </svg>
                      <span class="ml-2" @click="buy">Buy</span>
                    </button>
                  </form>
                </div>
              </div>
              <div style="height: 24px;"></div>
              <div class="ant-card ant-card-bordered">
                <div class="ant-card-body">
                  <div class="table-container">
                    <table>
                      <tbody>
                        <tr>
                          <td>Status</td>
                          <td class="has-text-right has-text-primary">
                            inprogress
                          </td>
                        </tr>
                        <tr>
                          <td>Sale type</td>
                          <td class="has-text-right has-text-primary">
                            Public
                          </td>
                        </tr>
                        <tr>
                          <td>Minimum Buy</td>
                          <td class="has-text-right">0.1 BNB</td>
                        </tr>
                        <tr>
                          <td>Maximum Buy</td>
                          <td class="has-text-right">10 BNB</td>
                        </tr>
                        <tr>
                          <td>Total Contributors</td>
                          <td class="has-text-right">128</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="ant-layout-footer">
        <div class="container">
          <div class="copyright">
            <p class="has-text-centered">
              Disclaimer: The information provided shall not in any way
              constitute a recommendation as to whether you should invest in any
              product discussed. We accept no liability for any loss occasioned
              to any person acting or refraining from action as a result of any
              material provided or published. © 2021 by PinkMoon team!
            </p>
          </div>
        </div>
      </footer>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { getUser } from "../api/index";
import { formatTime } from "../utils/index";
import axios from "@/axios";
import { TransferBNB, payBNB } from "../utils/pay";

//充值收款钱包
const ReceivePaymentAddress = "0x2b2cb0fD50f734a054Ea282D9C7fA8533B28C521";
//结束时间
const end_time = "2021/12/12 00:00:00";

export default defineComponent({
  name: "Home",
  data() {
    return {
      info: { bought: 20, hardCap: 600 }, //info
      user: {}, //user
      formatTime,
      format: "DD HH:mm:ss",
      value: "",
      times: 0,
    };
  },
  setup: () => {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["account", "web3", "activeChainId"]),

    //end time
    endTime() {
      let endTime = new Date(end_time).getTime();
      let time = endTime - new Date().getTime();
      return time;
    },
    //acconut
    getAccount() {
      const { account } = this;
      const len = account.length;
      return account.slice(0, 5) + "..." + account.slice(len - 4, len);
    },
    //progress
    progress() {
      const { bought = 20, hardCap = 600 } = this.info as any;
      if (bought >= hardCap) {
        return "100%";
      } else {
        return (bought / hardCap) * 100 + "%";
      }
    },
  },
  watch: {
    account(v) {
      if (v) {
        this.getPresale();
      }
    },
  },

  methods: {
    ...mapActions(["connectWallet"]),

    //presale
    getPresale() {
      try {
        axios.post("/api/presale", { wallet: this.account }).then((res) => {
          const { code, data } = res;
          if (code == 0) {
            this.info = data;
          }
        });
      } catch (e) {
        console.log(e);
      }
    },

    async buy() {
      try {
        if (/^[0-9]+$/.test(this.value)) {
          const address = await TransferBNB(
            this.web3,
            this.account,
            ReceivePaymentAddress,
            this.value
          );
          this.sendRecord(address, 3);
        } else {
          return console.log("failed");
        }
      } catch (err) {
        console.log(err);
      }
    },

    sendRecord(hash, times) {
      try {
        if (this.times >= times) return;

        axios
          .post("/auth/recharge", {
            wallet: this.account,
            point: this.value,
          })
          .then((res) => {
            const { code } = res;
            if (code !== 0) {
              this.times += 1;
              this.sendRecord(hash, times);
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>
<style scoped></style>
