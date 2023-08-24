
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })


const AboutPage = () => {
    return (
        <>
            <MainLayout>

                <h1>
                    About Page
                </h1>

                <h1>
                Ir a <Link href="/">Home</Link>
                </h1>

                <div className="">
                <p>
                    Get started by editing&nbsp;
                    <code className="">pages/about.tsx</code>
                </p>
                </div>
            </MainLayout>
        </>
    )
}

export default AboutPage
