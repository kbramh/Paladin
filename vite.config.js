import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        contactUs: "pages/contactUs.html",
        reportFraud: "pages/reportFraud.html",
        reportFraudForm: "pages/deeper-pages/reportFraudWebReferralForm.html",
        communityRules: "pages/communityRules.html",
        faqs: "pages/faqs.html",
      },
    },
  },
  plugins: [react()],
});
