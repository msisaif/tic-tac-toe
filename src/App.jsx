import Header from "./Header";
import Board from "./components/Board";

export default function App() {
  return (
    <>
      <Header title="TIC-TAC-TOE" />
      <main className="py-8">
        <section className="container max-w-4xl mx-auto p-4 grid gap-4 sm:grid-cols-2">
          <Board />
        </section>
      </main>
    </>
  );
}
