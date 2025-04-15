import React from 'react'

interface ContainerLayoutProps {
    children: React.ReactNode
}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                {children}
            </div>
        </div>

    )
}

export default ContainerLayout
