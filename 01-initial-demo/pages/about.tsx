
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

                <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing&nbsp;
                    <code className={'code'}>pages/about.tsx</code>
                </p>

            </MainLayout>
        </>
    )
}

export default AboutPage
