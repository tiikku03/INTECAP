import Card from "./Components/Card";
import Cart from "./Components/Cart";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto pt-20 px-6">
        { foods.map((food) => (
          <Card key={food.nombre} producto={food} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;

const foods = [
    {
      imagen:
        "https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg",
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa carne de res con queso, lechuga y tomate.",
      descripcion2:
        "Una opción segura y deliciosa para los amantes de las hamburguesas. ¡El sabor tradicional que nunca falla!",
      precio: 35.99,
    },
    {
      imagen:
        "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg",
      nombre: "Pizza Pepperoni",
      descripcion: "Deliciosa pizza con abundante pepperoni y queso.",
      descripcion2:
        "La pizza favorita de todos. Con un toque de picante y un queso gratinado que se derrite en la boca.",
      precio: 39.99,
    },
    {
      imagen:
        "https://www.belbrandsfoodservice.com/wp-content/uploads/2018/05/recipe-desktop-merkts-cheesy-hot-dawg.jpg",
      nombre: "Hot Dog",
      descripcion: "Salchicha con pan suave, kétchup y mostaza.",
      descripcion2:
        "El sabor simple y reconfortante de la calle. Un clásico americano perfecto para cualquier momento.",
      precio: 29.99,
    },
    {
      imagen:
        "https://editorialtelevisa.brightspotcdn.com/bd/89/5d71eca048a4871912ec6cefcfcc/tacos-al-pastor.jpg",
      nombre: "Tacos al Pastor",
      descripcion: "Tortillas rellenas de cerdo adobado con piña.",
      descripcion2:
        "Directo de las calles de México, estos tacos te llevarán a un viaje de sabor con cada bocado.",
      precio: 19.99,
    },
    {
      imagen:
        "https://www.justspices.es/media/recipe/resized/510x510/recipe/pollo-frito.jpg",
      nombre: "Pollo Frito",
      descripcion: "Crocante pollo empanizado con especias.",
      descripcion2:
        "Crujiente por fuera, jugoso por dentro. Un deleite irresistible que te hará pedir más.",
      precio: 44.99,
    },
    {
      imagen:
        "https://www.bancodealimentoschicago.org/wp-content/uploads/2022/04/Baked-Fries.jpg",
      nombre: "Papas Fritas",
      descripcion: "Crujientes papas acompañadas de salsa.",
      descripcion2:
        "El acompañamiento perfecto para cualquier comida. Crujientes y saladas, te harán disfrutar al máximo.",
      precio: 14.99,
    },
    {
      imagen: "https://okdiario.com/img/2021/07/30/sandwich-club.jpg",
      nombre: "Sándwich Club",
      descripcion: "Pan tostado con jamón, pollo, lechuga y queso.",
      descripcion2:
        "Una explosión de sabores y texturas en cada capa. Ideal para los que buscan un almuerzo completo y abundante.",
      precio: 34.99,
    },
    {
      imagen:
        "https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85",
      nombre: "Burrito",
      descripcion: "Tortilla de harina rellena de carne, frijoles y queso.",
      descripcion2:
        "Un festín en una sola envoltura. Perfecto para cuando quieres una comida rica y fácil de llevar.",
      precio: 24.99,
    },
    {
      imagen: "https://www.bekiacocina.com/images/cocina/0000/607-h.jpg",
      nombre: "Nachos con Queso",
      descripcion: "Totopos bañados en queso derretido.",
      descripcion2:
        "El aperitivo ideal para compartir con amigos o familia. ¡Cada bocado es una fiesta de sabor!",
      precio: 24.99,
    },
    {
      imagen:
        "https://ariztia.com/wp-content/uploads/2023/11/ensalada-cesar-de-pollo.jpg",
      nombre: "Ensalada César",
      descripcion: "Fresca ensalada con pollo, queso y aderezo César.",
      descripcion2:
        "Una opción fresca y ligera para los que buscan algo más saludable sin sacrificar el sabor.",
      precio: 44.99,
    },
  ];