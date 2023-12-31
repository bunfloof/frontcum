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
      "https://foxomy.com/publicapi/diachi.php?key=fYqc1LvT66bkiN548VZl71gRB6kjdDpvQdz75R4PqLILvWGmYzYvNMsCL4mNEsex9wgUzJbRlC9QK66Czh5HmrveT6JG5US11rj8n4goQKIelA7wlt2512F8s8He0lKyr9Gn6prpCkkJKwkNiF6Z1LxRr6uvm5krVavR31yBaAOqByr1K1XTCr15CCtV0R2Nj9QYctzO"
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
          <div className="mt-20 font-semibold text-3xl sm:text-5xl">Terms</div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Amended on August 20, 2023
          </p>
        </div>
        <div className="justify-between mt-20">
          <p className="font-semibold text-xl">CONTRACT AGREEMENT</p>
          <p className="py-3 text-muted-foreground">
            {`This document sets forth the contract and relationship between the entity operating under "Bun," "Furry Host," and "Foxomy" (collectively referred to as the "Provider," "Company") and the client ("Client"). It replaces any previous agreements and is governed by the laws in California and the United States.`}
          </p>
          <p className="font-semibold text-xl mt-4">DEFINITIONS & HEADINGS</p>
          <p className="py-3 text-muted-foreground">{`Definitions found within commercial agreements, Privacy Policy, Terms of Service, and Service Level Agreement apply equally here. Headings in this document, marked in all capital letters, are for reference only and do not legally affect the contract.`}</p>
          <p className="font-semibold text-xl mt-4">LAW & JURISDICTION</p>
          <p className="py-3 text-muted-foreground">{`This agreement is subject to the laws of the United Kingdom, as well as regional, state, and local laws where the service is located. In legal disputes, hearings will be held within the state of California.`}</p>
          <p className="font-semibold text-xl mt-4">ACCEPTANCE OF TERMS</p>
          <p className="py-3 text-muted-foreground">{`By using any service or visiting any website operated by Bun, the client agrees to these terms. Acceptance may also be indicated by a checkbox during account signup. Breach of contract may result in penalties, including legal action.`}</p>
          <p className="font-semibold text-xl mt-4">
            ELIGIBILITY TO ENTER INTO CONTRACT
          </p>
          <div className="py-3 text-muted-foreground">
            <p>To agree to this contract, the client must:</p>
            <ul className="list-inside list-decimal pl-5">
              <li>
                Identify as Black, Indigenous, Latino, Hispanic, Asian, Pacific
                Islander, or a Person of Color.
              </li>
              <li>Be older than 13 years old.*</li>
              <li>Be able to form or sign contracts.</li>
              <li>Not use an alternate account to avoid restrictions.</li>
            </ul>
            <p className="pl-5 italic">
              *Clients aged 13-17 may enter into a contract with a legal
              guardian’s permission.
            </p>
          </div>
          <p className="font-semibold text-xl mt-4">RELATIONSHIP TERMS</p>
          <p className="py-3 text-muted-foreground">{`A relationship governed by this contract exists when the client purchases a recurring or one-time service. Bun may accept or reject the client's attempts to acquire a service without reason. Cancellation of services does not terminate the account or this contract.`}</p>
          <p className="font-semibold text-xl mt-4">LIABILITIES</p>
          <p className="py-3 text-muted-foreground">{`The client is responsible for their actions, including legal matters. In the event of data loss or breach, the client shall hold the company harmless, and the company's liability will be determined by relevant authorities.`}</p>
          <p className="font-semibold text-xl mt-4">TERMINATION</p>
          <p className="py-3 text-muted-foreground">{`Either party may terminate the service and this contract at their discretion.`}</p>
          <p className="font-semibold text-xl mt-4">PAYMENT & REFUNDS</p>
          <p className="py-3 text-muted-foreground">{`Bun accepts payments via PayPal, debit, credit cards (through Stripe), and mail (through USPS).`}</p>
          <p className="py-3 text-muted-foreground">{`Prices and tax inclusion are subject to change without notice. Refunds are available for certain services within specific terms, as detailed in the Service Level Agreement.`}</p>
          <p className="py-3 text-muted-foreground">{`Chargebacks are discouraged and may result in termination of the relationship. Exceptions and refund eligibility for add-on purchases are also defined.`}</p>
          <p className="font-semibold text-xl mt-4">FAILURE OF PAYMENT</p>
          <p className="py-3 text-muted-foreground">{`Services may be terminated if an invoice is overdue for more than 3 days. Fees may apply for content retrieval after suspension.`}</p>
          <p className="font-semibold text-xl mt-4">PRIVACY & USAGE POLICIES</p>
          <p className="py-3 text-muted-foreground">{`For privacy and acceptable usage, refer to Bun's Privacy Policy and Acceptable Use Policy, respectively.`}</p>
          <p className="font-semibold text-xl mt-4">COPYRIGHT</p>
          <p className="py-3 text-muted-foreground">{`US copyright laws apply, and violations will be dealt with accordingly. Repeated infringement may lead to legal action.`}</p>
          <p className="font-semibold text-xl mt-4">CHANGES TO TERMS</p>
          <p className="py-3 text-muted-foreground">{`Bun may update these terms without notice. Clients are responsible for staying informed.`}</p>
          <p className="font-semibold text-xl mt-4">INTELLECTUAL PROPERTY</p>
          <p className="py-3 text-muted-foreground">{`Unauthorized commercial use is prohibited.`}</p>
          <p className="font-semibold text-xl mt-4">CONTACT INFORMATION</p>
          <p className="py-3 text-muted-foreground">
            <strong>Bun</strong>
            <br />
            Mail-in payments and server equipment
            <br />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data?.addresses &&
              Object.values(data.addresses).map(
                (address: AddressDetail, idx: number) => (
                  <div
                    key={idx}
                    className=" border-gray-300 text-muted-foreground"
                  >
                    <strong>{address.title}</strong>
                    <br />
                    {address.name}
                    <br />
                    {address.address.map((line: string, lineIdx: number) => (
                      <span key={lineIdx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                )
              )}
          </div>

          <p className="py-3 text-muted-foreground italic">
            <strong>Visitor Policy:</strong>
            <br />
            Our premises are protected by security and surveillance. Personal
            visits are strictly prohibited and access will be denied. In rare
            occasions, visitors may be approved through a rigorous process of
            evaluation and coordination. Please do not attempt to visit the
            premises without prior approval. For all inquiries and
            correspondence, we request you to use mail or the email addresses
            provided below.
          </p>
          <p className="text-muted-foreground">
            <strong>Email Contacts:</strong>
            <br />
            General Inquiries: support+bun5@domain-of-this-website
          </p>

          <p className="text-muted-foreground py-6">
            <strong>{data?.protectedInfo.companyDetails.title}</strong>
            <br />
            {data?.protectedInfo.companyDetails.entityInfo}
            <br />
            {data?.protectedInfo.companyDetails.entityType}
          </p>
          <p className="text-muted-foreground italic">
            <strong>{data?.protectedInfo.usagePolicy.title}</strong>
            <br />
            {data?.protectedInfo.usagePolicy.description}
          </p>

          <p className="font-semibold text-xl mt-4">NOTE</p>
          <p className="py-3 text-muted-foreground">{`This document may be updated at any time to ensure accuracy, as defined under the section "Changes to Terms."`}</p>
        </div>
      </div>
    </>
  );
}
