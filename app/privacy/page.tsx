"use client";
import React, { useState, useEffect } from "react";

export default function Privacy() {
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    fetch(
      "https://foxomy.com/publicapi/bun/address/diachi.php?key=fYqc1LvT66bkiN548VZl71gRB6kjdDpvQdz75R4PqLILvWGmYzYvNMsCL4mNEsex9wgUzJbRlC9QK66Czh5HmrveT6JG5US11rj8n4goQKIelA7wlt2512F8s8He0lKyr9Gn6prpCkkJKwkNiF6Z1LxRr6uvm5krVavR31yBaAOqByr1K1XTCr15CCtV0R2Nj9QYctzO"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.protectedInfo && data.protectedInfo.inquries) {
          setEmail(data.protectedInfo.inquries.name);
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
            Privacy Policy
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            The data we collect about you & what you can do about it.
          </p>
        </div>
        <div className="justify-between mt-20 pb-20">
          {/* Introduction */}
          {/* <h1 className="font-semibold text-2xl mt-4 uppercase">Definitions</h1> */}
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`In addition to definitions in the Terms of Service, Acceptable Use Policy, Service Level Agreement, shall the following apply in this contract:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>
                “Controller”: Foxomy, The processor and controlling party of the
                data processing, the provider;
              </li>
              <li>
                “Data Subject”: Client, One who’s data is controlled by the
                controller and is subject to the current and adjacent
                agreement(s);
              </li>
              <li>
                “Areas of processing”: The websites or addresses where the
                subject allows his data to be collected and or processed.
              </li>
            </ul>
          </div>
          {/* Rights of the Data Subject */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Rights of the Data Subject
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The Data Subjects of this relationship, depending on their residence have different applicable data protection laws and rights to their case. The most notable of which is the European Economic Area’s GDPR which applies to the residents of which and the providers offering services to said residents. The rights of the EEA Data Subjects are stated within articles 12 through 23.`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>Right of access by the data subject, Article 15.</li>
              <li>Right to rectification 16</li>
              <li>
                Right to erasure, often known as right to be forgotten, Article
                17.
              </li>
              <li>Right to restriction of processing, Article 18.</li>
            </ul>
          </div>

          <p className="py-1 text-muted-foreground">
            {`Residents of the U.S. state of California are subject to the Californian Consumer Privacy Act or CCPA which by generalization protects and reserves their right to require their personal information not to be shared or sold;`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Residents of the United Kingdom of Great Britain and Northern Ireland are subject to the UK Data Protection Act 2018 or DPA18 which is in most ways equivalent to the EEA’s GDPR;`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Any future data protection regulations enactments that may come to be such as the possible Chinese Privacy Information Protection Law Draft will automatically be enforced and will the provider pledge to comply.`}
          </p>

          {/* The Data Protection Officer */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            The Data Protection Officer
          </h1>

          <p className="py-1 text-muted-foreground">
            {`The Data Protection Officer of Foxomy is Bun Ma of Ho Chi Minh City, Vietnam. Their email is: ${email}, any conversation with said email is private and confidential, data protection regulations are taken into account on each request.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`The Data Protection Officer may require the data subject to provide personally identifiable information such as passports and residential maintenance bills in order to confirm their identity. Said information will not be stored for longer than the conversation lasts, and again will not be shared. Any requests for the enactment of any GDPR, CCPA or DPA18 articles shall be sent to the Data Protection Officer via email at ${email} from the same email associated with your account if available.`}
          </p>

          {/* Cookies of the Data Subject */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Cookies of the Data Subject
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Foxomy uses and maintains a custom made, fully secure billing solution. The solution utilizes browser cookies in order to function and keep the Data Subject’s information accurate. These cookies are never used for purposes other than to identify the data subject to the system. Said system will never use the data subject’s information for marketing purposes unless the data subject has given consent to such use of its data.`}
          </p>

          {/* Children as Data Subjects */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Children as Data Subjects
          </h1>
          <p className="py-1 text-muted-foreground">
            {`The Children’s Online Privacy Protection Act or COPPA is a U.S. Law restricting children under the age of 13, and therefore protecting them for unfair treatment online from the ability to commercially engage or be data subjects of and with online businesses. Thereby does the provider reject all relationships with children under the age of 13, any existing relationship applicable to the prior are void and will be terminated. Suspicion of COPPA violation(s) may be sent to the Data Protection Officer with the subject prefix "[COPPA Abuse]:"`}
          </p>

          <p className="py-1 text-muted-foreground">
            {`Adolescents, 13 until their age of legal and financial independence are unable to form contracts until legal age, to engage in commercial relations with the Controller will they need parental (legal guardian) permission and be represented by their guardian(s) in regard to the entirety of the legal and commercial relationship.`}
          </p>

          {/* How the Data Subject's Data is Used */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            How the Data Subject's Data is Used
          </h1>
          <p className="py-1 text-muted-foreground">
            {`General information is used for the sole purpose of running the purchased service(s), they belong in said service(s) and will not be accessed by the Controller at any time unless required by law.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Personal information is solely utilized for the reservation of accurate legal representation for the relationship. Law enforcement or activities in legal proceedings may require sharing said information with qualified governmental authorities.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`To obtain clarification of General, Communications and Personal information feel free to send a message to the Data Protection Officer.`}
          </p>

          {/* Where the Data Subject's Data is Stored */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Where the Data Subject's Data is Stored
          </h1>

          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`Any and all information, General and Personal is stored on servers operated by the provider from their own property or a rented service with any of the following Tier 3 Secure Data Center Providers: Amazon Web Services, Evocative Data Centers, Hetnzer, IP-Projects, Multacom Corporation, Prime Data Centers, RoyaleHosting, SYNLINQ, and Voxility. These servers may be located in various locations around the world, including but not limited to:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>Amsterdam</li>
              <li>Finland</li>
              <li>Germany</li>
              <li>The United States of America</li>
            </ul>
          </div>

          {/* The data we collect about the subject */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            The data we collect about the subject
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The “controller” only stores data about the “subject” which is necessary for the operation of the “controller’s” business. This data is the following:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>{`The subject’s email address`}</li>
              <li>{`The subject’s first and last name`}</li>
            </ul>
            <p className="py-1">
              {`Optionally the “subject” may provide the “controller” with additional data, including but not limited to:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>{`The subject’s address of residence`}</li>
              <li>{`The subject’s zip or postal code`}</li>
              <li>{`The subject’s phone number`}</li>
            </ul>
          </div>

          {/* Additional Protection of the Data Subject’s Connectivity to the Controller */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Additional Protection of the Data Subject’s Connectivity to the
            Controller
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Any service may be applied and delivered with additional routing services from CDN77, Cloudflare, or Voxiltiy in order to counter (D)DoS cyberattacks against said services.`}
          </p>

          {/* Data Retention Policy */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Data Retention Policy
          </h1>
          <p className="py-1 text-muted-foreground">
            {`As a business operating in Vietnam, Foxomy is required to follow Vietnamese consumer and financial laws, among others. This includes regulations set by the Ministry of Finance and the State Bank of Vietnam regarding data retention. Said regulations state by generalization that the provider shall have the option to retain data as long as is necessary, any further is not recommended. The necessary time period is 10 years from the date of creation or receipt of such data.`}
          </p>

          {/* Email Messages */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Email Messages
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The “controller” reserves the right to send its customers email messages regarding their account when required. The reasons for these messages include, but are not limited to:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>{`Confirmation of the user’s email address`}</li>
              <li>{`Requests for the reset of the user’s account password`}</li>
              <li>{`Informal emails regarding the status of support tickets, interruption in service, service status, account breaches and account status.`}</li>
              <li>{`Order confirmations, invoices, payment confirmations, late payment notifications and payment reminders.`}</li>
            </ul>
            <p className="py-1">
              {`Email messages which do not fit in these categories may still be received by the user occasionally, however, these messages are never for promotional purposes but instead are reserved for emergencies and such where reaching out to the user is important (e.g. if a data breach were to occur).`}
            </p>
          </div>

          {/* Third Party Services */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Email Messages
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The “controller” uses various 3rd party services to operate its business. These services are:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>{`Discord.com (“Discord, Inc.”) — used as an unofficial support platform to clients and for order and ticket notifications via webhooks.`}</li>
              <li>{`Mailgun.com (“Mailgun Technologies, Inc.”) — used for email delivery.`}</li>
            </ul>
            <p className="py-1">
              {`As user data actively passes through these services the privacy policies of the aforementioned services also apply to data subjects of the controller. Their respective privacy policies, in order of the aforementioned, are listed here:.`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>
                {`Discord.com — `}
                <a
                  href="https://discord.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline transition-colors"
                >
                  https://discord.com/privacy
                </a>
              </li>
              <li>
                {`Mailgun.com — `}
                <a
                  href="https://www.mailgun.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline transition-colors"
                >
                  https://www.mailgun.com/legal/privacy-policy/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
