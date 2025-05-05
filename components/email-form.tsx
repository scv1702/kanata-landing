"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { trackEmailSubmit } from "@/lib/analytics"
import { useToast } from "@/hooks/use-toast"
import { SuccessDialog } from "@/components/success-dialog"
import { useSearchParams } from "next/navigation"

export function EmailForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const searchParams = useSearchParams();

  const validEmail = () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return ;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    validEmail();
    setIsSubmitting(true);

    try {
      // Track the email submission event
      trackEmailSubmit(email)
      
      const campaign = searchParams.get("utm_campaign");

      // Submit email and comment using the API route
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, comment, campaign }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Show success dialog instead of toast
        setShowSuccessDialog(true)
        setEmail("")
        setComment("")
      } else {
        console.error("API error:", data)
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email-input">{t("cta.emailLabel")}</Label>
          <Input
            type="email"
            placeholder={t("cta.emailPlaceholder")}
            className="w-full border-[#6568ff] focus-visible:ring-[#4c4ed9]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            id="email-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment-input">{t("cta.commentLabel")}</Label>
          <Textarea
            placeholder={t("cta.commentPlaceholder")}
            className="w-full min-h-[80px] border-[#6568ff] focus-visible:ring-[#4c4ed9]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={isSubmitting}
            id="comment-input"
          />
          <p className="text-xs text-muted-foreground">{t("cta.commentOptional")}</p>
        </div>

        <Button type="submit" className="w-full bg-[#6568ff] hover:bg-[#4c4ed9]" disabled={isSubmitting}>
          {isSubmitting ? t("cta.submitting") : t("cta.signUp")}
        </Button>
      </form>

      {/* Success Dialog */}
      <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
    </>
  )
}
