import React from 'react'
import { useTranslation } from 'react-i18next';
const StoreBtn = ({ icon, text }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="store-btn">
      <span className="icon">{icon}</span>
      <span className="text">{t(text)}</span>
    </div>
  )
}

export default StoreBtn