import { createClient } from "@/backend/connection/client";
import { SupabaseClient } from "@supabase/supabase-js";

export const addEmail = async (inputEmail: string) => {
  const supabase = createClient();
  try {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      const { data: loginData, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: process.env.NEXT_PUBLIC_SUPABASE_EMAIL!,
          password: process.env.NEXT_PUBLIC_SUPABASE_PASSWORD!,
        });
      if (loginError) {
        console.error("Erro ao autenticar usuário: ", loginError);
        return { message: "Erro de autenticação", success: false, data: null };
      }
      console.log("Usuário autenticado:", loginData.user.email);
    }

    const { data, error } = await supabase
      .from("emails")
      .insert({ email: inputEmail })
      .select()
      .single();

    if (error) {
      console.error("Erro ao adicionar email: ", error);
      return { message: "Erro ao adicionar email", success: false, data: null };
    }

    return { message: "Email adicionado com sucesso", success: true, data };
  } catch (error) {
    console.error("Erro ao adicionar email: ", error);
    return { message: "Erro ao adicionar email", success: false, data: null };
  }
};

class NewsletterService {
  private _supabase: SupabaseClient | null = null;

  private get supabase(): SupabaseClient {
    if (!this._supabase) {
      this._supabase = createClient();
    }
    return this._supabase;
  }

  getEmail = async (inputEmail: string) => {
    const { data, error } = await this.supabase
      .from("emails")
      .select("email")
      .eq("email", inputEmail)
      .single();
    if (!data?.email || error) {
      return false;
    }
    return true;
  };

  addEmail = async (inputEmail: string) => {
    try {
      const { data: sessionData } = await this.supabase.auth.getSession();

      if (!sessionData.session) {
        const { data: loginData, error: loginError } =
          await this.supabase.auth.signInWithPassword({
            email: process.env.NEXT_PUBLIC_SUPABASE_EMAIL!,
            password: process.env.NEXT_PUBLIC_SUPABASE_PASSWORD!,
          });

        if (loginError) {
          console.error("Erro ao autenticar usuário: ", loginError);
          return { message: "Erro de autenticação", success: false };
        }
        console.log("Usuário autenticado:", loginData.user.email);
      }

      const emailExists = await this.getEmail(inputEmail);
      if (emailExists) {
        return { message: "Email já cadastrado", success: false };
      }

      const { data, error } = await this.supabase
        .from("emails")
        .insert({ email: inputEmail })
        .select()
        .single();

      if (error) {
        console.error("Erro ao adicionar email: ", error);
        return { message: "Erro ao adicionar email", success: false };
      }

      return { message: "Email adicionado com sucesso", success: true, data };
    } catch (error) {
      console.error("Erro ao adicionar email: ", error);
      return { message: "Erro ao adicionar email", success: false };
    }
  };
}

const newsletterService = new NewsletterService();

export { newsletterService };
