import react from '@vitejs/plugin-react'

import { definePlugin } from '../../../build/type/vite'

export default definePlugin(() => {
  return react({})
})
