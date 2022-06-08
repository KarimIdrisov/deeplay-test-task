import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DatabaseInstance } from './database/database'
import { HashRouter, Route } from "react-router-dom";
import { Home } from './pages/home/home'
import {Login} from "./pages/login/login";

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

(async () => {
  await DatabaseInstance.initialize()

  root.render(
    <StrictMode>
        <HashRouter>
            <div>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </div>
        </HashRouter>
    </StrictMode>
  )
})()
