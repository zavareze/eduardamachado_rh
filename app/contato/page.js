import Link from "next/link";

export default function Contato() {
  return (
  <div className="bg-slate-100 min-h-screen">
    <header className="text-slate-800 flex justify-center items-center flex-col md:bg-gray-200 md:m-3 md: h-90">
      <img src="/dinamize.jpg" width={150} height={200} />
      <h2 className="font-bold font-title text-xl pt-4 md:text-3xl">CONSULTORIA DE RH</h2>
      <div className="hidden md:flex">
        <p className="flex"><a href="/">Sobre Mim/</a></p>
        <p className="pl-1"><a href="/contato">Contato</a></p>  
      </div>
    </header>
    
    <div className="m-4 justify-center md:flex md:gap-16">
        <img src="/dinamize.jpg" className="w-full md:w-84"/>
        <div>
          <h2 className="font-bold font-title text-4xl pt-10 md:text-3xl"><a href="/">Consultoria de RH</a></h2>
          <p className="text-gray-400 pt-6 pb-1 text-2xl">Conectamos talentos às oportunidades certas</p>
          <div className="w-20 h-1 bg-amber-300"></div>
          <p className="pt-4 font-bold">Somos uma consultoria de RH séria, comprometida com resultados reais.</p>
          <p className="">Nosso foco é oferecer soluções eficientes, com um time dedicado a atrair, selecionar e desenvolver os talentos certos para sua empresa com nosso serviço de Recrutamento e Seleção.</p>
        </div>
    </div>

    <div className="mt-8 mx-2 mb-4">
      <div className="bg-neutral-800 px-4 pt-4 md:flex md:justify-center md:pb-5">
        <div className="md:mr-30">
            <h2 className="text-white text-4xl pb-2">Contato</h2>
            <div className="w-20 h-1 bg-amber-300"></div>
            <form className="mt-4 flex flex-col gap-2">
              <label className="text-white font-bold">Nome</label>
              <input type="text" id="nome" name="nome" className="bg-white md:h-10 md:w-100 w-full"/>

              <label className="text-white font-bold pt-2">Email</label>
              <input type="email" id="email" name="email" className="bg-white md:h-10 md:w-100 w-full"/>

              <label className="text-white font-bold pt-2">Mensagem</label>
              <input type="text" id="mensagem" name="mensagem " className="bg-white h-30 md:w-100 w-full"/>

             <input type="submit" value="Enviar" className="bg-white w-40 h-10 mt-2"/>
        </form>
        </div>
        
           <div className="text-white pt-30 pb-8 underline flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-8">
                <svg viewBox="-1.000 -1.000 66.000 67.000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <g id="svg_envelope">
                    <path d="M64.000,36.999 C64.000,40.313 62.314,43.999 59.000,43.999 C59.000,43.999 7.000,43.999 7.000,43.999 C3.686,43.999 -0.000,40.313 -0.000,36.999 C-0.000,36.999 -0.000,4.999 -0.000,4.999 C-0.000,4.838 0.047,4.699 0.064,4.546 C-0.043,3.968 0.074,3.355 0.488,2.877 C0.595,2.754 0.715,2.652 0.842,2.562 C2.113,0.871 4.639,-0.001 7.000,-0.001 C7.000,-0.001 59.000,-0.001 59.000,-0.001 C61.738,-0.001 63.346,1.168 63.829,3.437 C63.962,3.764 64.008,4.106 63.963,4.448 C63.974,4.632 64.000,4.803 64.000,4.999 C64.000,4.999 64.000,36.999 64.000,36.999 ZM7.000,39.999 C7.000,39.999 59.000,39.999 59.000,39.999 C60.104,39.999 60.000,38.102 60.000,36.999 C60.000,36.999 60.000,8.346 60.000,8.346 C60.000,8.346 33.309,29.698 33.309,29.698 C32.934,30.024 32.467,30.186 32.000,30.186 C31.533,30.186 31.066,30.024 30.690,29.698 C30.690,29.698 4.000,8.346 4.000,8.346 C4.000,8.346 4.000,36.999 4.000,36.999 C4.000,38.102 5.897,39.999 7.000,39.999 ZM58.000,3.999 C58.000,3.999 7.000,3.999 7.000,3.999 C6.447,3.999 5.695,3.973 5.081,4.087 C5.081,4.087 32.000,25.540 32.000,25.540 C32.000,25.540 59.028,3.999 59.028,3.999 C59.017,3.999 59.011,3.999 59.000,3.999 C59.000,3.999 58.000,3.999 58.000,3.999 Z" fill="#666" fillRule="evenodd"/>
                  </g>
                </svg>
              </div>
              <Link href="http://eduardamachadorh.com.br/">eduardamachadorh.com.br</Link>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="w-8">
                 <svg viewBox="-1.000 -1.000 67.000 67.000" xmlns="http://www.w3.org/2000/svg"> 
                   <path fillRule="evenodd" fill="#666" id="path-1" d="m47.22958,20.44c0,0 9.468,0.026 9.468,0.026c0.808,-0.018 1.557,0.539 1.68,1.492c0,0 -0.002,1.026 -0.002,1.026c-0.019,0.809 -0.687,1.478 -1.495,1.496c0,0 -14.344,-0.063 -14.344,-0.063c-0.015,0.002 -0.026,0.007 -0.04,0.007c0,0 -0.732,0.017 -0.732,0.017c-0.403,0.011 -0.766,-0.148 -1.024,-0.409c-0.263,-0.259 -0.358,-0.621 -0.349,-1.027c0,0 0.079,-0.732 0.079,-0.732c0,-0.014 -0.055,-0.025 -0.054,-0.039c0,0 0.041,-14.438 0.041,-14.438c0.018,-0.807 0.686,-1.289 1.495,-1.308c0,0 1.027,-0.001 1.027,-0.001c0.808,-0.018 1.449,0.685 1.431,1.493c0,0 -0.055,9.677 -0.055,9.677c0,0 16.418,-16.395 16.418,-16.395c0.781,-0.781 2.047,-0.781 2.828,0c0.781,0.781 0.781,2.047 0,2.828c0,0 -16.372,16.35 -16.372,16.35zm0.76,19.151c0.759,0 1.457,0.171 2.029,0.521c1.312,0.803 12.025,7.926 13.004,8.613c1.609,1.129 2.254,3.909 0.486,6.434c-0.064,0.092 -6.801,9.385 -10.633,9.385c0,0 -0.089,0 -0.089,0c-10.946,-0.35 -23.758,-10.947 -32.584,-19.775c-8.827,-8.829 -19.42,-21.641 -19.768,-32.543c-0.125,-3.881 9.287,-10.706 9.381,-10.772c0.974,-0.678 2.097,-0.998 3.156,-0.998c1.342,0 2.578,0.515 3.268,1.471c0.732,1.011 7.826,11.769 8.605,13c0.83,1.304 0.715,3.24 -0.308,5.177c-0.54,1.028 -2.315,4.151 -3.186,5.678c0.951,1.354 3.395,4.541 8.346,9.49c4.982,4.987 8.144,7.408 9.49,8.354c1.527,-0.873 4.65,-2.651 5.682,-3.194c1.058,-0.556 2.142,-0.841 3.121,-0.841zm-9.024,8.767c0,0 -2.078,-1.459 -2.078,-1.459c-1.539,-1.082 -4.887,-3.662 -10.021,-8.799c-5.114,-5.113 -7.702,-8.472 -8.789,-10.017c0,0 -1.459,-2.078 -1.459,-2.078c0,0 1.257,-2.205 1.257,-2.205c1.618,-2.834 2.754,-4.86 3.12,-5.555c0.343,-0.652 0.404,-1.11 0.4,-1.289c-1.096,-1.709 -7.135,-10.852 -8.26,-12.487c-0.043,-0.007 -0.098,-0.013 -0.164,-0.013c-0.297,0 -0.615,0.103 -0.873,0.281c-3.482,2.518 -7.152,6.143 -7.658,7.557c0.347,7.476 6.939,17.992 18.59,29.646c11.65,11.653 22.177,18.246 29.679,18.598c1.411,-0.526 5.012,-4.195 7.549,-7.709c0.303,-0.436 0.328,-0.783 0.301,-0.943c-1.648,-1.131 -10.988,-7.333 -12.52,-8.293c-0.013,-0.002 -0.031,-0.002 -0.05,-0.002c-0.125,0 -0.586,0.027 -1.26,0.382c-0.84,0.442 -3.422,1.905 -5.559,3.125c0,0 -2.205,1.26 -2.205,1.26z"/>
                </svg>
              </div>
              <Link href="https://api.whatsapp.com/send/?phone=5551982623615&text&type=phone_number&app_absent=0">(51) 98262-3615</Link>
            </div>
            <div className="flex items-center gap-4 ">
                <div className="w-8">
                  <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#a)">
<path d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" clipRule="evenodd" fill="#666" fillRule="evenodd"/>
</g>
<defs>
<clipPath id="a">
<path d="M0 0h16v16H0z" fill="#fff"/>
</clipPath>
</defs>
                  </svg>
                </div>              
                <Link href="https://www.instagram.com/dinamize_rh/#">@dinamize_rh</Link>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#666"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <Link href="https://www.linkedin.com/in/eduarda0410/">linkedin.com/in/eduarda0410</Link>
            </div>
          </div>         
      </div>
  
    </div>

     <footer className="text-center">
      <p>© 2025 Todos os direitos reservados</p>
    </footer>
  </div>
  );
}
