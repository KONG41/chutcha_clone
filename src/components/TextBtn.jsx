import React from 'react'
import { useTranslation } from 'react-i18next';
const TextBtn = ({ text }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="store-btn text-btn">
      <span className="text">{t(text)}</span>
    </div>
  )
}

export default TextBtn