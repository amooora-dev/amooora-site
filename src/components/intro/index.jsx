const Intro = () => {
  return (
    <section id='sobre' className='py-12 px-4 md:px-0 md:py-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-12 max-w-[750px] mx-auto'>
          <h2 className='text-[2.5rem] font-bold tracking-[-0.5px] mb-0 xsm:px-[1%] xsm:py-0 leading-[1.25] sm:leading-[1.35] xsm:leading-[1.35] text-slate-800'>Por nós e para nós</h2>
          <p className='text-[1.3rem] mt-3 xsm:mt-[12px] xsm:px-[3%] xsm:py-0 text-slate-700'>
            Somos a plataforma referência para a comunidade sáfica. Chegamos
            para somar, criar e espalhar conteúdo, informação e serviços com a
            nossa cara — feitos por nós, para nós, do jeitinho que a nossa
            comunidade merece.
          </p>
        </div>
        <iframe width="884" height="497" src="https://www.youtube.com/embed/PHO5TkLfpKg" title="AMOOORA" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full h-auto aspect-video max-w-[800px] mx-auto"></iframe>
      </div>
    </section>
  );
};

export default Intro;
