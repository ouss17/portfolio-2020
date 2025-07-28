//import react 
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
  redirect
} from "react-router-dom";


import Index from './Views/Index/Index';
import Skills from './Views/Skills/Skills';
import Reals from './Views/Reals/Reals';
import Parcours from './Views/Parcours/Parcours';
import Login from './Views/Login/Login';


import Footer from './Components/Footer/Footer';
import Svg from './Components/Svg404/Svg'


import './App.scss';
import { SocleScreen, SwitchSvg } from './assets/Svgs';
import NbVisitContext from '../context/nbVisitContext';

function App() {

  const [show, setShow] = useState(false);
  const [top, setTop] = useState(800);
  const [calendarBottom, setCalendarBottom] = useState("-6000%")
  const [showCalendar, setShowCalendar] = useState(false)
  const [notifRight, setNotifRight] = useState("-100%")
  const [iconeNotif, setIconeNotif] = useState(<i className="fas fa-comment-alt"></i>)
  const [showNotif, setShowNotif] = useState(false)

  const closeAll = () => {
    setShow(false);
    setTop(800);
    setShowCalendar(false);
    setCalendarBottom("-6000%");
    setShowNotif(false);
    setNotifRight("-100%");
    setIconeNotif(<i className="fas fa-comment-alt"></i>)
  }

  // variables de darkmode
  const [moonSun, setMoonSun] = useState(<i className="fas fa-sun"></i>);
  const [darkmode, setDarkmode] = useState(false);
  const [optionColor, setOptionColor] = useState("rgb(76, 76, 76)")
  const [optionColorHover, setOptionColorHover] = useState("rgb(128, 128, 128)")

  // darkmode/lightmode
  const darkMode = () => {
    if (darkmode === true) {
      setMoonSun(<i className="fas fa-sun"></i>)
      setDarkmode(false)
      setOptionColor("rgb(76, 76, 76)")
      setOptionColorHover("rgb(128, 128, 128)")
    } else {
      setMoonSun(<i className="fas fa-moon"></i>)
      setDarkmode(true)
      setOptionColor("rgba(255, 0, 0, 0.8)")
      setOptionColorHover("rgba(255, 0, 0, 1)")
    }
  }

  // variables de langage
  const [langu, setLangu] = useState('fr')
  const [language, setLanguage] = useState('Langue')

  //changement langage
  const changLanguage = () => {
    if (langu === 'fr') {
      setLangu('en')
      setLanguage('Language')
    } else {
      setLangu('fr')
      setLanguage('Langue')
    }

  }

  const [arrayNotifs, setArrayNotifs] = useState([]);
  const [switchSvg, setSwitchSvg] = useState("0")

  const [switchScreen, setSwitch] = useState(0);
  const SwitchPc = () => {
    switchScreen === 1 ? setSwitch(0) : setSwitch(1);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById("switch-screen").style.animation = "2s 3 color";
  //   }, "50ms");
  // }, [switchSvg]);

  const [isLogin, setIsLogin] = useState(false)
  const [nbVisit, setNbVisit] = useState(0);

  return (
    <>
      {/* {(isLogin === false) ? redirect("/login") : null} */}
      <NbVisitContext.Provider value={{ nbVisit, setNbVisit }}>
        <div className="computer computer2"></div>
        <div className="computer">
          <div id="display">
            <div id="switch">
              <Routes id="switchComposant">
                <Route exact path="/" element={<Index closeAll={closeAll} darkmode={darkmode} isLogin={isLogin} setArrayNotifs={setArrayNotifs} arrayNotifs={arrayNotifs} />} />

                <Route path="/competences" element={<Skills darkmode={darkmode} closeAll={closeAll} isLogin={isLogin} setArrayNotifs={setArrayNotifs} arrayNotifs={arrayNotifs} />} />

                <Route path="/realisations" element={<Reals darkmode={darkmode} closeAll={closeAll} isLogin={isLogin} setArrayNotifs={setArrayNotifs} arrayNotifs={arrayNotifs} />} />

                <Route path="/parcours" element={<Parcours darkmode={darkmode} closeAll={closeAll} isLogin={isLogin} setArrayNotifs={setArrayNotifs} arrayNotifs={arrayNotifs} />} />

                {/* <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} setArrayNotifs={setArrayNotifs} arrayNotifs={arrayNotifs} setSwitch={setSwitch} setSwitchSvg={setSwitchSvg} />} /> */}

                <Route path="" element={<Svg />} />

              </Routes>
            </div>
            <Footer changLanguage={changLanguage} language={language} moonSun={moonSun} darkmode={darkmode} darkMode={darkMode} optionColor={optionColor} optionColorHover={optionColorHover} show={show} setShow={setShow} top={top} setTop={setTop} calendarBottom={calendarBottom} setCalendarBottom={setCalendarBottom} showCalendar={showCalendar} setShowCalendar={setShowCalendar} notifRight={notifRight} setNotifRight={setNotifRight} iconeNotif={iconeNotif} setIconeNotif={setIconeNotif} closeAll={closeAll} showNotif={showNotif} setShowNotif={setShowNotif} arrayNotifs={arrayNotifs} setArrayNotifs={setArrayNotifs} />
            <div className="switch-off" style={{ transform: "scale(" + switchScreen + ")" }}></div>
          </div>
          <div id="reflexion"></div>
          <div className="reflexion">
            <div className="reflexion1"></div>
            <div className="reflexion2"></div>
          </div>
        </div>
        <SocleScreen />
        <SwitchSvg switchSvg={switchSvg} SwitchPc={SwitchPc} />
      </NbVisitContext.Provider>
    </>
  );
}

export default App;

