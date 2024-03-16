import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
  AdaptivityProvider,
  ConfigProvider,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const container = document.getElementById('root');
const root = createRoot(container!); 

root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
);