import React, { useEffect, useState } from "react";
import Tasklist from "./lists/TaskList";
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  const [dark, setDark] = React.useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * Documentación del useEffect
   * Se crea una variable de estado donde se almacena el valor de la configuración en localStorage
   */

  useEffect(() => {
    // try {
    //   // const config = JSON.parse(localStorage.getItem("config"));
    //   setDark(config.theme);
    // } catch (e) {
    // }
    setDark(false);
  }, []);

  /**
   * Función para intercambiar la variable de estado light <-> dark
   */

  const toggleDark = () => setDark(!dark);
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <div
        className={`h-screen p-4 flex flex-col bg-gray-100 dark:bg-slate-800 transition dark:text-gray-50`}
      >
        <Tasklist
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showSettings && (
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "100vh" }}
            >
              <Settings toggleDark={toggleDark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
