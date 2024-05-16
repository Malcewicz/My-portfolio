import "./globals.css";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/app/_components/navbar";
import About from "@/app/_components/about";
import Projects from "@/app/_components/projects";
import Footer from "@/app/_components/footer";
import Experience from "@/app/_components/experience";
import Contact from "@/app/_components/contact";
import Education from "@/app/_components/education";

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-Manrope",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Maciej Bernatowicz — Frontend Developer",
  description:
    "Maciej is a software developer specializing in front-end web development and mobile applications, creating responsive and user-centric designs",
  authors: [{ name: "Maciej Bernatowicz" }],
  keywords:
    "Maciej Bernatowicz, Maciej, Bernatowicz, Frontend Developer, Web Developer, Software Developer, React, Next.js, Flutter, UI Design",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Navbar />
        <main>
          {children}
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
