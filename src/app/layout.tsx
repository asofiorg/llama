import "~/styles/globals.css";

import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "llama by ASOFI",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen items-center justify-center bg-blue-500 font-sans text-sky-100 ${font.variable}`}
      >
        <div className="max-w-prose px-4 py-10">
          <header className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold">llama</h1>
            <p className="text-xl mt-2">
              ask anything on a toll-free phone line, an{" "}
              <a
                href="https://asofi.us"
                target="_blank"
                className="underline hover:no-underline"
              >
                ASOFI
              </a>{" "}
              project
            </p>
          </header>
          {children}
          <footer>
            <p className="text-center">
              by{" "}
              <a
                href="https://asofi.us"
                target="_blank"
                className="underline hover:no-underline"
              >
                Juan Almanza
              </a>
              . under MIT license
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
