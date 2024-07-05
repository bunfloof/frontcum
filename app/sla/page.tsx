export default function sla() {
  return (
    <>
      <div className="container">
        <div className="justify-between">
          <div className="pt-32 font-semibold text-3xl sm:text-5xl">
            Service License Agreement
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Our promise as a provider, to you as a client.
          </p>
        </div>
        <div className="justify-between mt-20 pb-20">
          {/* Introduction */}
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The ensuing is the definition of services and the responsibilities of all parties, constituted and governed by Foxomy’s Terms of Service including its definitions. Parties:`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>the Providing Party: Foxomy;</li>
              <li>
                the Consumer: the customer of “Foxomy” which agrees to these
                terms;
              </li>
            </ul>
          </div>

          {/* Responsibilities of the Agreement */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Responsibilities of the Agreement
          </h1>
          <p className="py-1 text-muted-foreground">
            {`Foxomy, the provider agrees to respect their responsibilities and fulfill its duties on demand and request.`}
          </p>
          <p className="py-1 text-muted-foreground">
            {`In order to agree to the contract and therefore be serviced any of the available, by the Providing Party does the Consumer need to fulfill and have the eligibility to form, agree to and dissolve contracts inherent.`}
          </p>

          {/* Definitions of the Agreement */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            Definitions of the Agreement
          </h1>
          <div className="py-3 text-muted-foreground">
            <ul className="list-inside list-disc pl-5">
              <li>
                “Status Page”: The Provisional Party’s site to keep track of and
                publish service status;
              </li>
              <li>
                “Service”(s): Any commercial offering towards the Consumer by
                the Providing Party;
              </li>
              <li>
                “Uptime”: The state where a service is operational according to
                the Status Page;
              </li>
              <li>
                “Downtime”: The state where a service is un-operational
                according the Status Page;
              </li>
              <li>
                “Credit, Balance”: Virtual, non-cash guaranteed and valued
                currency credit on the Foxomy billing area, which can be
                exchanged for services offered by Foxomy;
              </li>
              <li>
                “Force Majeure Event”: Any event beyond the reasonable control
                of the parties, including but not limited to natural disasters,
                severe weather conditions, acts of war or terrorism, civil
                unrest, labor disputes, or unforeseen technical failures;
              </li>
              <li>
                “Maintenance”: The state where a service is in Maintenance
                according the Status Page;
              </li>
            </ul>
          </div>

          {/* Universal Service Guarantee */}
          <h1 className="font-semibold text-2xl mt-4 uppercase">
            The Universal Service Guarantee is a guaranteed, general or even
            specific percentage or time period of Uptime promise on every
            Service offering.
          </h1>
          <div className="py-3 text-muted-foreground">
            <p className="py-1">
              {`The Providing Party offers a Universal Service Guarantee of 99.9% Uptime when any of the following is not true;`}
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>
                Service functioning is halted due to a Force Majeure Event;
              </li>
              <li>Service functioning is halted due to a fire;</li>
              <li>Service functioning is halted by the Consumer’s actions;</li>
              <li>
                Service functioning is halted by targeted actions of criminality
                such as incoming / outgoing (D)DoS attacks.
              </li>
              <li>
                Service functioning is halted due to scheduled Maintenance;
              </li>
            </ul>
          </div>
          <p className="py-1 text-muted-foreground">
            {`When and or if the Universal Service Guarantee goes below it’s promised percentage calculated from machine deployment on the Status Page, per machine, per service, shall the Providing Party give a compensation of Credit on the billing panel totaling to 50% of the previously billed amount on said service.`}
          </p>
        </div>
      </div>
    </>
  );
}
