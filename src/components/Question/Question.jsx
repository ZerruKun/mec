import React, { useState } from 'react'
import styles from "./Question.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const Question = observer((props) => {
    // Индекс текущего эелемента массивов
    const [index, setIndex] = useState(0);
    // Отмеченный пункт в вопросе
    const [checked, setChecked] = useState(null);
    const navigate = useNavigate();

    const next = () => {
        if(checked === null) {
            return;
        }
        if(checked === store.questions[index].right) {
            // store.answers[index] = "yes";
            store.setAnswer(index, "yes")
            localStorage.setItem("answers", JSON.stringify(store.answers))
            setChecked(null);
        } else {
            // store.answers[index] = "no";
            store.setAnswer(index, "no")
            localStorage.setItem("answers", JSON.stringify(store.answers))
            setChecked(null);
        }
        setIndex(index+1);
        // store.questionNumber++;
        store.setQuestionNumber("plus");
    }

    const previos = () => {
        setChecked(null);
        setIndex(index-1);
        // store.questionNumber--;
        store.setQuestionNumber("minus");
    }

    const exit = () => {
        setChecked(null);
        setIndex(0);
        store.resetQuestionNumber();
        navigate("/");
    }

    const finish = () => {
        if(checked === store.questions[index].right) {
            // store.answers[index] = "yes";
            store.setAnswer(index, "yes")
            localStorage.setItem("answers", JSON.stringify(store.answers))
        } else {
            // store.answers[index] = "no";
            store.setAnswer(index, "no")
            localStorage.setItem("answers", JSON.stringify(store.answers))
        }
        setChecked(null);
        setIndex(0);
        navigate("/");
    }

    return (
        <div className={styles.question}>
            <h3>
                {store.questions[index].question}
            </h3>
            <div className={styles.options}>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        checked={checked === store.questions[index].variant1} 
                        onChange={() => setChecked(store.questions[index].variant1)}
                    />
                    <span>{store.questions[index].variant1}</span>
                </label>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        checked={checked === store.questions[index].variant2} 
                        onChange={() => setChecked(store.questions[index].variant2)}
                    />
                    <span>{store.questions[index].variant2}</span>
                </label>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        checked={checked === store.questions[index].variant3} 
                        onChange={() => setChecked(store.questions[index].variant3)}
                    />
                    <span>{store.questions[index].variant3}</span>
                </label>
                <label className={styles.option}>
                    <input 
                        type="radio" 
                        checked={checked === store.questions[index].variant4} 
                        onChange={() => setChecked(store.questions[index].variant4)}
                    />
                    <span>{store.questions[index].variant4}</span>
                </label>
            </div>
            <div className={styles.buttons}>
                {index === 0 ?
                    <button className={styles.button} onClick={exit}>Выйти</button> : 
                    <button className={styles.button} onClick={previos}>Назад</button>
                }
                {index+1 === store.questions.length ? 
                    <button className={styles.button} onClick={finish}>Завершить</button> : 
                    <button className={styles.button} onClick={next}>Дальше</button>
                }
            </div>
        </div>
    )
})

export default Question