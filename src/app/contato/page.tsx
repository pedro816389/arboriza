import Link from 'next/link';

export default function Contato() {
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
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Nossas Informações</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Endereço:</strong><br />
                Av. Ordem e Progresso, nº 100<br />
                Barra Funda – São Paulo/SP
              </p>
              <p>
                <strong>Telefone:</strong><br />
                (11) 97711-8704
              </p>
              <p>
                <strong>E-mail:</strong><br />
                <a href="mailto:arborizasp@hotmail.com.br" className="text-green-600 hover:underline">arborizasp@hotmail.com.br</a>
              </p>
            </div>
            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.121948768177!2d-46.66953858868561!3d-23.51967767872568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7fe4260d4e7%3A0xcaae221b8229b08a!2sAv.%20Ordem%20e%20Progresso%2C%20100%20-%20V%C3%A1rzea%20da%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001141-030%2C%20Brazil!5e0!3m2!1sen!2sus!4v1714609185489!5m2!1sen!2sus" 
                className="w-full h-80 rounded-md border-0" // Use Tailwind classes
                allowFullScreen={true} // Use camelCase for React props
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização Arboriza">
              </iframe>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Envie sua Mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
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

