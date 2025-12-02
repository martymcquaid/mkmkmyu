import React from 'react'
import { Link } from 'react-router-dom'

type Service = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const BarberChairIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-label="barber chair icon">
    <path d="M8 52h10a6 6 0 0 0 6-6V32h-6v14H8v6Z" fill="#8B1E23"/>
    <path d="M28 34h8v8h-8z" fill="#0A2240"/>
    <path d="M14 20h20a6 6 0 0 1 6 6v2h-32v-2a6 6 0 0 1 6-6Z" fill="#C9A66B"/>
  </svg>
)

const ScissorsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-label="scissors icon">
    <path d="M20 30l8-8-5-5-13 13 5 5 5-5z" fill="#1A1A1A"/>
    <circle cx="50" cy="14" r="4" fill="#1A1A1A"/>
  </svg>
)

const ShavingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-label="razor icon">
    <rect x="14" y="28" width="36" height="10" rx="2" fill="#1A1A1A"/>
    <path d="M12 38h40" stroke="#8B1E23" strokeWidth="4"/>
  </svg>
)

const Services = [
  {
    id: 'haircuts',
    title: 'Haircuts',
    description: 'Traditional cuts, modern styling, precise finishes.',
    icon: <BarberPoleIcon />,
  },
  {
    id: 'beard',
    title: 'Beard Trims',
    description: 'Sharp shaping and grooming with attention to detail.',
    icon: <BeardIcon />,
  },
  {
    id: 'hot-towel',
    title: 'Hot Towel Shave',
    description: 'Relaxing, classic straight-razor shave with steam towels.',
    icon: <ShavingIcon />,
  },
  {
    id: 'skin-fade',
    title: 'Skin Fade',
    description: 'Skin-tight fades for a modern, clean edge.',
    icon: <FadeIcon />,
  },
  {
    id: 'package',
    title: 'Grooming Package',
    description: 'The Gentleman’s package—cut, shave, and style.',
    icon: <PackageIcon />,
  },
]

function BarberPoleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" aria-label="barber pole">
      <path d="M32 4v56" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
      <path d="M16 12h32" stroke="#fff" strokeWidth="8"/>
      <path d="M32 4l-4 12h8l-4-12z" fill="#d4d4d4"/>
      <circle cx="32" cy="32" r="10" fill="#8B1E23"/>
    </svg>
  )
}

function BeardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" aria-label="beard icon">
      <path d="M12 40c6-8 20-8 28-8s16 0 22 8c0 8-6 12-16 12H28c-10 0-16-4-20-12z" fill="#1A1A1A"/>
    </svg>
  )
}

function FadeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" aria-label="fade icon">
      <path d="M8 56h48" stroke="#1A1A1A" strokeWidth="6"/>
      <path d="M8 40h48" stroke="#C9A66B" strokeWidth="6"/>
      <path d="M8 24h48" stroke="#8B1E23" strokeWidth="6"/>
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" aria-label="package icon">
      <rect x="12" y="18" width="40" height="28" rx="4" fill="#1A1A1A"/>
      <path d="M12 30h40" stroke="#C9A66B" strokeWidth="4"/>
      <path d="M32 18v34" stroke="#fff" strokeWidth="2"/>
    </svg>
  )
}

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="h-8 w-8 bg-[#C9A66B] rounded-full inline-block" aria-label="logo"/>
            <span className="font-semibold tracking-wide" style={{ fontFamily: 'Georgia, 