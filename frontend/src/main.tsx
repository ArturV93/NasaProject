import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css';
import './styles/index.css';
import { StrictMode } from "react";
import Router from "./router/index.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
)
