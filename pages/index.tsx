import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen flex bg-purple-500">
      <h1 className="text-3xl text-bold">MyCompi</h1>
      <h2 className="text-white text-xl">Todas las herramientas para compartir piso, en una sola app</h2>
    </div>
  )
}