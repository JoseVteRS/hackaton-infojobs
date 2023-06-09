import { IconSquareGithub } from "@/components/icons/github";
import { IconTwitterSquare } from "@/components/icons/twitter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary to-primary-d3">
      <h1 className="text-5xl text-white font-bold mb-8">CVExpress</h1>
      <p className="text-xl text-white mb-12">
        Tu ruta rápida hacia un currículum perfecto
      </p>
      <Link
        href="/portal/contacto"
        className="bg-accent hover:bg-accent-d1 text-white font-semibold py-3 px-6 rounded shadow-ij-m hover:bg-blue-200 transition-colors duration-300 ease-in-out"
      >
        Comienza ahora
      </Link>

      <div className="mt-20 flex gap-5 items-center">
        <Link href="https://github.com/JoseVteRS/hackaton-infojobs" className="font-bold flex gap-1 items-center text-white my-2 hover:text-gray-300">
          <IconSquareGithub className="w-6 h-6" />
          Github
        </Link>
        <Link
          href="https://twitter.com/ImSilencio_"
          className="font-bold flex gap-1 items-center text-white my-2 hover:text-gray-300"
        >
          <IconTwitterSquare className="w-6 h-6" />
          Twitter
        </Link>
      </div>
    </div>
  );
}
