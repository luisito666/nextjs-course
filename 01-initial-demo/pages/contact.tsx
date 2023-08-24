
import Link from 'next/link'
import { Inter } from 'next/font/google'


import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <MainLayout>

        <h1> Contact Page </h1>

        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>

        <div className="">
          <p>
            Get started by editing&nbsp;
            <code className="">pages/contact.tsx</code>
          </p>
          </div>
      </MainLayout>
    </>
  )
}
