import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-screen bg-slate-100">
    <header className="text-slate-800 flex justify-center items-center flex-col md:bg-gray-200 md:m-3 md: h-90">
      <img src="/dinamize.jpg" width={150} height={200} />
      <h2 className="font-bold font-title text-xl pt-4 md:text-3xl ">CONSULTORIA DE RH</h2>
    <div className="hidden md:flex">
      <p className="flex"><a href="/">Sobre Mim /</a></p>
      <p className="pl-1"><a href="/contato">Contato</a></p>  
    </div>    
    </header> 
    

    <div className="md:bg-gray-200 md:m-3">
         <div className="p-4 sm:w-10/12 lg:w-8/12 bg-white shadow mx-auto">
      <div className="md:flex md:gap-16">
        <img src="/bio2.webp" className="w-screen md:w-64"/>
        <div>
          <h1 className="text-6xl font-bold pt-16 pb-2">Eduarda <br />Machado</h1>
          <div className="w-20 h-1 bg-amber-300"></div>
          <p className="pt-2 text-gray-500">Consultora de Recursos Humanos</p>
        </div>
      </div>
      <div className="md:flex md:gap-20">
        <div>
          <h2 className="text-3xl font-bold pt-12 pb-2 w-44">SOBRE MIM</h2>
          <div className="w-20 h-1 bg-amber-300"></div>
        </div>
        <div>
          <p className="pt-20">Olá, sou <b>Eduarda Machado</b>, consultora apaixonada por conectar pessoas e oportunidades</p>
        <ul className="pt-4 list-disc px-8">
          <li>
            <p>Atuo na área de Recursos Humanos há mais de 3 anos, com sólida experiência em gestão de equipes e colaboradores em grandes estruturas, como clubes aquáticos.</p>
          </li>
          <li> 
            <p>Ao longo dessa trajetória, desenvolvi um olhar atento para o comportamento humano, o potencial de cada profissional e a importância de um processo seletivo humanizado, estratégico e eficiente.</p>
          </li>
         <li>
            <p>Há quase dois anos me dedico exclusivamente ao Recrutamento e Seleção, uma área que me encanta pela capacidade de transformar carreiras e fortalecer empresas.</p>
         </li>
          <li>
             <p>Sempre em busca de aprimoramento e novas vivências, em 2025 decidi dar um passo além: empreender. Assim nasceu minha consultoria de RH — com o propósito de oferecer soluções personalizadas tanto para empresas quanto para profissionais que desejam se destacar no mercado.</p>
          </li>
          <li>
            <p className="pb-4">Meu trabalho é feito com escuta, técnica e propósito. Vamos juntos?</p>
          </li>
        </ul>
        </div>
      </div>
      <div>
       <div className="h-0.5 bg-gray-200"></div>
       <div className="md:flex md:gap-20">
            <div>
                <h2 className="text-4xl font-bold pt-2 pb-2 w-44">Nossa Visão, Missão e Valores </h2>
                 <div className="w-20 h-1 bg-amber-300"></div>
            </div>
            <div>
        <p className="pt-6 pb-4"><b>Nossa missão</b> é promover processos seletivos transparentes, humanizados e eficientes, que valorizem não apenas habilidades, mas também trajetórias e propósitos.</p>
        <p className="pb-4"><b>Nossa visão</b> é ser reconhecida como uma consultoria referência em recrutamento humanizado, contribuindo para ambientes de trabalho mais diversos, produtivos e alinhados com os valores das organizações.</p>
        <p className="pb-1"><b>Nossos valores</b> nos guiam em cada projeto:</p>
        <ul>
        <li>
            <p><b>Humanização:</b> colocamos as pessoas no centro das decisões.</p>
      
            <p><b>Transparência:</b> atuamos com ética e clareza em todas as etapas.</p>
          </li>
          <li>
            <p><b>Comprometimento:</b> assumimos cada desafio com foco e dedicação.</p>
          </li>
          <li>
            <p><b>Excelência:</b> buscamos sempre o melhor resultado para todos os envolvidos.</p>
          </li>
          <li>
            <p><b>Inclusão e Diversidade:</b> respeitamos e valorizamos todas as pessoas.</p>
          </li>
          <li><p><b>Crescimento Contínuo</b> acreditamos no desenvolvimento como caminho para o sucesso.</p></li>
        </ul>
       </div>
       </div>
       
        
    </div>
    </div>
    </div>


    <div className="p-4 md:bg-gray-200 md:m-3">
      <div className="p-4 sm:w-10/12 lg:w-8/12 md:bg-white shadow md:mx-auto">
         <h1 className="text-4xl font-bold text-center pb-2">Serviços</h1>
      <div className="w-20 h-1 bg-amber-300 flex mx-auto"></div>
      <h2 className=" py-6 text-2xl font-bold">CONSULTORIA  EMPRESARIAL | RECRUTAMENTO E SELEÇÃO</h2>
      <ul>
        <li>
          <p>- Triagem de currículos;</p>
        </li>
        <li>
          <p>- Banco de currículos;</p>
        </li>
        <li>
          <p>- Buscas em plataformas como Infosjobs, Linkedin e indeed;</p>
        </li>
        <li>
          <p>- Relatório de entrevista;</p>
        </li>
        <li>
         <p>- Divulgação das vagas sites como Infojobs, LinkedIn, etc.</p>
        </li>
      </ul>
      <h2 className=" py-6 text-2xl font-bold">CONSULTORIA E CARREIRA | CANDIDATO</h2>
        <p>- Análise de Curriculo;</p> 
        <p>- Personalização do seu CV do zero;</p>
        <p>- Consultora LinkedIn</p>
        <p>- Preparação para entrevistas;</p>
        <p>- Carta de apresentação.</p>
      </div>
    </div>
    <div className="bg-neutral-800 h-50 m-4 text-center text-white py-15">
      <h1>Falar agora com um especialista</h1>
        <Link href="/contato"><button className="bg-black w-40 h-10 m-5 cursor-pointer">Entre em contato</button></Link>
    </div>
    <footer className="text-center">
      <p>© 2025 Todos os direitos reservados</p>
    </footer>
  </div>
  );
}
