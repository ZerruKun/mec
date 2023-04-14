import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./Header.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
  return (
    <header className={styles.header}>
        <div className={styles.headerTop}>
            <div className={styles.container}>
                <div className={styles.services}>
                    <div className={styles.logo}>
                        <Link to=""><div className={styles.logo1}></div></Link>
                        <div className={styles.line}></div>
                        <Link to=""><div className={styles.logo2}></div></Link>
                    </div>
                    <div className={styles.options}>
                        <ul className={styles.langList}>
                            <li><button className={`${styles.langItem} ${styles.activeLang}`}>RU</button></li>
                            <li><button className={styles.langItem}>EN</button></li>
                        </ul>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><button className={styles.search}></button></li>
                            <li className={styles.menuItem}><button className={styles.chat}></button></li>
                            <li className={styles.menuItem}><button className={styles.profile}></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.headerBottom}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navigationList}>
                        <li>
                            <button 
                                className={styles.navigationItem}
                                onClick={() => store.setAsideVisibality()}
                            >
                            </button>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>Участие в выставках</NavLink>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>Продвижение за рубежом</NavLink>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>Онлайн-экспорт</NavLink>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>Финансовая поддержка</NavLink>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>Дополнительные возможности</NavLink>
                        </li>
                        <li className={styles.navigationItem}>
                            <NavLink className={styles.navlink}>О центре</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
})

export default Header