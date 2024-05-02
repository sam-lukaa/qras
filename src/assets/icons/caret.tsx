import { iSvg } from './types.dto';

export const caretup = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 14.5L12 8.5L18 14.5"
      stroke="#1A4747"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const caretdown = (
  <svg
    fill="none"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    transform="rotate(180)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="#1A4747"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 14.5L12 8.5L18 14.5"
    />
  </svg>
);

export const CaretLeft = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M9.89872 2.9843V1.92747C9.89872 1.83587 9.79345 1.78528 9.72236 1.84133L3.55908 6.6552C3.50671 6.69592 3.46434 6.74807 3.43519 6.80766C3.40604 6.86725 3.39089 6.93271 3.39089 6.99905C3.39089 7.06539 3.40604 7.13085 3.43519 7.19044C3.46434 7.25003 3.50671 7.30217 3.55908 7.3429L9.72236 12.1568C9.79482 12.2128 9.89872 12.1622 9.89872 12.0706V11.0138C9.89872 10.9468 9.86728 10.8825 9.81533 10.8415L4.89345 6.99973L9.81533 3.15657C9.86728 3.11555 9.89872 3.0513 9.89872 2.9843Z"
        fill={color ?? '#D1D5DB'}
      />
    </svg>
  );
};

export const CaretRight = ({ color }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7 5L12 10L7 15"
        stroke={color ?? '#6B7280'}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const dbCaretRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8.33333 3.3335L13 8.00016L8.33333 12.6668M3 3.3335L7.66667 8.00016L3 12.6668"
      stroke="#6B7280"
      strokeWidth="1.13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = ({ color }: iSvg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8.66667 5L12 8M12 8L8.66667 11M12 8L4 8"
      stroke={color ?? '#6B7280'}
      strokeWidth="1.13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeft = ({ width, height, variant }: iSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '24'}
      height={height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.2222 18.2218L4 11.9996M4 11.9996L10.2222 5.77734M4 11.9996L20 11.9996"
        stroke={variant ?? '#1F2937'}
        strokeWidth="1.77778"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
