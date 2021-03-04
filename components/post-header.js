import style from './markdown-styles.module.scss'

export default function PostHeader({ title }) {
  return (
    <div className={style.postHeader}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xs-12 text-center">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
