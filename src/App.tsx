import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import { useAutoScrollOnRouteChange } from "./hooks/useAutoScrollOnRouteChange";
import BlogPost from "./pages/BlogPost";
import Domains from "./pages/Domains";
import Hosting from "./pages/Hosting";
import KnowledgeAndNews from "./pages/KnowledgeAndNews";
import OnlineStores from "./pages/OnlineStores";
import VpsHosting from "./pages/VpsHosting";
import WordPress from "./pages/WordPress";
import type { RouteConfig } from "./types";

const routes: RouteConfig[] = [
  { path: "/", element: <KnowledgeAndNews /> },
  { path: "/hosting", element: <Hosting /> },
  { path: "/domains", element: <Domains /> },
  { path: "/wordpress", element: <WordPress /> },
  { path: "/onlinestores", element: <OnlineStores /> },
  { path: "/vpshosting", element: <VpsHosting /> },
  { path: "/blog", element: <BlogPost /> },
];

function App() {
  useAutoScrollOnRouteChange();

  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
