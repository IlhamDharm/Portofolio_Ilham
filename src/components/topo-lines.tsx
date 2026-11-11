"use client"

import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function TopoLines() {
  const isClient = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)

  if (!isClient) {
    return null
  }

  return (
    <div
      data-aifx="topo-lines"
      className="absolute inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      suppressHydrationWarning
    />
  )
}
