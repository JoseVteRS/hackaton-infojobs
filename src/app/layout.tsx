import { NavbarLat } from "@/components/navbar/NavbarLat";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const sfpro = localFont({
  src: [
    {
      path: "../fonts/sf-pro-text/SFProText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-text/SFProText-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "CVExpress",
  description: "Crea tu CV en minutos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={sfpro.className}>{children}</body>
    </html>
  );
}
