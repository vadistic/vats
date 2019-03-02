import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18next } from './i18n'

export const I18nProvider: React.FC = ({ children }) => (
  <I18nextProvider i18n={i18next} children={children} />
)
