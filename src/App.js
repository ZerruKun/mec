import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import StartAndDone from "./components/Modals/StartAndDone/StartAndDone";
import Stage from "./components/Modals/Stage/Stage";
import { observer } from "mobx-react-lite";
import store from "./store/store";

const App = observer(() => {

  const modalRender = (stage) => {
    // Для отображения стадий обучения в зависимости от этапа
    switch(stage) {
      case 1:
        return <StartAndDone 
          h2="Добро пожаловать в личный кабинет экспортёра!" 
          p1="Чтобы познакомиться со всеми функциями нажмите далее"
          btn="Далее"      
        />;
      case 2:
        return <Stage 
          p1="В профиле компании содержится:" 
          p2="– данные компании и представителя" 
          p3="– результат теста экспортной готовности" 
          p4="– информация о выданных субсидиях и привлечённых контрактов" 
          p5="– доступные услуги" 
          p6="– статус активных обращений"
          btn="Далее"      
        />;
      case 3:
        return <Stage 
          p1="Здесь можно пройти тест экспортной готовности и узнать результат" 
          btn="Далее"      
        />;
      case 4:
        return <Stage 
          p1="Здесь можно ознакомиться со всеми услугами и оформить заявку" 
          btn="Далее"      
        />;
      case 5:
        return <Stage 
          p1="Здесь можно получитьи оформить документы закупок, в которых Вы участвуете" 
          btn="Далее"      
        />;
      case 6:
        return <Stage 
          p1="Здесь содержится информацияпо всем заявкаме" 
          btn="Экспортировать!"      
        />;
      case 7:
        return <StartAndDone 
          h2="Нам важно Ваше мнение!" 
          p1="Вы успешно воспользовались услугой: Закупка в рамках возмещении затрат на сертификацию систем менеджмента."
          p2="Пожалуйста, оцените качество услуги и расскажите была ли она полезной." 
          btn="Оценить"
          p3="Вы всегда можете оценить качество услуг в разделе Заявки → Обратная связь"        
        />;
      default:
        return "It's unreachable but React says woof.";
    }
  }

  return (
    <div className="App">
      {store.isTrainingDone === true ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <>
          <Header />
          <Main />
          {modalRender(store.traningStage)}
        </>
      )}
    </div>
  );
})

export default App;