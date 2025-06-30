import React from 'react'
import Navbar from "./Navbar"
import { LayoutProps } from "@/types/Layout"

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
