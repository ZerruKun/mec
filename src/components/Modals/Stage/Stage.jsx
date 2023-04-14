import React from 'react'
import styles from "./Stage.module.css"
import { observer } from 'mobx-react-lite'
import store from '../../../store/store'
import ModalAside from '../ModalAside/ModalAside'

const Stage = observer((props) => {

  let paragraphsMargin, nextButtonMargin;

  switch (store.traningStage) {
    case 2: 
      paragraphsMargin = styles.paragraphsMargin2
      nextButtonMargin = styles.nextButtonMargin2
      break;
    case 3: 
      paragraphsMargin = styles.paragraphsMargin3
      nextButtonMargin = styles.nextButtonMargin3
      break;
    case 4: 
      paragraphsMargin = styles.paragraphsMargin4
      nextButtonMargin = styles.nextButtonMargin4
      break;
    case 5: 
      paragraphsMargin = styles.paragraphsMargin5
      nextButtonMargin = styles.nextButtonMargin5
      break;
    case 6: 
      paragraphsMargin = styles.paragraphsMargin6
      nextButtonMargin = styles.nextButtonMargin6
      break;
    default:
      break;
  }

  return (
    <div 
        className={store.traningStage > 1 && store.traningStage < 7 ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
    >
      <div className={styles.content}>
        <ModalAside />
        <div className={styles.discription}>
          <h2>Главное меню</h2>
          <div className={`${styles.paragraphs} ${paragraphsMargin}`}>
            <p className={styles.arrow}>←————</p>
            <div className={styles.text}>
              <p>{props.p1}</p>
              <p>{props.p2}</p>
              <p>{props.p3}</p>
              <p>{props.p4}</p>
              <p>{props.p5}</p>
              <p>{props.p6}</p>
            </div>
          </div>
          <button className={`${styles.nextButton} ${nextButtonMargin}`} onClick={() => store.nextStage()}>{props.btn}</button>
        </div>
      </div>
      <button 
        className={styles.cross} 
        onClick={() => store.setIstrainingDone(true)}
      ></button>
    </div>
  )
})

export default Stage