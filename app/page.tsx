import {
  GlobeIcon,
  ArrowRightIcon,
  EyeNoneIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import { ModeToggle } from "./components/ModeToggle";
import WorldMapSection from "./components/WorldMapSection";
import CustomersSection from "./components/CustomersSection";
import SupportCard from "./components/SupportCard";
import MostPowerful from "./components/MostPowerful";
import Divider from "./components/Divider";
import FeaturesSection from "./components/FeaturesSection";
import GameSection from "./components/GameSection";
import WebSection from "./components/OtherSection";

function SectionWithGrid({ children }: { children: React.ReactNode }) {
  const gridBackgroundStyle = {
    position: "absolute" as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px),
      linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
    backgroundSize: "64px 64px",
    zIndex: -1, // to ensure it stays behind other content
  };

  return (
    <div className="relative">
      <div style={gridBackgroundStyle}></div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MostPowerful />
      <SectionWithGrid>
        <Divider />

        <GameSection />
        <WebSection />

        <div className="py-12" />
      </SectionWithGrid>
      <FeaturesSection />
      <div className="py-12" />
      <WorldMapSection />
      <div className="py-6" />
      <SupportCard />
    </>
  );
}
