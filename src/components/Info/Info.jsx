import React from 'react'
import styles from "./Info.module.css"
import { Link, NavLink } from 'react-router-dom'
import store from "../../store/store"
import { observer } from 'mobx-react-lite'

const Info = observer(() => {
    return (
        <section className={styles.general}>
            <article className={styles.statistics}>
                <h2>Информация</h2>
                <div className={styles.stats}>
                    <div className={styles.organization}>
                        <span>Наименование организации</span>
                        <span>ИНН: 000000000000</span>
                        <NavLink className={styles.organizationNavLink}>
                            Данные представителя —→
                        </NavLink>
                    </div>
                    <div className={styles.testResults}>
                        <button className={styles.question}>?</button>
                        <div 
                            className={styles.circle}
                            style={store.circleFill()}
                        >
                            <div className={styles.circleText}>
                                {Math.round((100/store.answers.length)*store.answers.filter(el => el === "yes").length)}%
                            </div>
                        </div>
                        <div className={styles.oneMoreTime}>
                            <span>Результаты<br />теста экспортной готовности</span>
                            <Link to="/testing">Пройти ещё раз</Link>
                        </div>
                    </div>
                    <div className={styles.sums}>
                        <div className={styles.sumOne}>
                            <span>Сумма выданных субсидий</span>
                            <span>100 000 000 ₽</span>
                        </div>
                        <div className={styles.sumTwo}>
                            <span>Сумма привлеченных контрактов</span>
                            <span>100 000 000 ₽</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.additionalServices}>
                <h2>Доступные услуги</h2>
                <ul className={styles.additionalServicesList}>
                    <li className={styles.additionalServicesItem}>
                        <div></div>
                        <span>Возмещение затрат на сертификацию систем менеджмента</span>
                    </li>
                    <li className={styles.additionalServicesItem}>
                        <div></div>
                        <span>Возмещение затрат на сертификацию систем менеджмента</span>
                    </li>
                    <li className={styles.additionalServicesItem}>
                        <div></div>
                        <span>Возмещение затрат на сертификацию систем менеджмента</span>
                    </li>
                    <li className={styles.additionalServicesItem}>
                        <div></div>
                        <span>Возмещение затрат на сертификацию систем менеджмента</span>
                    </li>
                </ul>
            </article>
            <article className={styles.activeCases}>
                <h2>Статус активных обращений</h2>
                <ul className={styles.activeCasesList}>
                    <li className={styles.activeCasesItem}>
                        <div className={styles.activeCasesItemDiscription}>
                            <span>Возмещение затрат на сертификацию систем менеджмента</span>
                            <span>№ 0101201012 от 10.10.2020</span>
                        </div>
                        <span className={styles.activeCasesItemData}>19.11.2020</span>
                        <span className={`${styles.activeCasesItemStatus} ${styles.ongoingCase}`}>Договор требует подписания электронной подписью</span>
                    </li>
                    <li className={styles.activeCasesItem}>
                        <div className={styles.activeCasesItemDiscription}>
                            <span>Заявка на грант</span>
                            <span>№ 0101201012 от 10.10.2020</span>
                        </div>
                        <span className={styles.activeCasesItemData}>19.11.2020</span>
                        <span className={`${styles.activeCasesItemStatus} ${styles.doneCase}`}>Услуга оказана</span>
                    </li>
                    <li className={styles.activeCasesItem}>
                        <div className={styles.activeCasesItemDiscription}>
                            <span>Заявка на грант</span>
                            <span>№ 0101201012 от 10.10.2020</span>
                        </div>
                        <span className={styles.activeCasesItemData}>19.11.2020</span>
                        <span className={`${styles.activeCasesItemStatus} ${styles.rejectedCase}`}>Отказ</span>
                    </li>
                </ul>
            </article>
        </section>
    )
})

export default Info