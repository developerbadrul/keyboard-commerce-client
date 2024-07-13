import React from 'react'
import { Link } from 'react-router-dom'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Link to="/">
      <svg aria-hidden="true" viewBox="0 0 150 60" {...props}>
        <rect width="150" height="60" rx="10" ry="10" fill="#2563EB" />
        <rect x="10" y="20" width="130" height="20" rx="4" ry="4" fill="#FFFFFF" />
        <g fill="#0F172A">
          <rect x="12" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="26" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="40" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="54" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="68" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="82" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="96" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="110" y="22" width="10" height="10" rx="2" ry="2" />
          <rect x="124" y="22" width="10" height="10" rx="2" ry="2" />
        </g>
        <text x="10" y="55" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
          Keyboard Commerce
        </text>
      </svg>
    </Link>
  )
}
