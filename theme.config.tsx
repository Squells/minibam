import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Minibam</span>,
  search: {
    placeholder: 'Поиск'
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: ''
  },
  footer: {
    text: <span>{new Date().getFullYear()} © Minibam documentation by <a href="https://vk.com/squells" target="_blank">Radice</a>.</span>,
  },
}

export default config
