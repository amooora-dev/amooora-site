"use client";
import { useEffect, useState } from "react";

const CookiesToast = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const checkCookie = document.cookie.indexOf("CookieBy=Amooora");
    setShow(checkCookie === -1);
  }, []);

  const handleAccept = () => {
    document.cookie = "CookieBy=Amooora; max-age=" + 60 * 60 * 24;
    if (document.cookie) {
      setShow(false);
    } else {
      console.error(
        "Cookie can't be set! Pleaseunblock this site from the cookie setting of your browser."
      );
    }
  };

  const handleReject = () => {
    console.warn("Cookies rejected. Some functionality may be limited.");
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div
      id='cookies-consent-popup'
      className="text-slate-800 fixed bottom-0 left-0 bg-white z-60 flex justify-between
      px-8 py-4 gap-4 shadow-2xl md:flex-row flex-col"
    >
      <p className=''>
        Este site usa cookies para melhorar sua experiência de navegação,
        analisar o tráfego do site e oferecer melhores experiências de usuário.
        Ao continuar a usar este site, você concorda com o uso de cookies. Saiba
        mais em nossa&nbsp;
        <a href='/privacy' className="underline">política de cookies</a>.
      </p>
      <div className='flex gap-4 items-center'>
        <button
          type='button'
          className='rounded-md bg-[#932D6F] px-3 py-2 !text-sm focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-gray-900'
          onClick={handleAccept}
        >
          Aceitar
        </button>
        <button
          type='button'
          onClick={handleReject}
          className='rounded-md bg-gray-500 px-3 py-2 !text-sm focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-gray-900'
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
};

export default CookiesToast;
