import Image from 'next/image'
import HomeContent from '@/components/Home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <HomeContent/>
    </main>
  )
}
