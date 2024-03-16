import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import { setupStore } from './redux/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container!);
const store = setupStore();

root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AdaptivityProvider>
    </ConfigProvider>
)
