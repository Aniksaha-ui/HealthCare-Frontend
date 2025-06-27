import HeroSection from '@/component/UI/HomePage/HeroSection/HeroSection'
import Specialist from "@/component/UI/HomePage/Specialist/Specialist";

import { Button } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
         <Specialist />

    </div>
  )
}
