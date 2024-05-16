import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { HomeStyles } from "./style"


export const PokerHome = () => {
  const [barajaIzquierda, setBarajaIzquierda] = useState([]);
  const [barajaCentro, setBarajaCentro] = useState([]);
  const [barajaDerecha, setBarajaDerecha] = useState([]);

  const crearMazo = () => {
    let mazo = []
    let figuras = ["Pica", "Corazon", "Diamante", "Trebol"]
    let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    figuras.forEach(figura => {
      valores.forEach(valor => {
        let color = (figura === "Corazon" || figura === "Diamante") ? "red" : "black"
        mazo.push({ figura, valor, color })
      })
    })
    const randomCards = barajarMazo(mazo)
    setBarajaIzquierda(randomCards)
  }

  const barajarMazo = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

  const moverCarta = (origen, destino, setOrigen, setDestino) => {
    if (origen.length === 0) return;

    const cartaMovida = origen[0];
    const nuevaBarajaOrigen = origen.slice(1);
    const nuevaBarajaDestino = [cartaMovida, ...destino];

    setOrigen(nuevaBarajaOrigen);
    setDestino(nuevaBarajaDestino);
  }

  const reiniciarJuego = () => {
    crearMazo()
    setBarajaCentro([])
    setBarajaDerecha([])
  }


  useEffect(() => {
    crearMazo()
  }, [])

  return (
    <section className="container">
      <HomeStyles>
        <Header />
        <section className="BarajasContainer">
          <div className={barajaIzquierda.length > 1 ? 'stack' : ''} onClick={() => moverCarta(barajaIzquierda, barajaCentro, setBarajaIzquierda, setBarajaCentro)}>
            {barajaIzquierda.length > 0 &&
              <Card
                color={barajaIzquierda[0].color}
                figura={barajaIzquierda[0].figura}
                valor={barajaIzquierda[0].valor}
              />
            }
          </div>
          <div className={barajaCentro.length > 1 ? 'stack' : ''}  onClick={() => moverCarta(barajaCentro, barajaDerecha, setBarajaCentro, setBarajaDerecha)}>
            {barajaCentro.length > 0 &&
              <Card
                color={barajaCentro[0].color}
                figura={barajaCentro[0].figura}
                valor={barajaCentro[0].valor}
              />
            }
          </div>
          <div className={barajaDerecha.length > 1 ? 'stack' : ''}>
            {barajaDerecha.length > 0 &&
              <Card
                color={barajaDerecha[0].color}
                figura={barajaDerecha[0].figura}
                valor={barajaDerecha[0].valor}
              />
            }
          </div>
        </section>
        <div className="buttons">
          <button onClick={reiniciarJuego}>Reiniciar Juego 🃏</button>
        </div>
      </HomeStyles>
    </section>
  )
}
