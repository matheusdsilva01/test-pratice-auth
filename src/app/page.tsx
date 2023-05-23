import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center justify-between p-24">
      <div className="w-full">
        <p>
          Projeto criado para concluir o desafio prático usando React, cumprindo
          todos os requisitos.
        </p>
        <p>
          OBS: Apesar de estarem na mesma página o funcionamento de cada
          componente não interfere no funcionamento dos demais.
        </p>
      </div>
      <div>
        <Link className="py-2 px-4 bg-zinc-600 rounded-lg" href="/login">
          Ir para página de login
        </Link>
        <Link className="py-2 px-4 bg-zinc-600 rounded-lg" href="/dashboard">
          Ir para página protegida(dashboard)
        </Link>
      </div>
    </main>
  );
}
