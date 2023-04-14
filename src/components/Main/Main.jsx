import React from 'react'
import { Route, Routes } from 'react-router'
import Aside from '../Aside/Aside'
import Info from '../Info/Info'
import Questions from '../Questions/Questions'
import Testing from '../Testing/Testing'
import styles from "./Main.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const Main = observer(() => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {store.asideVisibality === true ? <Aside /> : <></>}
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </main>
  )
})

export default Main