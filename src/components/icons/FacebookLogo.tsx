interface IFacebookLogoProps {
  height?: number;
  width?: number;
}
export const FacebookLogo = ({height = 80, width = 80}: IFacebookLogoProps) => {
  return (
    <svg width={height} height={width} viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 4H30C27.3478 4 24.8043 5.05357 22.9289 6.92893C21.0536 8.8043 20 11.3478 20 14V20H14V28H20V44H28V28H34L36 20H28V14C28 13.4696 28.2107 12.9609 28.5858 12.5858C28.9609 12.2107 29.4696 12 30 12H36V4Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
