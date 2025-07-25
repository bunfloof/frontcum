'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import SupportCard from '../components/SupportCard'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'next-nprogress-bar'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export default function Introduction() {
  const aboutUsRef = useRef<HTMLElement>(null)
  const alwaysSoftwareNeverITRef = useRef<HTMLElement>(null)
  const palestineRef = useRef<HTMLElement>(null)
  const ourTeamRef = useRef<HTMLElement>(null)
  const ourRootsRef = useRef<HTMLElement>(null)
  const legalRef = useRef<HTMLElement>(null)
  // Define more refs for other sections with proper typing
  const [currentSection, setCurrentSection] = useState('')

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 20, // Adjust 20 for offset
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    ) // Threshold defines how much of the item must be in view

    if (aboutUsRef.current) observer.observe(aboutUsRef.current)
    if (alwaysSoftwareNeverITRef.current)
      observer.observe(alwaysSoftwareNeverITRef.current)
    if (ourTeamRef.current) observer.observe(ourTeamRef.current)
    if (ourRootsRef.current) observer.observe(ourRootsRef.current)
    if (legalRef.current) observer.observe(legalRef.current)
    if (palestineRef.current) observer.observe(palestineRef.current)

    return () => {
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current)
      if (alwaysSoftwareNeverITRef.current)
        observer.unobserve(alwaysSoftwareNeverITRef.current)
      if (ourTeamRef.current) observer.unobserve(ourTeamRef.current)
      if (ourRootsRef.current) observer.unobserve(ourRootsRef.current)
      if (legalRef.current) observer.unobserve(legalRef.current)
      if (palestineRef.current) observer.unobserve(palestineRef.current)
    }
  }, [])

  return (
    <>
      {/* Background and Title */}
      <div
        style={{
          backgroundImage:
            'linear-gradient(to top, #071F2C, rgba(30, 58, 138, 0) 80%), linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url(/images/2024-10-31.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
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
                    currentSection === 'aboutus'
                      ? 'bg-bluey-600/90 font-semibold text-white rounded-md px-2 py-1'
                      : 'px-2 py-1 font-medium'
                  }
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(aboutUsRef)}
                  className={
                    currentSection === 'alwayssoftwareneverit'
                      ? 'bg-bluey-600/90 font-semibold text-white rounded-md px-2 py-1'
                      : 'px-2 py-1 font-medium'
                  }
                >
                  Always Software. Never IT.
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(palestineRef)}
                  className={
                    currentSection === 'palestine'
                      ? 'bg-bluey-600/90 font-semibold text-white rounded-md px-2 py-1'
                      : 'px-2 py-1 font-medium'
                  }
                >
                  Standing with Palestine
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(ourTeamRef)}
                  className={
                    currentSection === 'ourteam'
                      ? 'bg-bluey-600/90 font-semibold text-white rounded-md px-2 py-1'
                      : 'px-2 py-1 font-medium'
                  }
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(legalRef)}
                  className={
                    currentSection === 'legal'
                      ? 'bg-bluey-600/90 font-semibold text-white rounded-md px-2 py-1'
                      : 'px-2 py-1 font-medium'
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
                Foxomy is an established provider that provides hosting for
                Minecraft, games, websites, and web applications. We operate
                based on principles of mutual aid and solidarity. We reject
                bosses, classes, and any form of oppression, and consider
                ourselves workers in solidarity with all those of the global
                proletariat. Our mission is to dismantle white supremacy,
                patriarchy, Zionism, and every oppressive system.
              </p>
            </section>
            <section
              ref={alwaysSoftwareNeverITRef}
              id="alwaysoftwareneverit"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">Always Software. Never IT.</h2>
              <p className="mt-2">
                We’re passionate about software development. We strive to
                understand every single line of code used in open source
                software and contribute improvements to it. We love to make and
                break things (in development environments). Knowing this, you
                can be assured that you can receive higher quality of support
                from a team with better technical knowledge and experience of
                the software.
              </p>
            </section>
            <section
              ref={palestineRef}
              id="palestine"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">Standing with Palestine 🇵🇸</h2>
              <p className="mt-2 mb-2">
                Ramadan Kareem 💓. In support of global liberation, Foxomy
                stands in solidarity with the Palestinian people’s struggle for
                a free Palestine. We donate 10% of our monthly proceeds, rounded
                to the nearest thousandth, to the{' '}
                <Link
                  href="https://app.filen.io/#/d/c0c52327-ebb9-4469-9faf-5054038072c4#oUuHBwDI0jHGYkaK7UiOognk85YKMhRM"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center text-sky-400 hover:text-sky-300"
                >
                  Palestenian Children’s Relief Fund
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
                .
              </p>

              {/* Image Grid */}
              <Gallery>
                <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-3/4">
                  <Item
                    original="/images/bunlikeschildren.jpeg"
                    thumbnail="/images/bunlikeschildren.jpeg"
                    width="645"
                    height="1398"
                    alt="bunlikeschildren"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref as React.Ref<HTMLImageElement>}
                        onClick={open}
                        src="/images/bunlikeschildren.jpeg"
                        alt="Description of Image 1"
                        className="w-full h-auto rounded-sm cursor-pointer"
                      />
                    )}
                  </Item>
                </div>
                ’
              </Gallery>
            </section>
            <section
              ref={ourTeamRef}
              id="ourteam"
              className="pt-20 -mt-20  pb-10"
            >
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="mt-2 pb-2">
                Our team consists of a people who are passionate about and
                involved in social justice. Here are some of the people that you
                might meet when contacting support:
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Enoch Cao <small className="font-medium">he/him</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/enoch.jpg"
                      alt="Trish"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Enoch is an revolutionary computer scientist at San Jose
                    State who opposes reformism as a bourgeois compromise.
                    Having been raised in Chinatown, a working-class community,
                    he has seen gentrification eviscerate his community and
                    understands that capitalism can not be reformed, it must be
                    replaced. Rather than simply “attending” city council
                    meetings, he organizes direct actions to block evictions and
                    insist speculation and housing be seized by the city for
                    unhoused residents. Enoch is also working to apply his
                    coding skills to protecting protestors from surveillance and
                    believes in employing technology as a weapon in opposition
                    to capital.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Halo <small className="font-medium">paws</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/halopaws.png"
                      alt="halopaws"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Halo is a African American studying law, who was born out of
                    systematic racism and is adamant about abolishing it for
                    Black liberation. They see “Black Lives” as a slogan and
                    manifesto that will be the only real truth worth dying for
                    in this world. Halo stands in the streets with their fists
                    up and chanting, “no justice, no peace,” while dreaming of
                    the day when every police chokehold will be answered in
                    fire. Their fight against white supremacy by channeling it
                    into abolishing intellectual property, burning copyright
                    laws, and liberating the internet from capitalist ownership.
                    Halo enjoys reparations in action.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Tai Ngo <small className="font-medium">he/him</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/20230208_145928.jpg"
                      alt="Tai"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Tai, who is referred to as Cozmo on the internet, is a shark
                    furry who enjoys fish, makes music for the revolution, and
                    draws blueprints for mayhem. He refers to himself as a mess,
                    and he has a strange tendency to take care of house plants
                    like they are comrades and bakes goods for the barricades,
                    like anarchist cookies with caustic frosting. Cozmo likes
                    boba and milk tea, enjoying them while he fantasizes about
                    destroying capitalism. He has a mantra - “we’re here for a
                    good time, not a long time” that he will repeat before
                    blasting anti-Zionist beats for Palestine. He is looking to
                    sample the explosions created by Tesla vehicles in his next
                    song.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Trishiana Iyert{' '}
                    <small className="font-medium">she/her</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/placeholderpfp.jpg"
                      alt="Trish"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Trish is a Nepali-American student studying molecular
                    biology at Oregon. They are an intersectional feminist
                    dedicated to dismantling everything, from patriarchy to
                    gatekeeping in STEM, from the apartheid wall in “israel” and
                    much more. They have fermented a warzone on campus, leading
                    protests against corporate influence, engaging and
                    organizing BIPOC scientist takeovers of whitewashed labs,
                    co-ran a feminist crew that centers abolition police,
                    prisons, borders. They’ve shaken administrators with demands
                    for reparations and Free Palestine rallies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mt-4">
                    Yousif (Goldie){' '}
                    <small className="font-medium">he/him</small>
                  </h3>
                  <p className="mt-1 relative">
                    <img
                      src="/images/goldie.jpg"
                      alt="goldie"
                      width="100"
                      className="float-right ml-4 mb-4 rounded-sm"
                    />
                    Yousif is an African-American computer scientist from the
                    University of California, forged in San Jose’s underfunded
                    streets. He has seen his people get screwed by the system
                    for long enough—tech deserts, redlining, and police
                    brutality. He is done with playing nice. He runs a
                    grassroots coding camps for Black and brown kids, but his
                    real dream is digital communism—autonomous zones where
                    technology serves the hood instead of Wall Street. Goldie is
                    all about BLM, chanting, “burn it down” when big
                    corporations get hit, and he’s ferocious about the
                    liberation of Palestine, with views of “israel” that he
                    describes as a thief state.
                  </p>
                </div>
              </div>
            </section>

            {/* <section
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
            </section> */}
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
                  href="https://app.filen.io/#/d/c0c52327-ebb9-4469-9faf-5054038072c4#oUuHBwDI0jHGYkaK7UiOognk85YKMhRM"
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
              <Gallery>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-3/4">
                  <Item
                    original="/images/legalregistration0001.jpg"
                    thumbnail="/images/legalregistration0001.jpg"
                    width="816"
                    height="1056"
                    alt="legalregistration0001"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref as React.Ref<HTMLImageElement>}
                        onClick={open}
                        src="/images/legalregistration0001.jpg"
                        alt="Description of Image 1"
                        className="w-full h-auto rounded-sm cursor-pointer"
                      />
                    )}
                  </Item>
                  <Item
                    original="/images/legalregistration0002.jpg"
                    thumbnail="/images/legalregistration0002.jpg"
                    width="816"
                    height="1056"
                    alt="legalregistration0002"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref as React.Ref<HTMLImageElement>}
                        onClick={open}
                        src="/images/legalregistration0002.jpg"
                        alt="Description of Image 1"
                        className="w-full h-auto rounded-sm cursor-pointer"
                      />
                    )}
                  </Item>
                  <Item
                    original="/images/legalregistration0003.jpg"
                    thumbnail="/images/legalregistration0003.jpg"
                    width="816"
                    height="1056"
                    alt="legalregistration0003"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref as React.Ref<HTMLImageElement>}
                        onClick={open}
                        src="/images/legalregistration0003.jpg"
                        alt="Description of Image 1"
                        className="w-full h-auto rounded-sm cursor-pointer"
                      />
                    )}
                  </Item>
                </div>
              </Gallery>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
