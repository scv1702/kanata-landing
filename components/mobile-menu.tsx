"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { MobileLanguageSwitcher } from "@/components/mobile-language-switcher"
import { trackEnrollClick } from "@/lib/analytics"

interface MobileMenuProps {
  onEnrollClick: () => void
}

export function MobileMenu({ onEnrollClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const closeMenu = () => setIsOpen(false)

  const handleEnrollClick = (source: string) => {
    trackEnrollClick(source)
    closeMenu()
    onEnrollClick()
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-foreground">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="text-xl font-bold">Kanata</div>
            <Button variant="ghost" size="icon" onClick={closeMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="grid gap-2 p-4">
            {/* Navigation tabs removed */}

            <div className="mt-4 space-y-2">
              {/* Login button removed */}
              <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={() => handleEnrollClick("mobile_start")}>
                {t("nav.startLearning")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
