import React, { ReactElement } from 'react'

interface IPanel {
    children: ReactElement | null
}

export default function PanelLayout({children}: IPanel) {
  return (
    <div className='panel'>
        { children }
    </div>
  )
}
