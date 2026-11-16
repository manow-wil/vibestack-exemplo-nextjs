// Página renderizada no servidor a cada acesso: prova que o Next.js está rodando (não é só HTML estático).
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Next.js no ar</h1>
      <p>Node {process.version} · renderizado às {new Date().toISOString()}</p>
    </main>
  );
}
