import type { RouteObject } from "react-router-dom";

import LeistungDetailPage from "../pages/leistungen/detail/page";

import Home from "../pages/home/page";
import LeistungenPage from "../pages/leistungen/page";
import StandortePage from "../pages/standorte/page";
import StadtDetailPage from "../pages/staedte/detail/page";
import FAQPage from "../pages/faq/page";
import KontaktPage from "../pages/kontakt/page";
import DankePage from "../pages/danke/page";
import NotFoundPage from "../pages/not-found/page";
import ImpressumPage from "../pages/impressum/page";
import DatenschutzPage from "../pages/datenschutz/page";
import VorteilePage from "../pages/vorteile/page";
import UnterlagenPage from "../pages/unterlagen/page";
import BlogPage from "../pages/blog/page";
import BlogAutoAnmeldenLuenenPage from "../pages/blog/auto-anmelden-luenen/page";
import BlogKfzZulassungLuenenKostenPage from "../pages/blog/kfz-zulassung-luenen-kosten-2026/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/vorteile",
    element: <VorteilePage />,
  },
  {
    path: "/unterlagen",
    element: <UnterlagenPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/auto-anmelden-luenen",
    element: <BlogAutoAnmeldenLuenenPage />,
  },
  {
    path: "/blog/kfz-zulassung-luenen-kosten-2026",
    element: <BlogKfzZulassungLuenenKostenPage />,
  },
  {
    path: "/leistungen",
    element: <LeistungenPage />,
  },
  {
    path: "/leistungen/:slug",
    element: <LeistungDetailPage />,
  },
  {
    path: "/standorte",
    element: <StandortePage />,
  },
  {
    path: "/kfz-zulassung/:slug",
    element: <StadtDetailPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/kontakt",
    element: <KontaktPage />,
  },
  {
    path: "/danke",
    element: <DankePage />,
  },
  {
    path: "/impressum",
    element: <ImpressumPage />,
  },
  {
    path: "/datenschutz",
    element: <DatenschutzPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;