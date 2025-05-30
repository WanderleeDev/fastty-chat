import { SVGProps } from "../types/SvgProps.type";

export default function HamburgerMenu(props: SVGProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20.596 3.903L15.999 8.5l4.597 4.596l1.414-1.415L18.828 8.5l3.182-3.182zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z"
      ></path>
    </svg>
  );
}
