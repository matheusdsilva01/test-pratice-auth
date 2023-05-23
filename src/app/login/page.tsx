"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const singIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) {
      return alert("Preencha os campos!!!");
    }
    Cookies.set("token", username);
    router.push("/dashboard");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Página de login</h1>
      <form onSubmit={singIn}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-black"
        />
        <button className="py-2 px-4 bg-zinc-600 rounded-lg" type="submit">
          logar
        </button>
      </form>
    </div>
  );
};

export default Page;
