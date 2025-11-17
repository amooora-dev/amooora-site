import { SupabaseClient } from "@supabase/supabase-js";
import supabaseFactory from "../connection";

const supabase = supabaseFactory();

export const addEmail = async (inputEmail: string) => {
  try {
    const { data, error } = await supabase
      .from("emails")
      .insert({ email: inputEmail })
      .select()
      .single();

    if (error) {
      console.error("Erro ao adicionar email: ", error);
      return error.code === "23505"
        ? {
            message: "Email já cadastrado",
            success: false,
            data: null,
          }
        : {
            message: "Houve um erro ao cadastrar o email. Tente novamente.",
            success: false,
            data: null,
          };
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
      this._supabase = supabase;
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
