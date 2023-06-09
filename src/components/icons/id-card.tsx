import { SVGProps } from "react"
export const IDCardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="icon icon-tabler icon-tabler-id"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
        <path d="M7 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 8h2M15 12h2M7 16h10" />
    </svg>
)
