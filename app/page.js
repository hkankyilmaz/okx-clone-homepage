import Image from 'next/image'

import SectionsOne from './_components/sections/SectionsOne'
import SectionTwo from './_components/sections/SectionTwo'
import SectionThree from './_components/sections/SectionThree'
import SectionFour from './_components/sections/SectionFour'
import SectionFive from './_components/sections/SectionFive'
import SectionSix from './_components/sections/SectionSix'


export default function Home() {
  return (
    <main className="px-8px md:px-[12px] lg:px-[calc(50%-480px)] xl:px-[calc(50%-624px)]">
      <SectionsOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  )
}
