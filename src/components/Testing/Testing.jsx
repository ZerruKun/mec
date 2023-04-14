import React from 'react'
import { Link } from 'react-router-dom'
import styles  from "./Testing.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const Testing = observer(() => {
  return (
    <section className={styles.general}>
      <h2>Тест экспортной готовности</h2>
      <div className={styles.testResults}>
        <button className={styles.question}>?</button>
        <div className={styles.circle} style={store.circleFill()}>
        </div>
        <div className={styles.results}>
          <span>Результаты<br />теста экспортной готовности</span>
          <div className={styles.circleText}>
            {Math.round((100/store.answers.length)*store.answers.filter(el => el === "yes").length)}%
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Link to="/">Рекомендуемые услуги</Link>
        <Link to="/questions" onClick={() => store.resetQuestionNumber()}>Пройти тест ещё раз</Link>
      </div>
    </section>
  )
})

export default Testing