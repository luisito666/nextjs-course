import { FC, ReactNode } from 'react'

interface DarkLayoutProps {
    children?: ReactNode
}

export const DarkLayout: FC<DarkLayoutProps> = ({children}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px',
            paddingInline: '10px'
        }}>
            <h3>Dark Layout</h3>
            <div>
                { children }
            </div>
        </div>
    )
}

