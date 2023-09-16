import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Calcular Población</title>
        <meta name="author" content="Saul Huerta" />
        <meta name="description" content="Página que sirve para calcular el crecimiento de la población" />
        <meta name="keywords" content="población, calcular, crecimiento, ecuaciones, diferenciales" />
        <meta
          property="og:title"
          content="Calcula el crecimiento de la población."
        />
        <meta
          property="og:description"
          content="Aplicación e información sobre el crecimiento exponencial."
        />
        <meta property="og:image" content={`${origin}/images/calc.png`} />
      </Head>

      <nav className="bg-red-500 py-6 px-3 mb-6">
        <h1 className="text-3xl font-bold text-white">Calcular Población</h1>
      </nav>
      {children}

      <footer className="bg-red-500 py-6 px-8 flex justify-center text-white mt-4">
        <div className="text-center">
          <h3 className="font-medium mb-2">Huerta Murillo Alejandro Saul</h3>
          <div className="flex gap-3 justify-center">
            <Link href="https://www.instagram.com/xansaul/" target="_blank">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://github.com/XanSaulDev" target="_blank">
              <Image src="/github.svg" alt="github" width={25} height={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="instagram"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
