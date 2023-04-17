import { useState } from "react"
import { heater1, heater2, heater3, heater4, heater5, openHH, kick1, kick2, closedHH, acorde1, acorde2, acorde3, shaker, openHH1, closedHH2, punchykick, sidekick, snare } from "../src/sonidos"

function App() {

  const [prendido, setPrendido] = useState(false)
  const [cambiarSonidos, setCambiarSonidos] = useState(false);
  const [volumen, setVolumen] = useState(0.5)
  const [texto, setTexto] = useState()

  const prenderBateria = () => {
    setPrendido(!prendido)
    if (!prendido) {
      setTexto("")
    }
  }

  const cambiazo = () => {
    setCambiarSonidos(!cambiarSonidos)
  }

  const modificarVolumen = (event) => {
    let nuevoVolumen = event.target.value;
    setVolumen(nuevoVolumen)
    setTexto("Volumen: " + Math.floor(nuevoVolumen * 100))
  }

  const apretarLetra = (event) => {
    if (prendido) {
      if (event.key === "q" || event.key === "Q") {
        apretarQ();
      }
     else if (event.key === "w" || event.key === "W") {
      apretarW();
    } else if (event.key === "e" || event.key === "E") {
      apretarE()
    } else if (event.key === "a" || event.key === "A") {
      apretarA()
    } else if (event.key === "s" || event.key === "S") {
      apretarS()
    } else if (event.key === "d" || event.key === "D") {
      apretarD()
    } else if (event.key === "z" || event.key === "Z") {
      apretarZ()
    } else if (event.key === "x" || event.key === "X") {
      apretarX()
    } else if (event.key === "c" || event.key === "C") {
      apretarC()
    }
  }
  }

  const apretarQ = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        heater1.play()
        heater1.volume = volumen
        setTexto("Heater 1")
      } else {
        acorde1.play()
        acorde1.volume = volumen
        setTexto("Acorde 1")
      }
      if (event.key === "q") {
        if (!cambiarSonidos) {
          heater1.play()
          heater1.volume = volumen
        } else {
          acorde1.play()
          acorde1.volume = volumen
        }

      }
    }
  }

  const apretarW = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        heater2.play()
        heater2.volume = volumen
        setTexto("Heater 2")
      } else {
        acorde2.play()
        acorde2.volume = volumen
        setTexto("Acorde 2")
      }
    }
  }

  const apretarE = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        heater3.play()
        heater3.volume = volumen
        setTexto("Heater 3")
      } else {
        acorde3.play()
        acorde3.volume = volumen
        setTexto("Acorde 3")
      }
    }
  }

  const apretarA = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        heater4.play()
        heater4.volume = volumen
        setTexto("Heater 4")
      } else {
        shaker.play()
        shaker.volume = volumen
        setTexto("Shaker")
      }
    }
  }

  const apretarS = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        heater5.play()
        heater5.volume = volumen
        setTexto("Heater 5")
      } else {
        openHH1.play()
        openHH1.volume = volumen
        setTexto("Open HH")
      }
    }
  }

  const apretarD = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        openHH.play()
        openHH.volume = volumen
        setTexto("Open HH")
      } else {
        closedHH2.play()
        closedHH2.volume = volumen
        setTexto("Closed HH")
      }
    }
  }

  const apretarZ = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        kick1.play()
        kick1.volume = volumen
        setTexto("Kick n' Hat")
      } else {
        punchykick.play()
        punchykick.volume = volumen
        setTexto("Punchy Kick")
      }
    }
  }

  const apretarX = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        kick2.play()
        kick2.volume = volumen
        setTexto("Kick")
      } else {
        sidekick.play()
        sidekick.volume = volumen
        setTexto("Side Kick")
      }
    }
  }

  const apretarC = (event) => {
    if (prendido) {
      if (!cambiarSonidos) {
        closedHH.play()
        closedHH.volume = volumen
        setTexto("Closed HH")
      } else {
        snare.play()
        snare.volume = volumen
        setTexto("Snare")
      }
    }
  }

  console.log(volumen)

  return (
    <div
      onKeyUp={apretarLetra}
      tabIndex="0"
      className="bg-[#280606] h-screen">
      <main className="flex flex-col items-center justify-center h-full">
        <div className={`${prendido ? "bg-[#4d1616]" : "bg-[#211414]"} max-md:flex-col text-white flex items-center justify-center h-70 rounded-xl shadow-2xl shadow-zinc-950`}>
          <div className="grid grid-cols-3 gap-5 w-80 m-6">
            <button
              onClick={() => apretarQ()}
              className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">Q</button>
            <button
              onClick={() => apretarW()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">W</button>
            <button
              onClick={() => apretarE()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">E</button>
            <button
              onClick={() => apretarA()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">A</button>
            <button
              onClick={() => apretarS()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">S</button>
            <button
              onClick={() => apretarD()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">D</button>
            <button
              onClick={() => apretarZ()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">Z</button>
            <button
              onClick={() => apretarX()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">X</button>
            <button
              onClick={() => apretarC()} className="bg-[#acaaaa] p-6 rounded-md hover:bg-[#737070] active:bg-[#881b1b] transition-colors text-black font-bold shadow-2xl ">C</button>
          </div>
          <div className="w-40 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-6">
              <p className="text-white font-bold">Power</p>
              <button
                onClick={() => prenderBateria()}
                className=" w-12 h-6 bg-[#bebebe] rounded-md"><div className={` ${prendido ? "bg-[#881b1b]" : "bg-[#211414]"} h-4 w-4 rounded-sm ${prendido ? "ml-6" : "ml-1"}`}></div></button>
            </div>
            <div className="bg-[#bebebe] w-32 h-10 rounded-md mb-6 text-black font-bold flex items-center justify-center">{prendido ? texto : ""}</div>
            <input
              className="cursor-pointer slider appearance-none bg-gray-300 h-1 rounded-full outline-none"
              type="range"
              min="0"
              max="1"
              step="0.01"
              onChange={modificarVolumen}
            />

            <div className="flex flex-col items-center mt-6 max-md:mb-6">
              <p className="text-white font-bold">Bank</p>
              <button
                onClick={() => cambiazo()}
                className=" w-12 h-6 bg-[#bebebe] rounded-md"><div className={`${cambiarSonidos ? "bg-[#881b1b]" : "bg-[#211414]"} h-4 w-4 rounded-sm ${cambiarSonidos ? "ml-6" : "ml-1"}`}></div></button>
            </div>
          </div>
        </div>
        <div className="mt-12">
        <h3 className="text-white">by <a href="https://www.linkedin.com/in/jeronimo-vega-42375b196/" target={"_blank"} className="text-[#a41d1d] font-bold hover:text-[#761515c1]">jerovega</a></h3>
        </div>
      </main>
    </div>
  )
}

export default App
