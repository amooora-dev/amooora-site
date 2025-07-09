import apoia from "../../../assets/images/apoooia_site.jpg";

const Manifesto = () => {
  return (
    <section id='manifesto' className='py-10'>
      <div className='container flex flex-col items-center justify-between gap-8 md:flex-row mx-auto relative'>
        <div className='grow flex flex-col items-start text-center md:text-left max-w-[750px]'>
          <p className='uppercase font-bold text-[0.85rem] text-gray-500 mb-2'>UM SONHO, UM IDEAL</p>
          <h2 className='text-[2.5rem] font-bold tracking-[-0.5px] mb-3 text-slate-800'>Manifesto</h2>
          <p className="text-slate-500 mb-2 font-semibold">Nós somos Amooora.</p>
          <p className="text-slate-500 mb-2 font-semibold">
            Nascemos da urgência e do desejo de construir um mundo onde a
            comunidade sáfica — mulheres lésbicas, bissexuais, pansexuais,
            pessoas trans e não binárias que se relacionam com outras
            identidades femininas — possa se sentir livre, segura e pertencente.
          </p>
          <p className="text-slate-500 mb-2 font-semibold">
            Somos uma plataforma feita por nós, para nós — um espaço onde
            existências plurais não apenas cabem, mas são celebradas, validadas
            e conectadas.
          </p>
          <p className="text-slate-500 mb-2 font-semibold">
            A Amooora é mais do que uma plataforma online! É a resposta a um
            vazio histórico de visibilidade, cuidado e recursos voltados para a
            comunidade sáfica.
          </p>
          <p className="text-slate-500 mb-2 font-semibold">
            É onde você pode ser quem é — sem medo, sem julgamentos, com
            acolhimento.
          </p>
          <p className="text-slate-500 mb-2 font-semibold">
            É onde a gente se encontra para existir com coragem, afeto e em todo
            o nosso potencial.
          </p>
        </div>
        <div className='self-stretch min-w-[40%] w-[400px] md:static absolute right-0 top-0 opacity-50 md:opacity-100 max-w-full flex justify-center items-center'>
          <img
            className='rounded-lg shadow-lg'
            src={apoia}
            alt='serviços'
            width={388}
            height={436}
          />
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
