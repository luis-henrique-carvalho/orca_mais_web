export const appConfig = {
  name: "App Name",
  description: "App Description",
  logo: "/logo.png",
  version: "1.0.0", // Versão do app
  author: "Nome do Autor ou Empresa",
  website: "https://seusite.com", // Site institucional
  supportEmail: "suporte@seusite.com", // Contato de suporte

  locale: "pt-BR", // Localização padrão
  availableLocales: ["pt-BR", "en-US"], // Idiomas suportados
  currency: "BRL", // Moeda padrão
  apiBaseUrl: "https://api.seusite.com", // URL base da API
  features: {
    enableOpenBanking: true,
    enableBiometrics: true,
    enableNotifications: true,
  },
  privacyPolicyUrl: "/privacidade",
  termsOfServiceUrl: "/termos",
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=seuapp",
    ios: "https://apps.apple.com/app/id123456789",
  },
  analytics: {
    googleAnalyticsId: "UA-XXXXXX-X",
    sentryDsn: "https://xxxx@sentry.io/xxxx",
  },
};
