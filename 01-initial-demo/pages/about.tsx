import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'


const AboutPage = () => {
    return (
        <>
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
        </>
    )
}

export default AboutPage

AboutPage.getLayout = function getLayout( page : JSX.Element ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}