import Header from "./Header";
import Board from "./components/Board";

export default function App() {
  return (
    <>
      <Header title="TIC-TAC-TOE" />
      <main className="sm:py-8">
        <section className="container max-w-4xl mx-auto px-8 py-4 grid gap-8 sm:grid-cols-2">
          <Board />
        </section>
      </main>
    </>
  );
}
