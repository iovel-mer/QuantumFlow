"use client"

import type React from "react"
import Link from "next/link"
import { Rocket, UserCircle2 } from "lucide-react"

export function MinHeader() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between border-b border-gray-100">
      <Link
        href="/"
        className="text-3xl font-bold text-gray-800 tracking-wide hover:text-indigo-600 transition-colors"
      >
        Quantum<span className="text-indigo-500">Flow</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50 transition-all duration-200"
          >
            <Rocket size={16} />
            Sign In
          </button>
        </Link>
        <Link href="/register">
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow"
          >
            <UserCircle2 size={16} />
            Join Now
          </button>
        </Link>
      </div>
    </nav>
  )
}
