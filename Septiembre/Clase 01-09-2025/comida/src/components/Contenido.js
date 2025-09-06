import React from 'react'

export const Contenido = () => {
  return (
    <main>
      <section className='margarita-historia'> 
        <h2 className='margarita-historia-titulo'>Nuestra Historia</h2>
      <p className='margarita-historia-texto'>Margarita no es solo un restaurante, es el sueño de una familia que, con una profunda pasión por la buena comida y el servicio excepcional, decidió abrir sus puertas en 2020. Fundado por María y su hijo Luis, el objetivo siempre fue claro: ofrecer comida rápida que no sacrificara el sabor, la calidad ni la calidez del hogar.</p>
      <p className="margarita-historia-texto">Comenzamos en un pequeño local con solo unas cuantas mesas y un menú sencillo, pero nuestra dedicación a usar ingredientes frescos y preparar cada plato con esmero pronto nos ganó la confianza y el cariño de nuestros clientes. El aroma de nuestras hamburguesas a la parrilla y el inconfundible sabor de nuestros tacos al pastor se convirtieron en un favorito del barrio.</p>
      <p className="margarita-historia-texto">Desde entonces, hemos crecido, pero nuestra misión sigue siendo la misma. Cada receta es una oda a la tradición y la innovación, y cada plato que servimos es un reflejo de nuestro compromiso con la excelencia. En Margarita, creemos que la comida rápida puede ser una experiencia memorable, llena de sabor y alegría. Te invitamos a ser parte de nuestra historia y a disfrutar de la comida que preparamos con amor para ti y tu familia.</p>
      </section>
      <section className="margarita-informacion">
        <article className='inf-left'>
          <h2 className='info-title'>Información de Margarita</h2>
          <ul className='info-list'>
            <li className='info-item'>Dirección: Calle Falsa 123, Ciudad</li>
            <li className='info-item'>Teléfono: (123) 456-7890</li>
            <li className='info-item'>Email: info@margarita.com</li>
          </ul>
        </article>
        <article className='inf-right'><img className='margarita-logo' src="logo2.png" alt="Margarita logo" /></article>
      </section>
    </main>
  )
}
export default Contenido;
