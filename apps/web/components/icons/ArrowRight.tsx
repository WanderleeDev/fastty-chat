import { SVGProps } from "../types/SvgProps.type";

export default function ArrowRight(props: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12l6 6m-6-6l6-6"
      ></path>
    </svg>
  );
}
