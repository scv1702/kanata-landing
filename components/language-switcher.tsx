"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languageNames: Record<Language, string> = {
    en: "English",
    ja: "日本語",
    ko: "한국어",
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium hover:text-sky-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{t("nav.language")}</span>
        <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background border z-50">
          <div className="py-1">
            {Object.entries(languageNames).map(([code, name]) => (
              <button
                key={code}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-sky-50 ${language === code ? "text-sky-600 font-medium" : ""}`}
                onClick={() => handleLanguageChange(code as Language)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
