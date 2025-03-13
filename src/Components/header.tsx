
export default function Header() {
  return (
    <header className="bg-azul text-texto py-4">
      <div className="container-app flex justify-between items-center">
        <h1 className="text-xl font-bold">Monster TV</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-acento transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-acento transition-colors">Películas</a></li>
            <li><a href="#" className="hover:text-acento transition-colors">Series</a></li>
            <li><a href="#" className="hover:text-acento transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}