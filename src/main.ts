import React from 'react'
import { createRoot } from 'react-dom/client'

import { Win } from '@/win'

import { App } from './app'

import 'uno.css'
import '@/style/index.less'

async function loadAppConfig() {
  try {
    const res = await fetch('/app.json')
    const data = await res.json()
    Win.appConfig = data
  }
  catch (e) {
    alert(e)
    throw e
  }
}

async function setupApp() {
  await loadAppConfig()

  const root = document.querySelector('#app')
  createRoot(root).render(React.createElement(App))
}

setupApp().then()
