"use client";
import { useState, useEffect } from "react";

export default function terms() {
  interface AddressDetail {
    title: string;
    name: string;
    address: string[];
  }

  interface Addresses {
    california: AddressDetail;
    vietnam: AddressDetail;
  }

  const [data, setData] = useState<{
    addresses: Addresses;
    protectedInfo: any;
  } | null>(null);

  /* Just a handshake to prevent scrapers from scraping URLs */
  useEffect(() => {
    fetch(
      "https://foxomy.com/publicapi/bun/address/diachi.php?key=fYqc1LvT66bkiN548VZl71gRB6kjdDpvQdz75R4PqLILvWGmYzYvNMsCL4mNEsex9wgUzJbRlC9QK66Czh5HmrveT6JG5US11rj8n4goQKIelA7wlt2512F8s8He0lKyr9Gn6prpCkkJKwkNiF6Z1LxRr6uvm5krVavR31yBaAOqByr1K1XTCr15CCtV0R2Nj9QYctzO"
    )
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="justify-between">
          <div className="pt-32 font-semibold text-3xl sm:text-5xl">Terms</div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Amended on July 4, 2024
          </p>
        </div>
        <div className="justify-between mt-20 mb-20">
          {/* Introduction */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">Definitions</h1>
          <p className="py-3 text-muted-foreground">
            {`The ensuing declares the constitution of contract, hereby agreement and relationship between the Company Foxomy of Vietnam registered with the company number: 0311850985, Trading as “Foxomy” which hereafter shall be referenced by the following: “Provider”, “Company”, and its first person pronouns, and the Client which conversely is referred to with second and third person pronouns.`}
          </p>

          {/* Prerequisites */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Prerequisites
          </h1>
          <p className="py-3 text-muted-foreground">{`May any definition within the commercial agreements, the Privacy Policy, Terms of Service and Service Level Agreement be of equal enforcement in each agreement, inserted and enforced with negligible capitalization and quotation marks.`}</p>
          <p className="py-3 text-muted-foreground">{`Headings in this agreement; labeled by completely capitalized lettering; shall not be of legal enforcement nor any effect to the contract.`}</p>

          {/* Governing Factor */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Governing Factor
          </h1>
          <p className="py-3 text-muted-foreground">{`The governing factor of the ensuing and aforeconstituted agreement is Vietnam, in addition to, depending on the service’s location, the governing regional, state and local laws whereby the service is located. Additionally is the company a business and or commercial “Doing Business As” or Trading name for Foxomy.`}</p>

          {/* Agreement to the terms */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Agreement to the terms
          </h1>
          <p className="py-3 text-muted-foreground">{`The client agrees to the contract by using any service and or visiting any website under the operation of Foxomy, in addition the said client may in fact agree to the terms via checkbox on account signup, and therefore is bound to the contract. Violation of the terms shall result in punishment determined by the provider, if said provider believes the Breach of Contract is violatory enough they may seek legal action.`}</p>

          {/* Signature & Formation Eligibility */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Signature & Formation Eligibility
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              One, to be eligible of formation and agreeing to the contract must
              not be inherent to any of the following restrictions:
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>Be younger than 13 years of age;</li>
              <li>Be unable able to form or sign contracts.</li>
              <li>Be an alternate account to avoid restrictions.</li>
            </ul>
            <p className="italic">
              * An exception to Signature & Formation Eligibility b) is in where
              the client or the entity agreeing to the contract is between 13 to
              17 years of age, therefore making them unable to form contracts
              but said client does not have any other deficiencies in contract
              formation other than his age. In said event is the client
              represented by their legal guardian and requires their permission
              to form the contract.
            </p>
          </div>

          {/* Definition of the Relationship */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Definition of the Relationship
          </h1>
          <p className="py-1 text-muted-foreground">
            {`A relationship is the term, governed by this contract in which the client has purchased a recurring or one-time, therefore permanent, service for. If the client decides to continue the recurring service shall the relationship not be restarted but extended and therefore shall not require a recreation of contract.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`A relationship formation, commercial inquiry or attempt to acquire a service by the client may be rejected by the provider, negliant to any circumstances and unrequiring reasoning.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`On cancellation of services shall the relationship be deemed as halted and will not insist any termination of account or this contract.`}
          </p>

          {/* Subsection: Liabilities */}
          <h3 className="font-semibold text-lg mt-4 uppercase">Liabilities</h3>
          <p className="py-1 text-muted-foreground">
            {`The Client agrees to operate, use and act under their own liability and responsibility in any case, regarding legalities or not.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`In the event of data loss shall the client indemnify and keep of harm the company and its directors.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`On occurrence of a data breach the company will withhold liability depending on the situation and decision of authorities.`}
          </p>

          {/* Subsection: Termination */}
          <h3 className="font-semibold text-lg mt-4 uppercase">Termination</h3>
          <p className="py-3 text-muted-foreground">{`By any and all means does each party reserve their right in regard, issue and to act upon termination of service and this contract.`}</p>

          {/* Commerce */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">Commerce</h1>
          {/* Subsection: Payment */}
          <h3 className="font-semibold text-lg mt-4 uppercase">Payment</h3>
          <p className="py-1 text-muted-foreground">
            Foxomy only accepts payments through:
          </p>
          <ul className="list-inside list-disc pl-5 py-1 text-muted-foreground">
            <li>PayPal</li>
            <li>Debit & Credit cards, using Stripe as a payment gateway</li>
            <li>Direct bank transfers</li>
            <li>Cash, delivered by mail</li>
          </ul>
          <p className="py-1 text-muted-foreground">
            {`Prices listed on the provider’s websites and advertisements may
              change at any time, by any amount without prior notice.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`All prices are as offered, with the applicable tax included negliant of the client’s location.`}
          </p>

          {/* Subsection: Refunds */}
          <h3 className="font-semibold text-lg mt-4 uppercase">Refunds</h3>
          <p className="py-1 text-muted-foreground">
            {` A refund of the services; “Minecraft” which the provider offers is applicable in cases where 30 days or less have passed since the purchase.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Refunds applicable to any service depending on the guarantees defined by Service Level Agreement, said applicable refund is found as defined there. The Service Level Agreement therefore voids the prior two paragraphs of the Commerce (2) section.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`The use of chargebacks, disputes is heavily discouraged and by the following term will be considered a violation of the terms.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`In the event of a chargeback shall the provider terminate the relationship under caution and in regard towards the lack of communication for proper refund by the client. The outcome of the dispute has no effect or change on the relationship, it shall be terminated before then. Furthermore is the outcome of the dispute is negligible towards the relationship.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`The company perceives itself liable if the dispute is made under the accurate claim of billing errors or service related issues, and therefore if the provider pleads, under the provider’s Service Level Agreement, and said liable in turn has inherent the negligibility of termination.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Additional or add-on purchases, which are extensions of prior or simultaneously purchased services can and will only be refunded in where the service itself has refund eligibility.`}
          </p>

          {/* Subsection: Failure of Payment */}
          <h3 className="font-semibold text-lg mt-4 uppercase">
            Failure of Payment
          </h3>
          <p className="py-1 text-muted-foreground">
            {`In the event where an invoice has been overdue for over 3 days the service(s) will be terminated. Within those 3 days the service was suspended, meaning it was inaccessible to the client but a simple completion of payment could get it reinstated.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`A client indebted to the provider with no sight or promise of repayment grants the provider the right to send contract, service and account information of the relationship in which the debt was entitled to a debt collection agency of their choice.`}
          </p>
          {/* Privacy Disclaimer */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">Commerce</h1>
          <p className="py-1 text-muted-foreground">
            {`In regards to privacy and or data protection shall the client look to the provider’s Privacy Policy, which inherits definition from all adjacent documents which are the Service Level Agreement, Terms of Service and Acceptable Use Policy.`}
          </p>

          {/* Prohibited Usage of Service */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Prohibited Usage of Service
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Foxomy services and products are subject to an Acceptable Use Policy.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`For information on any fraudulent or prohibited usage of service please refer to the Acceptable Use Policy, found at https://foxomy.com/aup.`}
          </p>

          {/* Copyright */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">Copyright</h1>
          <p className="py-1 text-muted-foreground">
            {`The copyright law of the United States is and of effect within all services the provider offers in addition to the copyright law of the service’s location.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Violation of any of the aforementioned copyright laws will be dealt with in the form of content removal requests, suspension and or termination of service and or account.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`Repeated or vigilant plagiarization or infringement of intellectual property may result in legal proceedings by any party. If said party is of participation in the current contract shall it apply to the relationship definitions and governing factors as aforedefined. Conversely if said prosecuting party is not of the contract shall the client vow by the liabilities of the relationship to take said liability unless the provider pleads.`}
          </p>
          {/* Alterations to the Terms */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Alterations to the Terms
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Changes to be or have been made to any document amended by Foxomy including the current shall not require any notification to the other parties, it is under their duty to make sure their acknowledgement of any terms is correct at all times.`}
          </p>
          {/* Intellectual Property of the Provider */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Intellectual Property of the Provider
          </h1>
          <p className="py-1 text-muted-foreground">
            {`The Foxomy Logo and name are protected under unregistered trademark rights or general unregistered intellectual property. You may not use neither the name nor logo for commercial purposes merely related to the ones of Foxomy operations.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`The domains of the provider are, order is of no effect; Foxomy.com, Any additional domains redirected to any asset of the provider is not of its ownership and therefore does not inherit any of its liability nor the reputation of the domain’s name.`}
          </p>
          {/* Imprint */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">Imprint</h1>
          {data?.addresses &&
            Object.values(data.addresses).map(
              (address: AddressDetail, idx: number) => (
                <div key={idx} className="text-muted-foreground">
                  <h3 className="font-semibold text-lg mt-4 uppercase">
                    {address.title}
                  </h3>
                  <p className="py-1 text-muted-foreground">
                    {address.name}
                    <br />
                    {address.address.map((line: string, lineIdx: number) => (
                      <span key={lineIdx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              )
            )}
          <p className="py-1 text-muted-foreground">
            {data?.protectedInfo.dpo.title}: {data?.protectedInfo.dpo.name}
            <br />
            {data?.protectedInfo.inquries.title}:{" "}
            {data?.protectedInfo.inquries.name}
            <br />
            Website: {data?.protectedInfo.website}
          </p>
          <p className="py-1 text-muted-foreground">
            {`This document may be updated at any time with or without notice to ensure the provider has the ability to keep these terms accurate and up-to-date. This is defined under the section “Alterations to the terms” and should this notice contradict the statement found under the section "Alterations to the terms" then this statement is to be ignored.`}
          </p>
        </div>
      </div>
    </>
  );
}
