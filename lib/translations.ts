export type Language = "en" | "ja" | "ko"

export type TranslationKey =
  | "nav.features"
  | "nav.pricing"
  | "nav.faq"
  | "nav.language"
  | "nav.login"
  | "nav.startLearning"
  | "hero.title"
  | "hero.description"
  | "hero.startLearning"
  | "hero.learnMore"
  | "features.title"
  | "features.description"
  | "features.contextual.title"
  | "features.contextual.description"
  | "features.progressive.title"
  | "features.progressive.description"
  | "features.live.title"
  | "features.live.description"
  | "cta.title"
  | "cta.description"
  | "cta.emailLabel"
  | "cta.emailPlaceholder"
  | "cta.commentLabel"
  | "cta.commentPlaceholder"
  | "cta.commentOptional"
  | "cta.signUp"
  | "cta.submitting"
  | "cta.noCreditCard"
  | "success.title"
  | "success.message"
  | "success.close"
  | "footer.rights"
  | "footer.terms"
  | "footer.privacy"
  | "footer.contact"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.language": "Language",
    "nav.login": "Log in",
    "nav.startLearning": "Pre-register",
    "hero.title": "Kanata-chan Makes You Actually Speak Japanese",
    "hero.description": "Practice exciting Japanese conversations with characters.",
    "hero.startLearning": "Pre-register Now",
    "hero.learnMore": "Learn More",
    "features.title": "Learn Japanese the Natural Way",
    "features.description":
      "Kanata helps you master conversational Japanese through interactive dialogues with AI characters in realistic scenarios.",
    "features.contextual.title": "Various Scenarios",
    "features.contextual.description":
      'You might be able to say "I will protect this world!" in Japanese, but can you say "Can I have chopsticks please?" at a convenience store? Learn practical everyday expressions.',
    "features.progressive.title": "Progressive Learning",
    "features.progressive.description": "Start with the basics and level up as you go.",
    "features.live.title": "Live Calls",
    "features.live.description": "Connect emotionally through real-time calls with your favorite characters.",
    "cta.title": "Ready to Start Your Japanese Journey with Kanata?",
    "cta.description": "Pre-register now for a free trial.",
    "cta.emailLabel": "Email Address",
    "cta.emailPlaceholder": "Enter your email",
    "cta.commentLabel": "Comments or Feedback",
    "cta.commentPlaceholder": "What are you most interested in learning?",
    "cta.commentOptional": "Optional",
    "cta.signUp": "Pre-register",
    "cta.submitting": "Submitting...",
    "cta.noCreditCard": "Get notified as soon as we launch.",
    "success.title": "Thank You!",
    "success.message": "Your submission was successful. We'll be in touch soon!",
    "success.close": "Close",
    "footer.rights": "© 2025 Kanata.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
  },
  ja: {
    "nav.features": "機能",
    "nav.pricing": "料金",
    "nav.faq": "よくある質問",
    "nav.language": "言語",
    "nav.login": "ログイン",
    "nav.startLearning": "事前登録",
    "hero.title": "実際に話せるようになるカナタちゃん",
    "hero.description": "キャラクターとワクワクする日本語会話を練習しましょう。",
    "hero.startLearning": "今すぐ事前登録",
    "hero.learnMore": "詳細を見る",
    "features.title": "自然な方法で日本語を学ぶ",
    "features.description":
      "カナタは、リアルなシナリオでAIキャラクターとの対話を通じて、会話日本語をマスターするのに役立ちます。",
    "features.contextual.title": "様々なシナリオ",
    "features.contextual.description":
      "「この世界は私が守ってみせる！」と日本語で言えるかもしれませんが、コンビニで「お箸をください」と言えますか？実用的な日常表現を学びましょう。",
    "features.progressive.title": "段階的な学習",
    "features.progressive.description": "基本から始めて、徐々にレベルアップしていきましょう。",
    "features.live.title": "ライブコール",
    "features.live.description": "お気に入りのキャラクターとリアルタイムの通話で感情的につながりましょう。",
    "cta.title": "カナタと一緒に日本語の旅を始める準備はできましたか？",
    "cta.description": "今すぐ無料トライアルに事前登録しましょう。",
    "cta.emailLabel": "メールアドレス",
    "cta.emailPlaceholder": "メールアドレスを入力",
    "cta.commentLabel": "コメントやフィードバック",
    "cta.commentPlaceholder": "どのような学習に興味がありますか？",
    "cta.commentOptional": "任意",
    "cta.signUp": "事前登録する",
    "cta.submitting": "送信中...",
    "cta.noCreditCard": "リリース後すぐにお知らせを受け取りましょう。",
    "success.title": "ありがとうございます！",
    "success.message": "送信が完了しました。すぐにご連絡いたします！",
    "success.close": "閉じる",
    "footer.rights": "© 2025 Kanata.",
    "footer.terms": "利用規約",
    "footer.privacy": "プライバシーポリシー",
    "footer.contact": "お問い合わせ",
  },
  ko: {
    "nav.features": "기능",
    "nav.pricing": "가격",
    "nav.faq": "자주 묻는 질문",
    "nav.language": "언어",
    "nav.login": "로그인",
    "nav.startLearning": "사전 예약",
    "hero.title": "당신을 말하게 하는 카나타쨩 ❤️",
    "hero.description": "캐릭터와 함께 두근두근 일본어 대화를 연습해보세요.",
    "hero.startLearning": "지금 사전 예약하기",
    "hero.learnMore": "더 알아보기",
    "features.title": "덕질하면서 일본어 배우기",
    "features.description":
      "카나타와 함께 귀여운 캐릭터와 대화하며 일본어 회화를 연습해봐요!",
    "features.contextual.title": "다양한 시나리오",
    "features.contextual.description":
      '일본어로 "이 세상은 내가 지키고 말거야!"는 멋지게 말할 수 있지만, 편의점에서 "젓가락 주세요"라고 말할 수 있으신가요? 실전 일상 표현을 배워보세요.',
    "features.progressive.title": "단계적 학습",
    "features.progressive.description": "간단한 것부터 시작하여 레벨을 올려보세요.",
    "features.live.title": "라이브 통화",
    "features.live.description": "좋아하는 캐릭터와 실시간 통화를 하며 감정을 교류해보세요.",
    "cta.title": "카나타와 함께 일본어 여정을 시작할 준비가 되셨나요?",
    "cta.description": "지금 바로 무료 체험을 사전 예약해보세요.",
    "cta.emailLabel": "이메일 주소",
    "cta.emailPlaceholder": "이메일 주소 입력",
    "cta.commentLabel": "의견이나 피드백",
    "cta.commentPlaceholder": "어떤 학습에 가장 관심이 있으신가요?",
    "cta.commentOptional": "선택 사항",
    "cta.signUp": "사전 예약하기",
    "cta.submitting": "제출 중...",
    "cta.noCreditCard": "출시 후 소식을 바로 받아보세요.",
    "success.title": "감사합니다!",
    "success.message": "제출이 성공적으로 완료되었습니다. 곧 연락드리겠습니다!",
    "success.close": "닫기",
    "footer.rights": "© 2025 Kanata.",
    "footer.terms": "이용약관",
    "footer.privacy": "개인정보 보호정책",
    "footer.contact": "문의하기",
  },
}
