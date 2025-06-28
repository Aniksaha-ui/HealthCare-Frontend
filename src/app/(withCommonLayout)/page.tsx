import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";

import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Specialist />
      <TopRatedDoctors />
    </div>
  );
}
