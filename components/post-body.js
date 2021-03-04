import styles from './markdown-styles.module.scss'

export default function PostBody({ content }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className={`col-md-8 offset-md-2 col-xs-12 ${styles.body}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}
