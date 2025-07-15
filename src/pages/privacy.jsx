const Privacy = () => {
  return (
    <section id='privacy-page' className='pb-8 pt-20 px-4'>
      <div className='container mx-auto text-slate-600'>
        <div className='flex flex-col items-center justify-center gap-5 mb-12'>
          <h2 className='text-5xl font-bold text-slate-800'>
            Política de Privacidade da Amooora
          </h2>
          <p>Data de Vigência: 06 de julho de 2024</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p>
            A Amooora valoriza sua privacidade e se compromete a proteger suas
            informações pessoais. Esta Política de Privacidade descreve como
            coletamos, usamos e protegemos os dados fornecidos por você ao
            visitar nosso site e se inscrever para receber nossas novidades.
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>1.</span> Informações Coletadas
          </h4>

          <p>
            Ao visitar nosso site e se inscrever para receber atualizações,
            podemos coletar as seguintes informações:
          </p>

          <h5 className='font-bold text-lg text-slate-700'>
            <span className=' '>1.1.</span> Informações de Contato
          </h5>

          <p>
            Seu endereço de e-mail é coletado quando você se inscreve para
            receber novidades.
          </p>

          <h5 className='font-bold text-lg text-slate-700'>
            <span className=' '>1.2.</span> Dados de Navegação
          </h5>

          <p>
            Nosso site, hospedado pela GoDaddy, utiliza cookies e outras
            tecnologias de rastreamento para coletar informações sobre sua
            navegação, como o tipo de navegador, páginas visitadas, duração da
            visita e outras estatísticas.
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>2.</span> Uso das Informações
          </h4>

          <p>As informações coletadas são usadas para:</p>

          <ul className='list-disc list-inside flex flex-col gap-3'>
            <li>
              <strong>Envio de Novidades:</strong> Utilizamos seu e-mail para
              enviar atualizações, promoções e outras comunicações relacionadas
              ao conteúdo da Amooora.
            </li>
            <li>
              <strong>Melhoria do Site:</strong> Utilizamos os dados de
              navegação para melhorar a experiência do usuário em nosso site e
              entender melhor o comportamento dos visitantes.
            </li>
          </ul>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>3.</span> Compartilhamento de Informações
          </h4>

          <p>
            Nós não vendemos, trocamos ou transferimos para terceiros as suas
            informações pessoais, exceto quando necessário para cumprir com a
            lei, proteger nossos direitos ou em caso de fusão ou aquisição.
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>4.</span> Segurança das Informações
          </h4>

          <p>
            Tomamos medidas de segurança adequadas para proteger suas
            informações contra acesso não autorizado, alteração, divulgação ou
            destruição. No entanto, nenhum método de transmissão pela Internet
            ou armazenamento eletrônico é totalmente seguro, e não podemos
            garantir segurança absoluta.
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>5.</span> Seus Direitos
          </h4>

          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais que coletamos. Para exercer esses direitos, entre em
            contato conosco através do e-mail{" "}
            <a href='mailto:amooora@amooora.com.br' className='underline'>
              amooora@amooora.com.br
            </a>
            .
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>6.</span> Alterações a Esta Política de
            Privacidade
          </h4>

          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Recomendamos que você revise esta página regularmente para estar
            ciente de quaisquer mudanças. A data de vigência no topo desta
            página indica quando esta Política de Privacidade foi atualizada
            pela última vez.
          </p>

          <h4 className='font-bold text-2xl mt-4 text-slate-800'>
            <span>7.</span> Contato
          </h4>

          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou
            sobre nossas práticas de tratamento de dados, entre em contato
            conosco através do e-mail{" "}
            <a
              href='mailto:amooora@amooora.com.br'
              className='underline'
            >
              amooora@amooora.com.br
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
