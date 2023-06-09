import cx from "classnames";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"], weight: ["600", "800"] });


interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: keyof typeof SIZE;
  kind: keyof typeof KIND;
  fontStyles?: keyof typeof FONT_FAMILY;
  withDecoration?: boolean;
}

const KIND: { [key: string]: string } = {
  primary: "text-primary",
  accent: "text-accent",
  gray: "text-ij-gray",
  black: "text-ij-black",
};

const SIZE = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-4xl",
  xlarge: "text-6xl",
};

const FONT_FAMILY = {
  dosis: dosis.className,
};

const sizerUnderline = (size: keyof typeof SIZE) => {
  switch (size) {
    case "small":
      return "h-[1px] w-5";
    case "medium":
      return "h-[3px] w-10";
    case "large":
      return "h-[8px] w-12";
    case "xlarge":
      return "h-[12px] w-14";
    default:
      return "h-[3px] w-10";
  }
};

const colorUnderline = (size: keyof typeof SIZE) => {
  switch (size) {
    case "small":
      return "bg-ij-black";
    case "medium":
      return "bg-primary";
    case "large":
      return "bg-primary-l2";
    case "xlarge":
      return "bg-primary";
    default:
      return "bg-primary";
  }
};

const Heading = ({
  children,
  as: As,
  kind,
  size,
  className,
  withDecoration = false,
  fontStyles,
  ...restProps
}: HeadingProps) => {
  const classNames = cx(`font-bold ${className}`, {
    [KIND[kind]]: kind,
    [SIZE[size]]: sizerUnderline(size),
  });

  return (
    <>
      {withDecoration && (
        <div
          className={`${colorUnderline(size)} ${sizerUnderline(
            size
          )}  mt-5 `}
        ></div>
      )}

      <As className={` ${classNames} `}>{children}</As>
    </>
  );
};

export default Heading;
