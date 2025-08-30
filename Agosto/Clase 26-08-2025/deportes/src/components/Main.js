import React from 'react'

export const Main = () => {
    /*  */
    const [descripcion, setDescripcion] = React. useState("Descripción del accesorio 1");

    const cambiarDescripcion = (nuevaDescripcion) => {
        setDescripcion(nuevaDescripcion);
    }
  /*  */
      /*  */
    const [descripcion2, setDescripcion2] = React. useState("Descripción del accesorio 2");

    const cambiarDescripcion2 = (nuevaDescripcion) => {
        setDescripcion2(nuevaDescripcion);
    }
  /*  */
      /*  */
    const [descripcion3, setDescripcion3] = React. useState("Descripción del accesorio 3");

    const cambiarDescripcion3 = (nuevaDescripcion) => {
        setDescripcion3(nuevaDescripcion);
    }
  /*  */
      /*  */
    const [descripcion4, setDescripcion4] = React. useState("Descripción del accesorio 4");

    const cambiarDescripcion4 = (nuevaDescripcion) => {
        setDescripcion4(nuevaDescripcion);
    }
  /*  */
      /*  */
    const [descripcion5, setDescripcion5] = React. useState("Descripción del accesorio 5");

    const cambiarDescripcion5 = (nuevaDescripcion) => {
        setDescripcion5(nuevaDescripcion);
    }
  /*  */


  /* Precio */
const [precio, setPrecio] = React.useState("$100");

const cambiarPrecio = (nuevoPrecio) => {
    setPrecio(nuevoPrecio);
}
/*  */
const [precio2, setPrecio2] = React.useState("$150");

const cambiarPrecio2 = (nuevoPrecio) => {
    setPrecio2(nuevoPrecio);
}
/*  */
const [precio3, setPrecio3] = React.useState("$200");

const cambiarPrecio3 = (nuevoPrecio) => {
    setPrecio3(nuevoPrecio);
}
/*  */
const [precio4, setPrecio4] = React.useState("$250");

const cambiarPrecio4 = (nuevoPrecio) => {
    setPrecio4(nuevoPrecio);
}
/*  */
const [precio5, setPrecio5] = React.useState("$300");

const cambiarPrecio5 = (nuevoPrecio) => {
    setPrecio5(nuevoPrecio);
}
/*  */
  return (
    <section className="accesorios">
        <article className="accesorio">
            <img src="https://siman.vtexassets.com/arquivos/ids/1741479-1200-auto?v=637680378204400000&width=1200&height=auto&aspect=true" alt="" />
            <h2>Accesorio 1</h2>
            <p>{descripcion}</p>
            <p className='precio'>{precio}</p>
            <button onClick={() => cambiarPrecio("$120")}>Cambiar precio</button>
            <button onClick={() => cambiarDescripcion("Nueva descripción del accesorio 1")}>Cambiar descripción</button>
        </article>
        {/*  */}
        <article className="accesorio">
            <img src="https://siman.vtexassets.com/arquivos/ids/7037814-1200-auto?v=638869193328130000&width=1200&height=auto&aspect=true" alt="" />
            <h2>Accesorio 2</h2>
            <p>{descripcion2}</p>
            <p className='precio'>{precio2}</p>
            <button onClick={() => cambiarPrecio2("$220")}>Cambiar precio</button>
            <button onClick={() => cambiarDescripcion2("Nueva descripción del accesorio 2")}>Cambiar descripción</button>
        </article>
        {/*  */}
        <article className="accesorio">
            <img src="https://siman.vtexassets.com/arquivos/ids/7037822-1200-auto?v=638869193350170000&width=1200&height=auto&aspect=true" alt="" />
            <h2>Accesorio 3</h2>
            <p>{descripcion3}</p>
            <p className='precio'>{precio3}</p>
            <button onClick={() => cambiarPrecio3("$620")}>Cambiar precio</button>
            <button onClick={() => cambiarDescripcion3("Nueva descripción del accesorio 3")}>Cambiar descripción</button>
        </article>
        {/*  */}
        <article className="accesorio">
            <img src="https://siman.vtexassets.com/arquivos/ids/2944252-1200-auto?v=637895291868730000&width=1200&height=auto&aspect=true" alt="" />
            <h2>Accesorio 4</h2>
            <p>{descripcion4}</p>
            <p className='precio'>{precio4}</p>
            <button onClick={() => cambiarPrecio4("$320")}>Cambiar precio</button>
            <button onClick={() => cambiarDescripcion4("Nueva descripción del accesorio 4")}>Cambiar descripción</button>
        </article>
        {/*  */}
        <article className="accesorio">
            <img src="https://siman.vtexassets.com/arquivos/ids/6275295-1200-auto?v=638649847372830000&width=1200&height=auto&aspect=true" alt="" />
            <h2>Accesorio 5</h2>
            <p>{descripcion5}</p>
            <p className='precio'>{precio5}</p>
            <button onClick={() => cambiarPrecio5("$420")}>Cambiar precio</button>
            <button onClick={() => cambiarDescripcion5("Nueva descripción del accesorio 5")}>Cambiar descripción</button>
        </article>
    </section>
  )
}
export default Main;
