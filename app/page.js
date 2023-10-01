import Image from 'next/image'

import SectionsOne from './_components/sections/SectionsOne'
import SectionTwo from './_components/sections/SectionTwo'
import SectionThree from './_components/sections/SectionThree'


export default function Home() {
  return (
    <main className="px-8px md:px-[12px] lg:px-[calc(50%-480px)] xl:px-[calc(50%-624px)]">
      <SectionsOne />
      <SectionTwo />
      <SectionThree />

    </main>
  )
}
