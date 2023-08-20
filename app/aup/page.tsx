export default function terms() {
  return (
    <>
      <div className="container">
        <div className="justify-between">
          <div className="mt-20 font-semibold text-3xl sm:text-5xl">
            Acceptable Usage Policy
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Amended on August 20, 2023
          </p>
        </div>
        <div className="justify-between mt-20">
          <p className="font-semibold text-xl">GENERAL PROHIBITIONS</p>
          <p className="py-3 text-muted-foreground">
            {`Utilizing services within Bun (hereinafter “Bun”, “we”, “our”) for fraudulent activities is expressly forbidden. Prohibited usage includes, but isn't restricted to, illegal activities, cryptocurrency “mining,” and the unauthorized use, distribution, or hosting of copyrighted materials.`}
          </p>
          <p className="font-semibold text-xl mt-4">INTENDED USAGE</p>
          <p className="py-3 text-muted-foreground">{`Our services are provided for specific purposes, and by purchasing a service, the client affirms understanding and agreement to use the service accordingly. Any deviation from the intended use may result in suspension or termination of service.`}</p>
          <p className="font-semibold text-xl mt-4">GAME SERVERS</p>
          <p className="py-3 text-muted-foreground">
            {`The provided service is explicitly for hosting a Game server. Any use beyond this purpose may lead to termination or suspension of the service. Prohibited activities include:`}
          </p>
          <div className="text-muted-foreground">
            <ul className="list-inside list-decimal pl-5">
              <li>Hosting non-game content.</li>
              <li>Conducting cyberattacks.</li>
              <li>Creating undue load on the server.</li>
            </ul>
          </div>
          <p className="font-semibold text-xl mt-4">OTHER SERVERS</p>
          <p className="py-3 text-muted-foreground">{`Services must comply with applicable laws and regulations in California and the United States. Prohibited activities include, but are not limited to:`}</p>
          <div className="text-muted-foreground">
            <ul className="list-inside list-decimal pl-5">
              <li>{`"Dstating": Testing cyberattack capabilities or defenses.`}</li>
              <li>
              {`"Tunneling": Rerouting network traffic outside of Bun’s network.`}
              </li>
              <li>{`"Portscanning": Scanning remote network entry points.`}</li>
              <li>Network/Cyber Attacks against Bun or third parties.</li>
              <li>
                Excessive Use: Overloading the hardware or network resources.
              </li>
              <li>
                Malicious Content: Hosting or distributing illegal or harmful
                content.
              </li>
              <li>
                Malicious Applications: Hosting or distributing illegal
                software.
              </li>
              <li>Mining: Using the service to mine cryptocurrencies.</li>
            </ul>
          </div>
          <p className="font-semibold text-xl mt-4">VIOLATION BY ASSOCIATION</p>
          <p className="py-3 text-muted-foreground">{`Engaging in fraudulent or abusive activities elsewhere may result in termination of services with Bun, as determined at our discretion.`}</p>

          <p className="font-semibold text-xl mt-4">MINECRAFT EULA ACCEPTANCE</p>
          <p className="py-3 text-muted-foreground">{`By using the Minecraft service, clients agree to adhere to the Minecraft EULA, available at https://account.mojang.com/documents/minecraft_eula.`}</p>

          <p className="font-semibold text-xl mt-4">TERMINATION</p>
          <p className="py-3 text-muted-foreground">{`Either party may terminate the service and this contract at their discretion.`}</p>

          <p className="font-semibold text-xl mt-4">REPORTING ABUSIVE ACTIVITY</p>
          <p className="py-3 text-muted-foreground">{`To report abuse, please email abuse+bun5@domain-of-this-website. A web form is also available for those who prefer to communicate through our website.`}</p>
        </div>
      </div>
    </>
  );
}
