import Image from 'next/image'

import SectionsOne from './_components/sections/SectionsOne'

export default function Home() {
  return (
    <main className="px-8px md:px-[12px] lg:px-[calc(50%-480px)] xl:px-[calc(50%-624px)]">
      <SectionsOne />

    </main>
  )
}
