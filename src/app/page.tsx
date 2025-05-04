import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Logo will be added in layout.tsx */}
      <header className="bg-green-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Using text title for now, logo added in layout */}
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

      {/* Hero Section with Cover Image */}
      <section className="relative w-full h-64 md:h-96 bg-green-900 text-white flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/logo-arboriza.jpg" 
          alt="Arboriza - Engenharia e Arborização Urbana" 
          layout="fill" 
          objectFit="cover" 
          quality={85}
          className="opacity-50" // Adjust opacity as needed
        />
        <div className="relative z-10 text-center p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Arboriza – Engenharia e Arborização Urbana</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Soluções completas em podas, transplantes e supressão de árvores com segurança, técnica e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        {/* Removed redundant title section as it's now in the hero */}
        
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Quem Somos</h3>
          <p className="text-gray-600 leading-relaxed">
            A Arboriza conta com uma equipe multidisciplinar formada por engenheiros agrônomos, engenheiros florestais e bombeiros civis, todos com vasta experiência em arborização urbana. Combinamos conhecimento técnico aprofundado com práticas seguras e eficientes, garantindo a saúde das árvores e a segurança de pessoas e patrimônios. Nosso compromisso é oferecer serviços de alta qualidade, respeitando o meio ambiente e as necessidades de nossos clientes.
          </p>
        </section>

        {/* Optional: Add a call to action or brief service overview here */}
        <section className="text-center mb-12">
           <Link href="/servicos" className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Conheça Nossos Serviços
          </Link>
        </section>

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

