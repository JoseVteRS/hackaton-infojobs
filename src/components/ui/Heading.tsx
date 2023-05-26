import { Dosis } from "next/font/google";
import cx from "classnames";

const dosis = Dosis({ subsets: ["latin"] });

interface HeadingProps {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: keyof typeof SIZE;
  kind: keyof typeof KIND;
}

const KIND: { [key: string]: string } = {
  primary: "text-primary",
  accent: "text-accent",
  gray: "text-ij-gray",
  black: "text-ij-black",
};

const SIZE = {
  small: "text-sm",
  medium: "text-base",
  large: "text-3xl",
  xlarge: "text-4xl",
};

const sizerUnderline =  (size: keyof typeof SIZE)=> {
    switch (size) {
        case "small":
            return "h-[1px]"
        case "medium":
            return"h-[3px]"
        case "large":
            return "h-[5px]"
        case "xlarge":
            return"h-[6px]"
        default:
            return "h-[3px]"
    }
}

const colorUnderline = (size: keyof typeof SIZE) => {
    switch (size) {
        case "small":
            return "bg-ij-black"
        case "medium":
            return"bg-primary"
        case "large":
            return "bg-accent"
        case "xlarge":
            return"bg-primary"
        default:
            return "bg-primary"
    }
}

const Heading = ({ children, as: As, kind, size }: HeadingProps) => {
  const classNames = cx(`uppercase ${dosis.className}`, {
    [KIND[kind]]: kind,
    [SIZE[size]]: sizerUnderline(size)
  });

  return (
    <>
      <div className={`${colorUnderline(size)} ${sizerUnderline(size)} w-12  mt-5 `}></div>
      <As className={`${dosis.className} ${classNames} `}>{children}</As>
    </>
  );
};

export default Heading;
