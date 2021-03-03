import { useTranslation } from 'next-i18next'
import styles from '../styles/Footer.module.css'
import Link from "next/link";

export const Footer = ({ isHomePage }) => {

  const { t } = useTranslation('footer')

  return (
    <footer className={styles.footer}>
      <div className="container">
        {isHomePage && <p className={styles.text}>{t('home-footer')}</p>}
        <div className="row">
          <div className="col-md-8">
            <Link href='/second-page'>
              {t('to-second-page')}
            </Link>
            <Link href='/second-page'>
              {t('to-second-page')}
            </Link>
          </div>
          <div className="col-md-4">Made with ❤ © PaulCamper GmbH</div>
        </div>
      </div>
    </footer>
  )
}
