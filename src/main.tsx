import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import {TonConnectUIProvider} from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TonConnectUIProvider
                manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
                uiPreferences={{theme: 'SYSTEM'}}
            >
                <App/>
            </TonConnectUIProvider>
        </BrowserRouter>

    </React.StrictMode>,
)
