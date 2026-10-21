import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { EduSmart360 } from "./pages/EduSmart360";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/edusmart360" element={<EduSmart360 />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
