import { iSvg } from './types.dto';

export const personal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.6497 14.514C6.22985 13.6209 8.0554 13.1111 10 13.1111C11.9446 13.1111 13.7702 13.6209 15.3503 14.514M12.3333 8.44444C12.3333 9.73311 11.2887 10.7778 10 10.7778C8.71134 10.7778 7.66667 9.73311 7.66667 8.44444C7.66667 7.15578 8.71134 6.11111 10 6.11111C11.2887 6.11111 12.3333 7.15578 12.3333 8.44444ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
      stroke="#41B2B1"
      strokeWidth="1.67"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const security = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.0001 12.3333V13.8889M5.33339 17H14.6667C15.5258 17 16.2223 16.3036 16.2223 15.4444V10.7778C16.2223 9.91867 15.5258 9.22222 14.6667 9.22222H5.33339C4.47428 9.22222 3.77783 9.91867 3.77783 10.7778V15.4444C3.77783 16.3036 4.47428 17 5.33339 17ZM13.1112 9.22222V6.11111C13.1112 4.39289 11.7183 3 10.0001 3C8.28184 3 6.88894 4.39289 6.88894 6.11111V9.22222H13.1112Z"
      stroke="#2890F0"
      strokeWidth="1.67"
      stroke-linecap="round"
    />
  </svg>
);

export const about = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.7778 13.1111H10V10H9.22222M10 6.88889H10.0078M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
      stroke="#F08228"
      strokeWidth="1.67"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const contact = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M3 4.55556C3 3.69645 3.69645 3 4.55556 3H7.10608C7.44086 3 7.73807 3.21422 7.84394 3.53182L9.00891 7.02672C9.13131 7.39392 8.96507 7.79524 8.61887 7.96834L6.86323 8.84616C7.72053 10.7476 9.25239 12.2795 11.1538 13.1368L12.0317 11.3811C12.2048 11.0349 12.6061 10.8687 12.9733 10.9911L16.4682 12.1561C16.7858 12.2619 17 12.5591 17 12.8939V15.4444C17 16.3036 16.3036 17 15.4444 17H14.6667C8.22334 17 3 11.7767 3 5.33333V4.55556Z"
      stroke="#C656C0"
      strokeWidth="1.67"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const logoutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M9.22222 13.1107L6.11111 9.99957M6.11111 9.99957L9.22222 6.88845M6.11111 9.99957L17 9.99957M13.1111 13.1107V13.8885C13.1111 15.1771 12.0664 16.2218 10.7778 16.2218H5.33333C4.04467 16.2218 3 15.1771 3 13.8885V6.11068C3 4.82201 4.04467 3.77734 5.33333 3.77734H10.7778C12.0664 3.77734 13.1111 4.82201 13.1111 6.11068V6.88845"
      stroke="#4959E7"
      strokeWidth="1.67"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const deleteAccount = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M15.4445 6.11111L14.7699 15.5553C14.7118 16.3693 14.0344 17 13.2183 17H6.78179C5.96569 17 5.28834 16.3693 5.23019 15.5553L4.55561 6.11111M8.4445 9.22222V13.8889M11.5556 9.22222V13.8889M12.3334 6.11111V3.77778C12.3334 3.34822 11.9852 3 11.5556 3H8.4445C8.01494 3 7.66672 3.34822 7.66672 3.77778V6.11111M3.77783 6.11111H16.2223"
      stroke="#DB3B65"
      strokeWidth="1.67"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.88889 6.11111V3M13.1111 6.11111V3M6.11111 9.22222H13.8889M4.55556 17H15.4444C16.3036 17 17 16.3036 17 15.4444V6.11111C17 5.252 16.3036 4.55556 15.4444 4.55556H4.55556C3.69645 4.55556 3 5.252 3 6.11111V15.4444C3 16.3036 3.69645 17 4.55556 17Z"
        stroke={variant || '#9CA3AF'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TimerIcon = ({ variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={variant ?? 'none'}
    >
      <path
        d="M10 16.6673C8.4529 16.6673 6.96917 16.0527 5.87521 14.9588C4.78125 13.8648 4.16667 12.3811 4.16667 10.834C4.16667 9.28689 4.78125 7.80316 5.87521 6.7092C6.96917 5.61523 8.4529 5.00065 10 5.00065C11.5471 5.00065 13.0308 5.61523 14.1248 6.7092C15.2188 7.80316 15.8333 9.28689 15.8333 10.834C15.8333 12.3811 15.2188 13.8648 14.1248 14.9588C13.0308 16.0527 11.5471 16.6673 10 16.6673ZM15.8583 6.15898L16.4525 5.56484C16.7837 5.23366 16.8021 4.69708 16.4717 4.36506C16.1424 4.03405 15.6119 4.05901 15.284 4.39149L14.6833 5.00065C13.3917 3.95065 11.7667 3.33398 10 3.33398C8.01088 3.33398 6.10322 4.12416 4.6967 5.53068C3.29018 6.93721 2.5 8.84486 2.5 10.834C2.5 12.8231 3.29018 14.7308 4.6967 16.1373C6.10322 17.5438 8.01088 18.334 10 18.334C14.1667 18.334 17.5 14.9757 17.5 10.834C17.5 9.06732 16.8833 7.44232 15.8583 6.15898ZM12.5 1.66732C12.5 1.20708 12.1269 0.833984 11.6667 0.833984H8.33333C7.8731 0.833984 7.5 1.20708 7.5 1.66732C7.5 2.12756 7.8731 2.50065 8.33333 2.50065H11.6667C12.1269 2.50065 12.5 2.12756 12.5 1.66732Z"
        fill="#9CA3AF"
      />
      <path
        d="M11 12V8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12Z"
        fill="#9CA3AF"
      />
    </svg>
  );
};

export const WalletIcon = ({ variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 8.44358H17M6.11111 12.3325H6.88889M10 12.3325H10.7778M5.33333 15.4436H14.6667C15.9553 15.4436 17 14.3989 17 13.1102V6.88802C17 5.59936 15.9553 4.55469 14.6667 4.55469H5.33333C4.04467 4.55469 3 5.59936 3 6.88802V13.1102C3 14.3989 4.04467 15.4436 5.33333 15.4436Z"
        stroke={variant ?? '#276B6A'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FileIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      width={width || '17'}
      height={height || '20'}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.75 10H11.75M5.75 14H11.75M13.75 19H3.75C2.64543 19 1.75 18.1046 1.75 17V3C1.75 1.89543 2.64543 1 3.75 1H9.33579C9.601 1 9.85536 1.10536 10.0429 1.29289L15.4571 6.70711C15.6446 6.89464 15.75 7.149 15.75 7.41421V17C15.75 18.1046 14.8546 19 13.75 19Z"
        stroke={variant || '#2F4360'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MessageIcon = ({ variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z"
        stroke={variant ?? 'white'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RedoIcon = ({ variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15"
        stroke={variant ?? 'white'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InfoIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={variant ?? '#6B7280'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DotIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '4'}
      height={height ?? '4'}
      viewBox="0 0 4 4"
      fill="none"
    >
      <circle cx="2" cy="2" r="2" fill={variant ?? '#F08228'} />
    </svg>
  );
};

// export const security =
