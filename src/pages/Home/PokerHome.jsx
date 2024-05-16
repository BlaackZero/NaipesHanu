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
    setBarajaIzquierda(mazo)
  }

  const moverCarta = (origen, destino, setOrigen, setDestino) => {
    if (origen.length === 0) return;

    const cartaMovida = origen[0];
    const nuevaBarajaOrigen = origen.slice(1);
    const nuevaBarajaDestino = [cartaMovida, ...destino];

    setOrigen(nuevaBarajaOrigen);
    setDestino(nuevaBarajaDestino);
  }


  useEffect(() => {
    crearMazo()
  }, [])

  console.log(barajaIzquierda, barajaCentro, barajaDerecha);

  return (
    <section className="container">
      <HomeStyles>
        <Header />
        <section className="BarajasContainer">
          <div onClick={() => moverCarta(barajaIzquierda, barajaCentro, setBarajaIzquierda, setBarajaCentro)}>
            {barajaIzquierda.length > 0 &&
              <Card
                color={barajaIzquierda[0].color}
                figura={barajaIzquierda[0].figura}
                valor={barajaIzquierda[0].valor}
              />
            }
          </div>
          <div onClick={() => moverCarta(barajaCentro, barajaDerecha, setBarajaCentro, setBarajaDerecha)}>
            {barajaCentro.length > 0 &&
              <Card
                color={barajaCentro[0].color}
                figura={barajaCentro[0].figura}
                valor={barajaCentro[0].valor}
              />
            }
          </div>
          <div>
            {barajaDerecha.length > 0 &&
              <Card
                color={barajaDerecha[0].color}
                figura={barajaDerecha[0].figura}
                valor={barajaDerecha[0].valor}
              />
            }
          </div>
        </section>
      </HomeStyles>
    </section>
  )
}
