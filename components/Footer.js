import { useTranslation } from 'next-i18next'
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

export const Footer = ({ isHomePage }) => {
  const { t } = useTranslation('footer')

  return (
    <footer className={styles.footer}>
      <div className="container">
        {isHomePage && <p className={`text-center text-md-left ${styles.text}`}>{t('home-footer')}</p>}
        <div className="row text-center text-md-left">
          <div className={`col-md-6 order-md-1 text-md-right ${styles.copy}`}>
            Made with ❤ © PaulCamper GmbH
          </div>
          <div className="col-md-6 order-md-0">
            <Link href="/docs/privacy-policy">
              {t('to-privacy-policy')}
            </Link>
            <Link href="/docs/legal-notice">
              {t('to-legal-notice')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
