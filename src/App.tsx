import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import CookieBanner from "./components/feature/CookieBanner";
import ScrollToTop from "./components/feature/ScrollToTop";
import { Suspense } from "react";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-8 h-8 border-4 border-navy-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <AppRoutes />
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;