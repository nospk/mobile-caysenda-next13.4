import type { FC } from 'react'
import styles from './SearchCard.module.css'
import { BsSearch } from 'react-icons/bs'

interface Search {
  keywords: string[]
}

const MenuCardCol: FC<Search> = props => {
  const list = props.keywords.map(keyword => {
    return (
      <span key={keyword} className={styles.span}>
        {keyword}
      </span>
    )
  })
  return (
    <div className={styles.search_card}>
      <div className={styles.sticky_wrapper}>
        <span className={styles.search_icon}>
          <BsSearch className='ml-auto mr-auto' />
        </span>
        <span className={styles.search_text}>Tìm Kiếm Nhiều Nhất</span>
      </div>
      {list}
    </div>
  )
}

export default MenuCardCol
