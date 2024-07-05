"use client";
import React, { useState, useEffect } from "react";

export default function Aup() {
  const [abuseReportEmail, setAbuseReportEmail] = useState<string>("");
  useEffect(() => {
    fetch(
      "https://foxomy.com/publicapi/bun/address/diachi.php?key=fYqc1LvT66bkiN548VZl71gRB6kjdDpvQdz75R4PqLILvWGmYzYvNMsCL4mNEsex9wgUzJbRlC9QK66Czh5HmrveT6JG5US11rj8n4goQKIelA7wlt2512F8s8He0lKyr9Gn6prpCkkJKwkNiF6Z1LxRr6uvm5krVavR31yBaAOqByr1K1XTCr15CCtV0R2Nj9QYctzO"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.protectedInfo && data.protectedInfo.inquries) {
          setAbuseReportEmail(data.protectedInfo.inquries.abuseReportEmail);
        }
      })
      .catch((err) => {
        console.error("Error fetching email:", err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="justify-between">
          <div className="pt-32 font-semibold text-3xl sm:text-5xl">
            Acceptable Use Policy
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Amended on July 4, 2024
          </p>
        </div>
        <div className="justify-between mt-20 pb-20">
          {/* Introduction */}
          <p className="py-1 text-muted-foreground">
            {`Fraudulency within Foxomy (hereinafter Foxomy, “the provider”, “the company”) network is strictly prohibited. A fraudulent or prohibited consumption of service is anything the provider defines it to be. Examples of the aforementioned includes, but is not limited to, illegal acts, adult content, the “mining” of cryptocurrencies and the distribution, hosting and or usage of copyrighted software/material without explicit written consent from rightsholders.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`The services are provided as is and for a specific purpose, the client by purchasing a specific service alleges that he is aware of the service‘s determined use case and agrees to accurately consume it.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Usage of service different from its intended use case, determined by the provider, is prohibited and may lead to service termination or suspension.`}
          </p>

          {/* On Minecraft and Other Game Servers */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            On Minecraft and Other Game Servers
          </h1>
          <p className="py-1 text-muted-foreground">
            {`The service is intended only for use as a game server, enabling the customer to play the video game online with other players that one shares one's server "IP address" with.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Usage of the service for other purposes than just as a server will result, as mentioned above, in the termination of the user’s service and or account.`}
          </p>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`Examples of unintended or unpermitted use may include, but is not limited to, the following:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>Hosting other content than a game server on the service.</li>
              <li>Using the service to conduct cyberattacks of any sort.</li>
              <li>
                Using the service to unnecessarily create a load on the
                underlying server of the service.
              </li>
            </ul>
          </div>

          {/* On Other Servers */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            On Other Servers
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The service is provisioned as a Docker container, a private Kernel based Virtual Machine (“KVM”), or bare metal dedicated server, whose traffic flows through AS60068 (“Datacamp Limited”). Utilization of these services must be in legal compliance of the service’s location’s local laws and regulations as standard. These services may not be used for activities prohibited by either Foxomy, which include, but are not limited to, the following:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>
                {`Dstating: the act of using one’s service as a means to test
                one’s own capabilities of conducting cyberattacks as well as
                defending against such. Activities which constitute "Dstating"
                include, but are not limited to, the following:`}
                <ul className="list-inside list-disc pl-5">
                  <li>Conducting DDoS attacks against other services.</li>
                  <li>
                    {`Conducting penetration tests on services not owned by the
                    user.`}
                  </li>
                  <li>
                    {`Conducting any other form of cyberattack against other
                    services.`}
                  </li>
                  <li>
                    {`Reffering to one’s service as ‘unhittable’ or ‘undownable’
                    to attract attackers.)`}
                  </li>
                </ul>
              </li>
              <li>
                {`Portscanning: using one’s service to scan open network entry
                points (“ports”) into a remote machine or network by attempting
                to establish a connection to every possible “port”.`}
              </li>
              <li>
                {`Network/cyber attacks: using one’s service to conduct network-
                or cyber-attacks against Foxomy or another 3rd party/network.`}
              </li>
              <li>
                {`Excessive use: putting excessive strain/load on the hardware and
                or network the service runs on by using 100% of the service’s
                allocated hardware and or network resources/capacity past the
                95th percentile within a twelve (12) hour period.`}
              </li>
              <li>
                {`Malicious content: using one’s service to host and or distribute
                content considered illegal/malicious by international law, EU
                law, the law of the service’s jurisdiction, Foxomy, and or Path
                Network; which includes but is not limited to:`}
                <ul className="list-inside list-disc pl-5">
                  <li>
                    {`Pornography. Exceptions are made for locations Foxomy is 
                    given prior notice of intent to host pornography related services, 
                    this does not and will never count for content of underage 
                    individuals.`}
                  </li>
                  <li>
                    {`Pornography depicting or otherwise indicating the
                    participation/inclusion of individuals under the age of
                    eighteen (18).`}
                  </li>
                  <li>
                    {`Conducting any other form of cyberattack against other
                    services.`}
                  </li>
                  <li>
                    {`Material subject to copyright restrictions that has been
                    used without the explicit consent of the rightsholder(s).`}
                  </li>
                  <li>
                    {`Harmful material such as content promoting self-harm,
                    suicide, crime, hate-crime(s), violence, bullying,
                    harassment, racial injustice, discrimination, ethnic
                    violence, genocide, zionism, nazism, right-wing ideologies, 
                    crimes against, humanity, sexual assault, sexual harassment, and
                    environmental crime/crimes against the environment.`}
                  </li>
                </ul>
              </li>
              <li>
                {`Malicious applications: using one’s service to host and or
                distribute applications/software considered illegal/malicious by
                international law, EU law, the law of the service’s
                jurisdiction, Foxomy; which includes but is not limited to:`}
                <ul className="list-inside list-disc pl-5">
                  <li>
                    {`Software related to the operation of the Tor network/the Tor
                    project.`}
                  </li>
                  <li>
                    {`Software used for conducting cyberattacks, such as DDoS or
                    DoS attacks (Distributed Denial of Service/Denial of Service
                    attacks).`}
                  </li>
                </ul>
              </li>
              <li>
                {`Mining: using one’s service to "mine" cryptocurrencies. "Mining" is the process of running software that generates revenue in a certain cryptocurrency.`}
              </li>
            </ul>
          </div>
          <p className="py-1 text-muted-foreground">
            {`For certain tunnelling and proxying services such as GRE the allowed bandwidth speed goes down from the advertised to 100Mbps / 1GB of ram.`}
          </p>
          {/* Violation by Association */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Violation by Association
          </h1>

          <p className="py-1 text-muted-foreground">
            {`By taking part in activity considered to be fraudulent/abusive by this Acceptable Use Policy using one's service at a different hosting vendor (i.e. not on Foxomy’s platform), those involved in the activity that have services on Foxomy may have their services terminated and their account suspended.`}
          </p>

          <p className="py-1 text-muted-foreground">
            {`Foxomy defines this as “violation by association” where by being associated with activity considered fraudulent/abusive by this Acceptable Use Policy the parties involved will be treated by Foxomy as if the activity had taken place on its own platform. Whether Foxomy chooses to use this clause to take action against the involved parties is up to Foxomy’s own discretion and may or may not happen depending on the situation at hand.`}
          </p>

          {/* Acceptance of the Minecraft EULA */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Acceptance of the Minecraft EULA
          </h1>
          <p className="py-1 text-muted-foreground">
            {`By the usage of their Minecraft service and by entering into the contract one agrees and alleges to follow the terms of the Minecraft Eula, linked at `}
            <a
              href=" https://account.mojang.com/documents/minecraft_eula."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline transition-colors"
            >
              https://account.mojang.com/documents/minecraft_eula.
            </a>
            {`.`}
          </p>

          {/* Report Abusive Activity */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Report Abusive Activity
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Abuse reports are handled through email and may be sent to {abuseReportEmail}. `}
          </p>
        </div>
      </div>
    </>
  );
}
