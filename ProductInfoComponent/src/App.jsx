import { useState } from "react";
import "./App.css";
const data = [
  {
    // deben ser 3 objetos
    id: 1,
    title: "titulo 1",
    description: "descripcion 1",
    img: {
      low: "https://via.placeholder.com/150",
      medium: "https://via.placeholder.com/300",
      high: "https://via.placeholder.com/600",
    },
  },
];

function App() {
  return (
    <>
      {/* vista mobil */}
      <section className="block md:hidden bg- my-2 mx-4">
        <h2 className="text-xl font-medium text-white text-pretty">
          Bienvenido al <strong className="text-blue-light">futuro</strong> de
          la tecnología
        </h2>
        <article>
          <div className="flex">
            <span></span>
            <p></p>
          </div>
          <figure>
            <img src="" alt="fafa" />
          </figure>
        </article>
      </section>
      {/* vista table e escritorio  */}
      <section className="hidden lg:flex lg:flex-row lg:w-full">
        <div>
          <h2 className="text-2xl font-medium text-pretty text-white">
            Escritorio
          </h2>
          <ul>
            <li>
              <div>
                <span>icono</span>
                <p>texto</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <figure>
            <img src="" alt="imagen" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default App;
