"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import SupportCard from "../components/SupportCard";
import Link from "next/link";
import Router from "next/router";
import NProgress from "next-nprogress-bar";

export default function Introduction() {
  const aboutUsRef = useRef<HTMLElement>(null);
  const ourTeamRef = useRef<HTMLElement>(null);
  const ourRootsRef = useRef<HTMLElement>(null);
  const legalRef = useRef<HTMLElement>(null);
  // Define more refs for other sections with proper typing
  const [currentSection, setCurrentSection] = useState("");

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 20, // Adjust 20 for offset
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    ); // Threshold defines how much of the item must be in view

    if (aboutUsRef.current) observer.observe(aboutUsRef.current);
    if (ourTeamRef.current) observer.observe(ourTeamRef.current);
    if (ourRootsRef.current) observer.observe(ourRootsRef.current);
    if (legalRef.current) observer.observe(legalRef.current);

    return () => {
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
      if (ourTeamRef.current) observer.unobserve(ourTeamRef.current);
      if (ourRootsRef.current) observer.unobserve(ourRootsRef.current);
      if (legalRef.current) observer.unobserve(legalRef.current);
    };
  }, []);

  return (
    <>
      {/* Background and Title */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/bannerpalestine.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="pt-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            About Us
          </div>
          <p className="text-md sm:text-lg text-muted-foreground py-5">
            Established September of 2020
          </p>
        </div>
      </div>

      {/* Article and Table of Contents */}
      <div className="container mx-auto px-4 mt-10 flex flex-col lg:flex-row">
        {/* Table of Contents - On small screens, it will be at the top */}
        <div className="lg:w-1/4 relative">
          <nav className="sticky top-20">
            <h3 className="text-xl font-bold">Table of Contents</h3>
            <ul className="mt-4">
              <li>
                <button
                  onClick={() => scrollToSection(aboutUsRef)}
                  className={
                    currentSection === "aboutus"
                      ? "bg-zinc-700/70 font-semibold text-white rounded-md px-2 py-1"
                      : "px-2 py-1 font-medium"
                  }
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(ourTeamRef)}
                  className={
                    currentSection === "ourteam"
                      ? "bg-zinc-700/70 font-semibold text-white rounded-md px-2 py-1"
                      : "px-2 py-1 font-medium"
                  }
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(ourRootsRef)}
                  className={
                    currentSection === "ourroots"
                      ? "bg-zinc-700/70 font-semibold text-white rounded-md px-2 py-1"
                      : "px-2 py-1 font-medium"
                  }
                >
                  Our Roots
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(legalRef)}
                  className={
                    currentSection === "legal"
                      ? "bg-zinc-700/70 font-semibold text-white rounded-md px-2 py-1"
                      : "px-2 py-1 font-medium"
                  }
                >
                  Legal
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Article Content */}
        <div className="lg:w-3/4">
          <article>
            <section
              ref={aboutUsRef}
              id="aboutus"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-2">
                Foxomy haftungsbeschränkt is an established provider that
                provides hosting services for Minecraft, game, websites, web
                applications, and bare metal to a diverse range of clients. We
                are a small but mighty team of passionate individuals dedicated
                to providing the best hosting experience possible.
              </p>
              <div className="flex flex-row items-center mb-2"></div>
              We're not just some pop-up "
              <a
                href="https://www.urbandictionary.com/define.php?term=Summerhost"
                target="_blank"
                className="text-sky-400 hover:text-sky-300 hover:underline"
              >
                summerhost
              </a>
              "! We've been providing quality services since 2020! See how our
              website progressed on Wayback Machine as proof of existence:
              <span className="pl-2 text-sky-400 hover:text-sky-300 hover:underline mt-2">
                <Link
                  href="https://web.archive.org/web/20200801000000*/foxomy.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center"
                >
                  Internet Archive Wayback Machine
                  <svg
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="ml-2"
                  >
                    <path d="M568.5 142.6L424.5 7.5c-9.625-9.156-24.81-8.656-33.91.969-9.125 9.625-8.688 24.81.969 33.91l100.1 94.56h-163.4C287.5 134.2 249.7 151 221 179.4c-29 28.8-45 67.3-45 108.6v87.1c0 13.25 10.75 23.1 24 23.1s24-8.9 24-22.2v-88c0-28.37 10.94-54.84 30.78-74.5C274.3 194.2 298.9 183 328 184h163.6l-100.1 94.56c-9.656 9.094-10.09 24.28-.969 33.91 4.72 4.1 11.06 7.531 17.44 7.531 5.906 0 11.84-2.156 16.47-6.562l144-135.1C573.3 172.9 576 166.6 576 160s-2.7-12.9-7.5-17.4zM360 384c-13.25 0-24 10.75-24 23.1v47.1c0 4.406-3.594 7.1-8 7.1H56c-4.406 0-8-3.594-8-7.1V184c0-4.406 3.594-7.1 8-7.1h56c13.25 0 24-10.75 24-23.1s-10.75-23.1-24-23.1H56c-30.88 0-56 25.12-56 55.1v271.1c0 30 25.13 55.1 56 55.1h272c30.88 0 56-25.12 56-55.1v-47.1c0-15-10.7-25.8-24-25.8z" />
                  </svg>
                </Link>
              </span>
            </section>
            <section
              ref={ourTeamRef}
              id="ourteam"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="mt-2 pb-2">
                Our team consists of a small group of people that are passionate
                about and involved in social justice. Here are some of the
                people that you might meet when contacting support:
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Bun <small className="font-medium">Support</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/bun.jpg"
                      alt="Bun"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Bun (they/them/any), born in Vietnam but now residing in San
                    Jose, is a liberal arts major at the University of
                    California and militant direct action proponent, with a
                    history of going undercover to infiltrate and publicly
                    expose extremist groups, leaking their private
                    communications and plans to the public. Though some opposers
                    find these tactics as too subversive, Bun believes dramatic
                    confrontation is needed to achieve systemic change. When not
                    engaged in covert operations to take down those they view as
                    fascist opposers, Bun educates themselves and others on
                    revolutionary communism, Marxism, and disruptive activism.
                    Having experienced life under communist Vietnam, they
                    developed an appreciation for that ideology and what it
                    successfully provided to Vietnam. At the same time, being
                    from a communist background gives them a unique perspective
                    to critically analyze American political discourse.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Goldie ("OG G"){" "}
                    <small className="font-medium">Support</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/goldie.jpg"
                      alt="goldie"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Goldie (he/him) is a computer scientist at the University of
                    California. As an African-American born and raised in San
                    Jose, he witnessed firsthand the social inequity and lack of
                    investment in his community. Though excelling through his
                    computer science program, Goldie could not ignore the
                    disparities around him. He helped organize grassroots
                    technology workshops for San Jose youth, seeing how uneven
                    access to skills and equipment impacted them. Over time
                    Goldie grew frustrated with the limitations of piecemeal
                    efforts for change. He began using his technical prowess to
                    more subversively hack into and leak databases from corrupt
                    corporations and republicans, who are contributing to
                    community neglect. Goldie still continues some above-ground
                    activism around equitable tech education, but sees bigger
                    systemic change requiring more disruptive challenges to
                    power. He sees technology as a powerful tool, but knows
                    progress requires focusing innovation to lift up people most
                    in need rather than just corporate interests.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Trish <small className="font-medium">Support</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/trish.jpg"
                      alt="Trish"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Trish (they/them) is a Nepali-American molecular biology
                    student at the University of California who fervently
                    promotes progressive gender issues and women's empowerment.
                    Originally from suburban Oregon, moving to liberal
                    California emboldened their activism and female equity.
                    Passionate about science yet infuriated by ongoing
                    discrimination of women in STEM fields, Trish launched
                    campus initiatives supporting aspiring scientists from
                    diverse backgrounds. They organize events lifting up
                    prominent non-male pioneers regularly omitted from textbooks
                    and mainstream discourse. Trish also co-founded an
                    intersectional feminist organization running empowerment
                    seminars on issues from combating cultural patriarchy in
                    Asian communities to reproductive justice and positive body
                    image, aiming to tackle interlinked forms of systemic
                    misogyny. Though some find their rhetoric controversial,
                    Trish has secured administration funding for expanding
                    female self-defense courses and health resources on campus.
                    They balance spearheading direct actions like rallies,
                    protests, and walk-outs with conducing biological research
                    on women's health issues long ignored by male-dominated
                    establishments. Trish aspires to increase representation
                    fighting for institutional change as well as scientific
                    breakthroughs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Enoch Cao <small className="font-medium">Support</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/enoch.jpg"
                      alt="Trish"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Enoch (he/him) is a computer scientist at San Jose State.
                    Originally from a small family business in Chinatown, Enoch
                    has long considered himself a socialist. Since starting
                    college, he has become further emboldened and active around
                    issues of income inequality and housing justice in the San
                    Jose community. Enoch frequently attends city council
                    meetings to advocate for affordable housing ordinances. With
                    a passion for writing, he is an editor of an alternative
                    student newsletter that critiques the mainstream liberal
                    bent of academic discourse as not transformative enough.
                    While some find Enoch's rhetoric controversial, as a first
                    generation college student, he draws largely from his own
                    experiences of financial precarity in fueling his desire to
                    fundamentally reshape economic power dynamics in society.
                  </p>
                </div>
              </div>
            </section>

            <section
              ref={ourRootsRef}
              id="ourroots"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">Our Roots</h2>
              <p className="mt-2">
                Enoch, Ilomantis, Goldie, and Trish met in 2016 on Bun's
                Minecraft server that was a frequent target of DDoS attacks.
                This server, with its furry theme, was a target for extremist
                groups from the right wing. The server was attacked frequently,
                regularly drawing the ire of anti-furry and anti-LGBTQ groups.
                These five friends started working together on a DDoS mitigation
                solution for the server. They were able to successfully mitigate
                the attacks and the server was able to run without
                interruptions. They continued to work together on other projects
                and eventually decided to start a hosting company in 2020.
                Unfortunately as of 2023, Bun and Ilomantis (Alex) made the
                difficult decision to part ways. This separation was a pivotal
                moment for Foxomy, reaffirming our dedication to progressive
                values.
              </p>
            </section>
            <section ref={legalRef} id="legal" className="pt-20 -mt-20 pb-5">
              <h2 className="text-2xl font-bold">Legal</h2>
              <p className="mt-2">
                Our company is legally registered in Vietnam since September of
                2020, and our support team is based in the United States. Foxomy
                operates under the legal jurisdiction of Vietnam, thus putting
                it outside the jurisdiction of the United States and other
                surveillance alliances. Foxomy will only comply with court
                orders or subpoenas issued by a Vietnamese court. Our
                registration documents are readily accessible below:
              </p>
              <div className="flex flex-row items-center text-sky-400 hover:text-sky-300 hover:underline mb-2 mt-1">
                <Link
                  href="/files/foxomy-registration-vn-2020.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center"
                >
                  foxomy-registration-vn-2020.pdf
                  <svg
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="ml-2"
                  >
                    <path d="M568.5 142.6L424.5 7.5c-9.625-9.156-24.81-8.656-33.91.969-9.125 9.625-8.688 24.81.969 33.91l100.1 94.56h-163.4C287.5 134.2 249.7 151 221 179.4c-29 28.8-45 67.3-45 108.6v87.1c0 13.25 10.75 23.1 24 23.1s24-8.9 24-22.2v-88c0-28.37 10.94-54.84 30.78-74.5C274.3 194.2 298.9 183 328 184h163.6l-100.1 94.56c-9.656 9.094-10.09 24.28-.969 33.91 4.72 4.1 11.06 7.531 17.44 7.531 5.906 0 11.84-2.156 16.47-6.562l144-135.1C573.3 172.9 576 166.6 576 160s-2.7-12.9-7.5-17.4zM360 384c-13.25 0-24 10.75-24 23.1v47.1c0 4.406-3.594 7.1-8 7.1H56c-4.406 0-8-3.594-8-7.1V184c0-4.406 3.594-7.1 8-7.1h56c13.25 0 24-10.75 24-23.1s-10.75-23.1-24-23.1H56c-30.88 0-56 25.12-56 55.1v271.1c0 30 25.13 55.1 56 55.1h272c30.88 0 56-25.12 56-55.1v-47.1c0-15-10.7-25.8-24-25.8z" />
                  </svg>
                </Link>
              </div>
              {/* Image Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-3/4">
                <Link href="/images/legalregistration0001.jpg">
                  <img
                    src="/images/legalregistration0001.jpg"
                    alt="Description of Image 1"
                    className="w-full h-auto rounded-sm"
                  />
                </Link>
                <Link href="/images/legalregistration0002.jpg">
                  <img
                    src="/images/legalregistration0002.jpg"
                    alt="Description of Image 2"
                    className="w-full h-auto rounded-sm"
                  />
                </Link>
                <Link href="/images/legalregistration0003.jpg">
                  <img
                    src="/images/legalregistration0003.jpg"
                    alt="Description of Image 3"
                    className="w-full h-auto rounded-sm"
                  />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
