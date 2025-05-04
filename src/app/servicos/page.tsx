import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Logo added in layout.tsx */}
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
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Nossos Serviços</h2>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Serviço 1: Podas de árvores */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
             <Image src="/images/servico-poda-1.jpeg" alt="Poda de Árvore" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Podas de Árvores</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Realizamos podas técnicas (formação, limpeza, segurança, emergência) seguindo as melhores práticas e normas vigentes, visando a saúde, segurança e estética das árvores e do ambiente urbano.
            </p>
          </div>

          {/* Serviço 2: Transplantes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
            {/* Updated image */}
            <Image src="/images/servico-transplante.jpeg" alt="Transplante de Árvore" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Transplantes</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Executamos transplantes de árvores de pequeno, médio e grande porte com planejamento cuidadoso e técnicas especializadas para garantir a sobrevivência e adaptação da planta em seu novo local.
            </p>
          </div>

          {/* Serviço 3: Supressão */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
            <Image src="/images/servico-poda-2.jpeg" alt="Supressão de Árvore" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Supressão (Remoção)</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Removemos árvores em situações de risco, doentes, mortas ou em locais inadequados, utilizando equipamentos modernos e equipe qualificada para garantir a segurança da operação.
            </p>
          </div>

          {/* Serviço 4: Laudos Técnicos */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
             {/* Updated image */}
             <Image src="/images/servico-laudo.png" alt="Laudo Técnico de Árvore" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Laudos Técnicos para Podas</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Elaboramos laudos técnicos detalhados, assinados por engenheiros responsáveis, para avaliação da necessidade de podas ou supressão, atendendo às exigências legais e condominiais.
            </p>
          </div>

          {/* Serviço 5: Limpeza e Cuidados com Raízes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
             <Image src="/images/servico-poda-3.jpg" alt="Cuidado com Raízes" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Limpeza e Cuidados com Raízes</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Oferecemos serviços de manejo do sistema radicular, incluindo limpeza, poda de raízes e aplicação de técnicas para direcionamento e proteção, visando a saúde da árvore e a integridade de estruturas próximas.
            </p>
          </div>

          {/* Serviço 6: Prevenção de Danos em Calçadas */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 flex flex-col">
             {/* Updated image */}
             <Image src="/images/servico-protecao-raiz.jpeg" alt="Proteção de Raiz em Calçada" width={400} height={250} className="rounded-md mb-4 object-cover h-40 w-full" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">Prevenção de Danos por Raízes</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Implementamos soluções para prevenir e mitigar danos causados por raízes agressivas em calçadas, pavimentos e tubulações, utilizando barreiras físicas (protetores de raiz) e manejo adequado.
            </p>
          </div>
        </div>

        {/* Cost Factors Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">Fatores que Influenciam o Custo</h3>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            O valor dos serviços de poda, remoção e trituração de tocos pode variar consideravelmente dependendo de diversos fatores. Entender esses elementos ajuda a ter uma estimativa mais precisa. Os valores abaixo são apenas exemplos e podem variar. Entre em contato para um orçamento detalhado e personalizado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost Factors for Pruning/Removal */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Poda e Remoção de Árvores</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Altura e Porte da Árvore:</strong> Árvores maiores exigem mais tempo, equipamento especializado e maior gerenciamento de riscos.</li>
                <li><strong>Diâmetro do Tronco:</strong> Troncos mais largos são mais complexos de cortar e manusear.</li>
                <li><strong>Acesso ao Local:</strong> Dificuldades de acesso (muros, fiação, construções próximas, terrenos inclinados) podem aumentar o tempo e a complexidade.</li>
                <li><strong>Condição da Árvore:</strong> Árvores doentes, mortas ou com galhos quebradiços apresentam maior risco.</li>
                <li><strong>Proximidade a Estruturas:</strong> A necessidade de proteger casas, fios elétricos, etc., exige técnicas mais cuidadosas.</li>
                <li><strong>Necessidade de Remoção de Detritos:</strong> O custo pode incluir (ou não) o transporte e descarte dos resíduos.</li>
                <li className="mt-4 pt-4 border-t border-gray-200"><em>Estimativas (Exemplos - Solicite Orçamento):</em>
                  <ul className="list-none ml-4 mt-2 space-y-1 text-sm">
                    <li>Poda - Pequena (aprox. 1.5 andares): R$ 250 - R$ 350*</li>
                    <li>Poda - Média (aprox. 2 andares): R$ 350 - R$ 550*</li>
                    <li>Poda - Grande (aprox. 3 andares): R$ 600 - R$ 1100*</li>
                    <li>Poda - Extra Grande (aprox. 6 andares): R$ 900 - R$ 1800*</li>
                    <li>Remoção - Pequena (aprox. 1.5 andares): R$ 500 - R$ 850* (+ Adicional Toco)</li>
                    <li>Remoção - Média (aprox. 2 andares): R$ 1000 - R$ 1500* (+ Adicional Toco)</li>
                    <li>Remoção - Grande (aprox. 3 andares): R$ 2500 - R$ 4000* (+ Adicional Toco)</li>
                    <li>Remoção - Extra Grande (aprox. 6 andares): R$ 5000+* (+ Adicional Toco)</li>
                  </ul>
                   <p className="text-xs text-gray-500 mt-1">*Valores apenas como referência. Solicite um orçamento.</p>
                </li>
              </ul>
            </div>

            {/* Cost Factors for Stump Grinding */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Trituração de Tocos</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Diâmetro do Toco:</strong> Principal fator; tocos maiores levam mais tempo.</li>
                <li><strong>Tipo de Madeira:</strong> Madeiras duras (Ipê, etc.) são mais resistentes que macias ou palmeiras.</li>
                <li><strong>Profundidade da Trituração:</strong> Triturar mais fundo exige mais trabalho.</li>
                <li><strong>Acesso ao Toco:</strong> Dificuldades de acesso podem impactar o custo.</li>
                <li><strong>Número de Tocos:</strong> Triturar múltiplos tocos pode ter custo unitário menor.</li>
                <li><strong>Remoção dos Resíduos:</strong> O serviço pode incluir a remoção dos cavacos.</li>
                 <li className="mt-4 pt-4 border-t border-gray-200"><em>Estimativas (Exemplos - Solicite Orçamento):</em>
                  <ul className="list-none ml-4 mt-2 space-y-1 text-sm">
                    <li>Toco Palmeira (30cm diâmetro): R$ 75*</li>
                    <li>Toco Palmeira (50cm diâmetro): R$ 100*</li>
                    <li>Toco Palmeira (75cm diâmetro): R$ 140*</li>
                    <li>Toco Madeira Dura (15-25cm diâmetro): R$ 60*</li>
                    <li>Toco Madeira Dura (25-40cm diâmetro): R$ 120*</li>
                    <li>Toco Madeira Dura (45-60cm diâmetro): R$ 200*</li>
                    <li>Toco Madeira Dura (65-80cm diâmetro): R$ 300*</li>
                    <li>Toco Madeira Dura (85-120cm diâmetro): R$ 450*</li>
                  </ul>
                   <p className="text-xs text-gray-500 mt-1">*Valores apenas como referência. Solicite um orçamento.</p>
                </li>
              </ul>
            </div>
          </div>
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

