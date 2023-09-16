import React, { FC, ReactNode } from 'react'

interface Props{
    children: ReactNode;
}

export const AppLayout: FC<Props> = ({children}) => {
  return (
    <div className="min-h-screen">
        <nav className="bg-red-500 py-6 px-3 mb-6">
            <h1 className="text-3xl font-bold text-white">Calcular Población</h1>
        </nav>
        {children}
    </div>
  )
}
