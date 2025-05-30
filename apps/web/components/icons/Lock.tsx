import { SVGProps } from "../types/SvgProps.type";

export default function Lock(props: SVGProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"
      ></path>
    </svg>
  );
}
