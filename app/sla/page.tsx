export default function sla() {
  return (
    <>
      <div className="container">
        <div className="justify-between">
          <div className="mt-20 font-semibold text-3xl sm:text-5xl">
            Service License Agreement
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Amended on August 20, 2023
          </p>
        </div>
        <div className="justify-between mt-20">
          <p className="text-muted-foreground">
            {`This document defines services and responsibilities of all parties,
            constituted and governed by Bun’s Terms of Service, including its
            definitions. Parties:`}
          </p>
          <div className="text-muted-foreground">
            <ul className="list-inside list-decimal pl-5">
              <li>{`the Providing Party: "Bun";`}</li>
              <li>
                {`the Consumer: the customer of "Bun" who agrees to these terms;`}
              </li>
            </ul>
          </div>
          <p className="font-semibold text-xl mt-4">
            RESPONSIBILITIES OF THE AGREEMENT
          </p>
          <p className="py-3 text-muted-foreground">
            Bun, the provider, agrees to respect its responsibilities and
            fulfill its duties on demand and request.
          </p>
          <p className="py-3 text-muted-foreground">
            To agree to the contract and be serviced by any of the available
            offerings, the Consumer must fulfill eligibility to form, agree to,
            and dissolve contracts.
          </p>

          <p className="font-semibold text-xl mt-4">
            DEFINITIONS OF THE AGREEMENT
          </p>
          <div className="py-3 text-muted-foreground">
            <p>“Service(s)”: Any commercial offering to the Consumer by Bun;</p>
            <p>“Uptime”: The state where a service is operational;</p>
            <p>“Downtime”: The state where a service is un-operational;</p>
            <p>
              “Credit, Balance”: Virtual, non-cash valued currency credit on the
              Bun billing area, exchangeable for services;
            </p>
            <p>“Natural disaster”: A term for unforeseeable and inevitable events;</p>
            <p>“Maintenance”: The state where a service is in maintenance;</p>
          </div>

          <p className="font-semibold text-xl mt-4">
            UNIVERSAL SERVICE GUARANTEE
          </p>
          <p className="text-muted-foreground">
            The Universal Service Guarantee is a 99.9% Uptime promise on every
            Service offering, except when any of the following is true:
          </p>
          <div className="text-muted-foreground">
            <ul className="list-inside list-decimal pl-5">
              <li>Service halted due to a natural disaster;</li>
              <li>Service halted due to fire;</li>
              <li>Service halted by the Consumer’s actions;</li>
              <li>
                Service halted by criminal actions such as (D)DoS attacks;
              </li>
              <li>Service halted due to scheduled Maintenance.</li>
            </ul>
          </div>
          <p className="py-3 text-muted-foreground">
            If the Universal Service Guarantee falls below the promised
            percentage, Bun will offer compensation of Credit, limited to 50% of
            the service’s monthly charge per downtime, upon request.
          </p>
        </div>
      </div>
    </>
  );
}
