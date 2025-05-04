"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  const { t } = useLanguage()

  // Auto-close the dialog after 5 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <DialogTitle className="text-center text-2xl">{t("success.title")}</DialogTitle>
          <DialogDescription className="text-center text-base">{t("success.message")}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={() => onOpenChange(false)} className="bg-sky-600 hover:bg-sky-700">
            {t("success.close")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
