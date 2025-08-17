import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4 space-y-6">
            <div className="w-full max-w-4xl space-y-6">
                {children}
            </div>
        </div>
    )
}