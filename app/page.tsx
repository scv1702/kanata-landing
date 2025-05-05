"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageCircle, Star, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { EmailForm } from "@/components/email-form";
import { trackEnrollClick } from "@/lib/analytics";
import { useRef } from "react";

export default function LandingPage() {
  const { t } = useLanguage();
  const emailInputRef = useRef<HTMLDivElement>(null);

  // Function to scroll to email form
  const scrollToEmailForm = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: "smooth" });

      // Focus the email input after scrolling
      setTimeout(() => {
        const emailInput = document.getElementById("email-input");
        if (emailInput) emailInput.focus();
      }, 800); // Delay to allow scroll to complete
    }
  };

  const handleEnrollClick = (source: string) => {
    trackEnrollClick(source);
    scrollToEmailForm();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="Kanata Logo"
              width={150}
              height={150}
              className="rounded-md object-cover"
            />
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Login button removed */}
            <Button
              size="sm"
              className="bg-[#6568ff] hover:bg-[#4c4ed9]"
              onClick={() => handleEnrollClick("header_start")}
            >
              {t("nav.startLearning")}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 lg:py-5 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-white pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* Hero Image */}
              <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto order-first lg:order-last">
                <Image
                  src="/kanata.png"
                  alt="Kanata character"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t("hero.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-[#6568ff] hover:bg-[#4c4ed9]"
                    onClick={() => handleEnrollClick("hero_start")}
                  >
                    {t("hero.startLearning")}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#6568ff] hover:bg-gray-100 text-[#6568ff] hover:text-[#6568ff]"
                    onClick={() => handleEnrollClick("hero_learn")}
                  >
                    {t("hero.learnMore")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#667eea] to-[#764ba2]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-[#f0f0ff] font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("features.title")}
                </h2>
                <p className="max-w-[900px] text-[#f0f0ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("features.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col h-full justify-start items-start space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#6568ff]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    {t("features.contextual.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.contextual.description")}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col h-full justify-start items-start space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#6568ff]">
                  <Star className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    {t("features.progressive.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.progressive.description")}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col h-full justify-start items-start space-y-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#6568ff]">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    {t("features.live.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("features.live.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t"
          ref={emailInputRef}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("cta.title")}
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("cta.description")}
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <EmailForm />
                <p className="text-xs text-muted-foreground text-center">
                  {t("cta.noCreditCard")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0 bg-sky-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
