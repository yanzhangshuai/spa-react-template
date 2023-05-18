import ThemeChange from '@/component/theme'

import type { ReactNode } from 'react'

interface ConfigProviderProps {
  children: ReactNode
}

export default function ConfigProvider({ children }: ConfigProviderProps) {
  return (
        <div className="config-provider bg-container wh-screen m-0 text-text overflow-auto">
            <ThemeChange />
            { children }
        </div>
  )
}
