import { iSvg } from './types.dto';

export const hamburger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M3 6.25H29M3 16H29M3 25.75H14.375"
      stroke="white"
      strokeWidth="2.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const cancel = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M3 29L29 3M3 3L29 29"
      stroke="white"
      strokeWidth="2.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CancelIcon = ({ variant }: { variant?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={variant ?? 'none'}
    >
      <path
        d="M4 12L12 4M4 4L12 12"
        stroke="#9CA3AF"
        strokeWidth="1.13"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const info = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.7778 13.1111H10V10H9.22222M10 6.88889H10.0078M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
      stroke="#4ED6D4"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Settings = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4"
        stroke={color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Ai = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9 9H15V15H9V9Z"
        stroke={color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Star = ({ color, width, height }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '10'}
      height={height ?? '10'}
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        d="M4.80979 1.08541C4.86966 0.901148 5.13034 0.901148 5.19021 1.08541L6.07767 3.81672C6.10444 3.89912 6.18123 3.95492 6.26788 3.95492H9.13975C9.33349 3.95492 9.41405 4.20284 9.2573 4.31672L6.93391 6.00476C6.86382 6.05569 6.83448 6.14596 6.86126 6.22837L7.74871 8.95967C7.80859 9.14394 7.59769 9.29716 7.44095 9.18328L5.11756 7.49524C5.04746 7.44431 4.95254 7.44431 4.88244 7.49524L2.55905 9.18328C2.40231 9.29716 2.19141 9.14394 2.25129 8.95967L3.13874 6.22837C3.16552 6.14596 3.13618 6.05569 3.06609 6.00476L0.742697 4.31672C0.585954 4.20284 0.66651 3.95492 0.860254 3.95492H3.73212C3.81877 3.95492 3.89556 3.89912 3.92233 3.81672L4.80979 1.08541Z"
        fill={color ?? '#F08228'}
      />
    </svg>
  );
};

export const Search = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke={color ?? '#6B7280'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Video = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
        stroke={variant || 'white'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InvoiceIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      width={width || '16'}
      height={height || '20'}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12L11 6M5.50003 6.5H5.51003M10.5 11.5H10.51M15 19V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V19L4.5 17L8 19L11.5 17L15 19ZM6 6.5C6 6.77614 5.77614 7 5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6C5.77614 6 6 6.22386 6 6.5ZM11 11.5C11 11.7761 10.7761 12 10.5 12C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11C10.7761 11 11 11.2239 11 11.5Z"
        stroke={variant || '#051D40'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6Z"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16Z"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M10.75 6.88889V10L13.0833 12.3333M17.75 10C17.75 13.866 14.616 17 10.75 17C6.88401 17 3.75 13.866 3.75 10C3.75 6.13401 6.88401 3 10.75 3C14.616 3 17.75 6.13401 17.75 10Z"
        stroke="#6B7280"
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeClosed = ({ color, width, height }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '20'}
      height={height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.11666 5.06668C9.40897 5.02187 9.70428 4.99959 10 5.00001C12.65 5.00001 15.1417 6.90834 16.5917 10C16.3699 10.4705 16.1194 10.9269 15.8417 11.3667C15.7535 11.5032 15.7071 11.6625 15.7083 11.825C15.7102 12.0069 15.7715 12.1831 15.8829 12.3269C15.9943 12.4707 16.1496 12.5741 16.3253 12.6213C16.5009 12.6685 16.6872 12.6569 16.8557 12.5884C17.0241 12.5199 17.1655 12.3981 17.2583 12.2417C17.6466 11.6316 17.9839 10.9906 18.2667 10.325C18.3114 10.221 18.3344 10.109 18.3344 9.99584C18.3344 9.88266 18.3114 9.77066 18.2667 9.66668C16.5833 5.75835 13.4167 3.33335 10 3.33335C9.60889 3.33137 9.2184 3.36484 8.83333 3.43335C8.7239 3.45195 8.6192 3.49193 8.52521 3.55099C8.43123 3.61006 8.34979 3.68706 8.28557 3.7776C8.22134 3.86813 8.17557 3.97043 8.15088 4.07866C8.12619 4.18688 8.12306 4.29891 8.14166 4.40835C8.16027 4.51778 8.20024 4.62248 8.25931 4.71646C8.31838 4.81045 8.39538 4.89188 8.48591 4.95611C8.57645 5.02033 8.67875 5.0661 8.78698 5.09079C8.8952 5.11548 9.00723 5.11862 9.11666 5.10001V5.06668ZM3.09166 1.90835C3.01396 1.83065 2.92172 1.76901 2.8202 1.72696C2.71869 1.68491 2.60988 1.66327 2.5 1.66327C2.39011 1.66327 2.28131 1.68491 2.17979 1.72696C2.07827 1.76901 1.98603 1.83065 1.90833 1.90835C1.75141 2.06527 1.66325 2.27809 1.66325 2.50001C1.66325 2.72193 1.75141 2.93476 1.90833 3.09168L4.49166 5.66668C3.31297 6.80129 2.37488 8.16167 1.73333 9.66668C1.68744 9.77182 1.66376 9.8853 1.66376 10C1.66376 10.1147 1.68744 10.2282 1.73333 10.3333C3.41666 14.2417 6.58333 16.6667 10 16.6667C11.4976 16.6563 12.9598 16.2104 14.2083 15.3833L16.9083 18.0917C16.9858 18.1698 17.078 18.2318 17.1795 18.2741C17.2811 18.3164 17.39 18.3382 17.5 18.3382C17.61 18.3382 17.7189 18.3164 17.8205 18.2741C17.922 18.2318 18.0142 18.1698 18.0917 18.0917C18.1698 18.0142 18.2318 17.922 18.2741 17.8205C18.3164 17.7189 18.3382 17.61 18.3382 17.5C18.3382 17.39 18.3164 17.2811 18.2741 17.1795C18.2318 17.078 18.1698 16.9858 18.0917 16.9083L3.09166 1.90835ZM8.39166 9.56668L10.4333 11.6083C10.2925 11.6487 10.1465 11.6684 10 11.6667C9.55797 11.6667 9.13405 11.4911 8.82149 11.1785C8.50892 10.866 8.33333 10.442 8.33333 10C8.33162 9.8535 8.35127 9.70752 8.39166 9.56668ZM10 15C7.35 15 4.85833 13.0917 3.41666 10C3.95507 8.81147 4.71922 7.73883 5.66666 6.84168L7.14166 8.33334C6.7952 8.96568 6.66311 9.6933 6.76521 10.4071C6.86731 11.1208 7.19809 11.7822 7.70794 12.2921C8.21778 12.8019 8.87919 13.1327 9.59295 13.2348C10.3067 13.3369 11.0343 13.2048 11.6667 12.8583L12.9917 14.1667C12.0842 14.7007 11.0528 14.988 10 15Z"
        fill={color ?? '#6B7280'}
      />
    </svg>
  );
};

export const Check = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 11L7 15L17 5"
        stroke={color || '#89E4E2'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Cross = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M5.5 15L15.5 5M5.5 5L15.5 15"
        stroke={color || '#FCA5A5'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Checked = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7.5" fill="white" stroke="#4ED6D4" />
      <circle
        cx="4.8"
        cy="4.8"
        r="4.8"
        transform="matrix(-1 0 0 1 12.8 3.2002)"
        fill="#4ED6D4"
      />
    </svg>
  );
};

export const Unchecked = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <circle cx="8.5" cy="8" r="7.5" fill="white" stroke="#CDD7DF" />
    </svg>
  );
};

export const PostIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '20'}
      height={height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 4.75H17M3 10H17M3 15.25H17"
        stroke={color || '#276B6A'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FeedIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.4444 16.2218H4.55556C3.69645 16.2218 3 15.5253 3 14.6662L3 5.3329C3 4.47379 3.69645 3.77734 4.55556 3.77734L12.3333 3.77734C13.1924 3.77734 13.8889 4.47379 13.8889 5.3329V6.11068M15.4444 16.2218C14.5853 16.2218 13.8889 15.5253 13.8889 14.6662L13.8889 6.11068M15.4444 16.2218C16.3036 16.2218 17 15.5253 17 14.6662V7.66623C17 6.80712 16.3036 6.11068 15.4444 6.11068L13.8889 6.11068M10.7778 3.77734L7.66667 3.77734M6.11111 13.1107H10.7778M6.11111 6.88846H10.7778V9.99957H6.11111V6.88846Z"
        stroke={color || '#6B7280'}
        strokeWidth="1.67"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NewsIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '21'}
      height={height || '20'}
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M10.0383 3.10996C10.2091 2.69932 10.7909 2.69932 10.9617 3.10996L12.7632 7.4415C12.8353 7.61462 12.9981 7.7329 13.185 7.74789L17.8612 8.12278C18.3045 8.15832 18.4843 8.71158 18.1465 9.00091L14.5837 12.0528C14.4413 12.1748 14.3791 12.3662 14.4226 12.5486L15.5111 17.1118C15.6143 17.5444 15.1437 17.8864 14.7642 17.6545L10.7606 15.2092C10.6006 15.1115 10.3994 15.1115 10.2394 15.2092L6.23584 17.6545C5.85629 17.8864 5.38567 17.5444 5.48886 17.1118L6.57736 12.5486C6.62086 12.3662 6.55868 12.1748 6.41628 12.0528L2.85347 9.00091C2.5157 8.71157 2.69546 8.15832 3.13879 8.12278L7.81505 7.74789C8.00194 7.7329 8.16475 7.61462 8.23675 7.4415L10.0383 3.10996Z"
        stroke={color || '#6B7280'}
        strokeWidth="1.67"
      />
    </svg>
  );
};

export const VerifiedIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM13.2437 8.86872C13.5854 8.52701 13.5854 7.97299 13.2437 7.63128C12.902 7.28957 12.348 7.28957 12.0063 7.63128L9.125 10.5126L7.99372 9.38128C7.65201 9.03957 7.09799 9.03957 6.75628 9.38128C6.41457 9.72299 6.41457 10.277 6.75628 10.6187L8.50628 12.3687C8.84799 12.7104 9.40201 12.7104 9.74372 12.3687L13.2437 8.86872Z"
        fill={color || '#4ED6D4'}
      />
    </svg>
  );
};

export const LikeIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      {color ? (
        <>
          <path
            d="M2.39999 12.6004C2.39999 11.6063 3.20588 10.8004 4.19999 10.8004C5.19411 10.8004 5.99999 11.6063 5.99999 12.6004V19.8004C5.99999 20.7945 5.19411 21.6004 4.19999 21.6004C3.20588 21.6004 2.39999 20.7945 2.39999 19.8004V12.6004Z"
            fill={color || '#276B6A'}
          />
          <path
            d="M7.19999 12.4004V18.9171C7.19999 19.8262 7.7136 20.6572 8.52668 21.0637L8.58649 21.0936C9.253 21.4269 9.98794 21.6004 10.7331 21.6004H17.2325C18.3765 21.6004 19.3615 20.7929 19.5859 19.6711L21.0259 12.4711C21.3229 10.986 20.187 9.60039 18.6725 9.60039H14.4V4.80039C14.4 3.47491 13.3255 2.40039 12 2.40039C11.3373 2.40039 10.8 2.93765 10.8 3.60039V4.40039C10.8 5.43897 10.4631 6.44953 9.83999 7.28039L8.15999 9.52039C7.53685 10.3513 7.19999 11.3618 7.19999 12.4004Z"
            fill={color || '#276B6A'}
          />
        </>
      ) : (
        <path
          d="M14 10H18.7639C20.2507 10 21.2177 11.5646 20.5528 12.8944L17.0528 19.8944C16.714 20.572 16.0214 21 15.2639 21H11.2462C11.0827 21 10.9197 20.9799 10.7611 20.9403L6.99997 20M14 10V5C14 3.89543 13.1045 3 12 3H11.9045C11.4049 3 11 3.40497 11 3.90453C11 4.61883 10.7885 5.31715 10.3923 5.91149L6.99997 11V20M14 10H12M6.99997 20H4.99997C3.8954 20 2.99997 19.1046 2.99997 18V12C2.99997 10.8954 3.8954 10 4.99997 10H7.49997"
          stroke="#6B7280"
          strokeWidth="2"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export const CommentIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 10H15.99M12 10H11.99M8 10H7.99M15 16H19C20.1046 16 21 15.1046 21 14V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V14C3 15.1046 3.89543 16 5 16H10L15 21V16Z"
        stroke={color || '#6B7280'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddCircle = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 9V12M12 12V15M12 12H9M12 12H15M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke={color || '#6B7280'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GalleryIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
        stroke={color || '#6B7280'}
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SendIcon = ({ width, height, color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.8083 7.6922L5.14163 2.87553C4.7002 2.69285 4.21566 2.64049 3.74539 2.72463C3.27511 2.80877 2.83879 3.02589 2.48808 3.3503C2.13737 3.67471 1.88696 4.09281 1.76649 4.55511C1.64601 5.01741 1.66052 5.50455 1.8083 5.95887L3.09163 10.0005L1.77497 14.0422C1.62319 14.4983 1.60614 14.9885 1.72586 15.4541C1.84558 15.9197 2.09699 16.3409 2.44997 16.6672C2.90383 17.0881 3.4977 17.3256 4.11663 17.3339C4.44558 17.3336 4.77124 17.2685 5.07497 17.1422L16.7833 12.3255C17.2393 12.1359 17.6289 11.8155 17.903 11.4046C18.177 10.9938 18.3233 10.511 18.3233 10.0172C18.3233 9.52335 18.177 9.04057 17.903 8.62975C17.6289 8.21894 17.2393 7.8985 16.7833 7.70887L16.8083 7.6922ZM4.46663 15.5839C4.31963 15.6445 4.15835 15.6618 4.00183 15.6338C3.84531 15.6057 3.70009 15.5335 3.5833 15.4255C3.47329 15.3204 3.39416 15.1872 3.3545 15.0403C3.31483 14.8934 3.31615 14.7384 3.3583 14.5922L4.57497 10.8339H16.0166L4.46663 15.5839ZM4.57497 9.1672L3.3333 5.4422C3.29115 5.29599 3.28983 5.14103 3.3295 4.99413C3.36916 4.84723 3.44829 4.71399 3.5583 4.60887C3.63672 4.5266 3.73115 4.46124 3.83576 4.41681C3.94038 4.37239 4.05298 4.34983 4.16663 4.35053C4.27834 4.35075 4.38886 4.37342 4.49163 4.4172L16.0166 9.1672H4.57497Z"
        fill={color || 'white'}
      />
    </svg>
  );
};

export const DeliveredIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      width={width || '41'}
      height={height || '41'}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8146 1.42946C22.3905 0.581224 21.5235 0.0454102 20.5752 0.0454102C19.6268 0.0454102 18.7598 0.581224 18.3357 1.42946L0.80928 36.4823C0.365235 37.3704 0.487936 38.437 1.12205 39.2011C1.75616 39.9651 2.78185 40.2823 3.73657 40.0095L16.2554 36.4327C17.3303 36.1256 18.0714 35.1431 18.0714 34.0252V22.5794C18.0714 21.1966 19.1923 20.0756 20.5751 20.0756C21.9579 20.0756 23.0789 21.1966 23.0789 22.5794V34.0252C23.0789 35.1431 23.82 36.1256 24.8948 36.4327L37.4137 40.0095C38.3685 40.2823 39.3942 39.9651 40.0283 39.2011C40.6624 38.437 40.7851 37.3704 40.341 36.4823L22.8146 1.42946Z"
        fill={variant || 'white'}
      />
    </svg>
  );
};

export const Ellipse = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      width={width || '4'}
      height={height || '4'}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill={variant || '#F08228'} />
    </svg>
  );
};

export const DeleteIcon = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      width={width || '51'}
      height={height || '51'}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.1805 14.6447L38.3709 39.9798C38.2149 42.1636 36.3978 43.8555 34.2085 43.8555H16.9418C14.7525 43.8555 12.9354 42.1636 12.7794 39.9798L10.9698 14.6447M21.4022 22.9907V35.5096M29.7481 22.9907V35.5096M31.8346 14.6447V8.38531C31.8346 7.23298 30.9004 6.29883 29.7481 6.29883H21.4022C20.2499 6.29883 19.3157 7.23298 19.3157 8.38531V14.6447M8.8833 14.6447H42.267"
        stroke={variant || 'white'}
        stroke-width="4.17296"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
