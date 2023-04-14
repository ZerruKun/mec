import React from 'react'
import styles from "./StartAndDone.module.css"
import { observer } from 'mobx-react-lite'
import store from '../../../store/store'

const StartAndDoneModal = observer((props) => {
  return (
    <div 
        className={store.traningStage === 1 || store.traningStage === 7 ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
    >
      <div className={styles.content}>
        <h2>{props.h2}</h2>
        <p className={styles.p1}>{props.p1}</p>
        <p className={styles.p2}>{props.p2}</p>
        {store.traningStage === 1 ? (
          <button onClick={() => store.nextStage()}>{props.btn}</button>
        ) : (
          <button onClick={() => store.setIstrainingDone(true)}>{props.btn}</button>
        )}
        <p className={styles.p3}>{props.p3}</p>
      </div>
        <button 
          className={styles.cross} 
          onClick={() => store.setIstrainingDone(true)}
        >
        </button>
    </div>
  )
})

export default StartAndDoneModal
