import Header from "./Header";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <>
      <Header title="Project Title" />
      <main className="py-8">
        <Welcome message="Welcome to Project" />
      </main>
    </>
  );
}
