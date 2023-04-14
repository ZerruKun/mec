import React from 'react'
import styles from "./ModalAside.module.css"
import store from '../../../store/store'
import { observer } from 'mobx-react-lite'

const ModalAside = observer(() => {
  return (
    <aside className={styles.aside}>
        <ul className={styles.asideList}>
            <li className={styles.asideItem}>
              Фамилия Имя Отчество
            </li>
            <li className={styles.asideItem}>
              <span className={store.traningStage === 2 ? `${styles.paragraph} ${styles.activeParagraph}` : `${styles.paragraph}`}>Профиль компании</span>
            </li>
            <li className={styles.asideItem}>
              <span className={store.traningStage === 3 ? `${styles.paragraph} ${styles.activeParagraph}` : `${styles.paragraph}`}>Тест экспортной готовности</span>
            </li>
            <li className={styles.asideItem}>
              <span className={store.traningStage === 4 ? `${styles.paragraph} ${styles.activeParagraph}` : `${styles.paragraph}`}>Услуги</span>
            </li>
            <li className={styles.asideItem}>
              <span className={store.traningStage === 5 ? `${styles.paragraph} ${styles.activeParagraph}` : `${styles.paragraph}`}>Центр поддержки поставщиков услуг</span>
            </li>
            <li className={styles.asideItem}>
              <span className={store.traningStage === 6 ? `${styles.paragraph} ${styles.activeParagraph}` : `${styles.paragraph}`}>Записи</span>
            </li>
            <li className={styles.asideItem}>
              <span className={styles.paragraph}>Выход</span>
            </li>
        </ul>
    </aside>
  )
})

export default ModalAside