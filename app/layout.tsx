import Link from "next/link";
import "./globals.css";
import Image from "next/image";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const header = (
        <header>
            <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
                <Link href="/">
                <Image src="/logo.png" width={50} height={50} alt={"Doctopus Logo"} className="mx-auto" />
                    <h1 className="text-2xl text-white font-bold mt-4">Doctopus Blog</h1>
                </Link>
                <p className="text-slate-300"> Data, Science, Viz & Art</p>
            </div>
        </header>
    );
    const footer = (
        <footer>
            <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
                <h3>Designed by Doctopus</h3>
            </div>
        </footer>
    )
    const hero = (
        <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
            <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        The quick, brown fox
                        <br className="hidden md:block" />
                        jumps over{' '}
                        <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae. explicabo.
                    </p>
                </div>
                <div className="flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-green-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Get started
                    </a>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
            <div>
                <img
                    src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
                    className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                    alt=""
                />
            </div>
        </div>
    )
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div className="mx-auto max-w-6xl px-6">
        {hero}
        {header}
        {children}
        {footer}
      </div>
      </body>
    </html>
  )
}
