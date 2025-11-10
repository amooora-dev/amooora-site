"use client";
import { addEmail } from "@/backend/service/newsletter";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      setIsLoading(false);
      toast.error("Por favor, insira um email válido.");
      return;
    }
    setIsValid(true);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      toast.error("Houve um erro ao cadastrar o email. Tente novamente.");
      setIsLoading(false);
      return;
    }
    const { message, success } = await response.json();
    setIsSuccess(success);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    setIsLoading(false);
    setEmail("");
  };

  return (
    <section id='newsletter-1' className='py-4 px-3'>
      <div className='container mx-auto flex items-center justify-center flex-col md:flex-row'>
        <h4
          className={cn(
            "text-[1.5rem] font-bold tracking-[-0.5px] mb-3 w-full md:w-[40%] title"
          )}
        >
          Cadastre o seu email para saber as novidades em primeira mão!
        </h4>
        {isSuccess ? (
          <div>
            <p className='text-primary dark:text-primary-light font-semibold'>
              Email cadastrado com sucesso!
            </p>
          </div>
        ) : (
          <form
            className='flex gap-2 w-full md:w-[50%] items-center flex-col md:flex-row'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              className={cn(
                "grow py-2 px-1 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary w-full border-slate-300 placeholder:text-slate-500 dark:bg-slate-100/10 dark:border-slate-600 dark:placeholder:text-slate-400",
                "data-[error=true]:border-red-500 data-[error=true]:focus:ring-red-500/12 data-[error=true]:focus:border-red-500"
              )}
              placeholder='Seu melhor email'
              required
              id='s-email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-error={!isValid}
            />
            <button
              type='submit'
              className='bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:opacity-80 transition-colors duration-300 text-nowrap uppercase font-semibold text-center cursor-pointer w-full md:w-fit'
            >
              {isLoading ? (
                <Loader2 className='animate-spin' />
              ) : (
                "Inscrever-se"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
