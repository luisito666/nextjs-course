import Link from "next/link";
import { useRouter } from "next/router";

type PropsNavbar = {
    text: string
    href: string
}

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({text, href}: PropsNavbar) => {

    const { asPath } = useRouter()

    return (
        <Link style={ asPath === href ? style : undefined } href={href}>
            { text }
        </Link>
    );
}
 