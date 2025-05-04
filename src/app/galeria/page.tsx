import Link from 'next/link';
import Image from 'next/image';

// Define the actual images for the gallery
const galleryImages = [
  { id: 1, src: '/images/servico-poda-1.jpeg', alt: 'Serviço de poda de árvore' },
  { id: 2, src: '/images/servico-transplante.jpeg', alt: 'Serviço de transplante de árvore' },
  { id: 3, src: '/images/servico-poda-2.jpeg', alt: 'Serviço de supressão de árvore' }, // Assuming this image represents suppression
  { id: 4, src: '/images/servico-laudo.png', alt: 'Laudo técnico de árvore' },
  { id: 5, src: '/images/servico-poda-3.jpg', alt: 'Cuidado com raízes de árvore' },
  { id: 6, src: '/images/servico-protecao-raiz.jpeg', alt: 'Proteção de raiz em calçada' },
  // Add more images here if needed, maybe find one online later if requested
];

export default function Galeria() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Arboriza</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-green-300">Início</Link></li>
              <li><Link href="/servicos" className="hover:text-green-300">Serviços</Link></li>
              <li><Link href="/galeria" className="hover:text-green-300">Galeria</Link></li>
              <li><Link href="/contato" className="hover:text-green-300">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Galeria de Imagens</h2>
        
        <p className="text-center text-gray-600 mb-8">Veja alguns exemplos de nossos trabalhos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              {/* Use next/image component */}
              <div className="relative w-full h-60"> {/* Increased height for better display */}
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  layout="fill" // Use fill layout to cover the container
                  objectFit="cover" // Cover the area, cropping if necessary
                  className="transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
                  quality={75} // Adjust quality as needed
                />
              </div>
              <div className="p-3"> {/* Reduced padding slightly */}
                <p className="text-sm text-gray-700 text-center truncate">{image.alt}</p> {/* Added truncate for potentially long alt texts */}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white p-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>Arboriza – Engenharia e Arborização Urbana</p>
          <p>Av. Ordem e Progresso, nº 100 – Barra Funda – São Paulo/SP</p>
          <p>Telefone: (11) 97711-8704 | E-mail: arborizasp@hotmail.com.br</p>
          <div className="mt-2">
            {/* Placeholder for social media links */}
            <span className="mx-2">Facebook</span> | <span className="mx-2">Instagram</span> | <span className="mx-2">LinkedIn</span>
          </div>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Arboriza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

