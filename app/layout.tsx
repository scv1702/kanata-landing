import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "카나타 - 일본어 회화 연습 서비스",
  icons: {
    icon: "/logo-icon.png",
  },
  description:
    "일상 생활 속에서 귀여운 캐릭터와 이야기하며 일본어 회화 연습을 마스터해요.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <LanguageProvider>{children}</LanguageProvider>
          </Suspense>
        </ThemeProvider>
        {/* Add Google Analytics */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
