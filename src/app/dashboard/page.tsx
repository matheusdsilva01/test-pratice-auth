"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const username = Cookies.get("token");

  const logout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Página de login</h1>
      <p>Olá {username}</p>
      <p>Conteúdo protegido: Boas vindas usuário :)</p>
      <button className="py-2 px-4 bg-zinc-600 rounded-lg" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default Page;
