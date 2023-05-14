"use client";

import "@/app/globals.css";
import "@/styles/hero_page.css";
import SvgHero from "@/public/undraw_heatmap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div id="bg-img">
        <SvgHero />
      </div>
      <div id="hero">
        <p>Hi! I'm</p>
        <h1>Maciej Bernatowicz</h1>
        <p>
          A software developer specializing in{" "}
          <b style={{ color: "hsl(200, 80%, 50%)" }}>front-end</b> web
          development and mobile applications, creating responsive and
          user-centric designs.
        </p>

        <div className="btn">
          <a
            href="./CV_Maciej_Bernatowicz_english.pdf"
            type="application/pdf"
            target="_blank"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ marginLeft: "0.5rem" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
