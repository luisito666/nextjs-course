import Link from 'next/link'
import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
      <MainLayout>
        <h1> Home Page </h1>

        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>

        <div className="">
          <p>
            Get started by editing&nbsp;
            <code className="">pages/index.tsx</code>
          </p>
          </div>
      </MainLayout>
  )
}
