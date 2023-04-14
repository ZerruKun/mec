import React from 'react'
import Question from '../Question/Question'
import styles from "./Questions.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const Questions = observer(() => {

    return (
        <section className={styles.general}>
            <article className={styles.questions}>
                <h2>Тест экспортной готовности</h2>
                <div className={styles.progress}>
                    <span className={styles.amount}>
                        {store.questionNumber}/{store.questions.length}
                    </span>
                    <span className={styles.progressBar}>
                        <span 
                            className={styles.fillProgress} 
                            style={{width: `${Math.round(100/store.questions.length*store.questionNumber)}%`}}>
                        </span>
                    </span>
                </div>
                <Question />
            </article>
            <div className={styles.text}>
                <p>
                    Выберите один вариант ответа по каждому вопросу, который наиболее
                    точно отражает фактическую ситуацию, характерную для Вашей
                    компании на текущий момент.
                </p>
            </div>
        </section>
    )
})

export default Questions