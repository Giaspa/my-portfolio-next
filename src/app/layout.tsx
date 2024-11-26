import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Card from "./card/page";
import Navbar from "./ui/navbar/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MyPortfolioNext",
  description: "My react version portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/svg/nextjs.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/429aaf02bc.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-radial-gradient h-screen flex flex-col relative overflow-hidden">
          <Navbar />

          <div className="flex-grow h-[calc(100%-15rem)]">{children}</div>

          <section className="hidden lg:flex lg:flex-row lg:justify-evenly lg:items-end pb-8 px-32 gap-16">
            <Card
              id="about"
              imagePath="/assets/img/About.png"
              targetRoute="about"
              title="About"
            >
              <p>Who I am and how I got here.</p>
            </Card>

            <Card
              id="projects"
              imagePath="/assets/img/Projects.png"
              targetRoute="projects"
              title="Projects"
            >
              <p>What I created and how I made it.</p>
            </Card>

            <Card
              id="skills"
              imagePath="/assets/img/Skills.png"
              targetRoute="skills"
              title="Skills"
            >
              <p>My tools and knowledge.</p>
            </Card>

            <Card
              id="contacts"
              imagePath="/assets/img/Contacts.png"
              targetRoute="contacts"
              title="Contacts"
            >
              <p>Where to find me.</p>
            </Card>
          </section>
        </div>
      </body>
    </html>
  );
}
