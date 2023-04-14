import React from 'react'
import styles from "./Aside.module.css"
import { NavLink } from 'react-router-dom'

const Aside = (props) => {
  return (
    <aside className={styles.aside}>
        <ul className={styles.asideList}>
            <li className={styles.asideItem}>
              Фамилия Имя Отчество
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="/plug1">Профиль компании</NavLink>
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="./testing">Тест экспортной готовности</NavLink>
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="/plug2">Услуги</NavLink>
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="/plug3">Центр поддержки поставщиков услуг</NavLink>
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="/plug4">Записи</NavLink>
            </li>
            <li className={styles.asideItem}>
              <NavLink className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} to="/plug5">Выход</NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Aside