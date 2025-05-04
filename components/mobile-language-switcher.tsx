"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

export function MobileLanguageSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { language, setLanguage, t } = useLanguage()

  const languageNames: Record<Language, string> = {
    en: "English",
    ja: "日本語",
    ko: "한국어",
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (onSelect) onSelect()
  }

  return (
    <div className="py-2">
      <p className="text-lg font-medium mb-2">{t("nav.language")}</p>
      <div className="grid gap-1 pl-2">
        {Object.entries(languageNames).map(([code, name]) => (
          <button
            key={code}
            className={`py-1 text-left text-base hover:text-sky-600 ${language === code ? "text-sky-600 font-medium" : ""}`}
            onClick={() => handleLanguageChange(code as Language)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}
