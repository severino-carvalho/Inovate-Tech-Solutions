import { ReactNode } from 'react'

export default function LayoutProjetos({ children }: { children: ReactNode }) {
  return <div className="h-full w-full px-16">{children}</div>
}
