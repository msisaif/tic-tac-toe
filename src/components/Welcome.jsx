export default function Welcome({ message }) {
  return (
    <section className="dark:bg-slate-800 bg-gray-100 rounded-lg container max-w-4xl mx-auto flex justify-center items-center px-4 py-16 text-3xl md:text-5xl">
      <h1 className=" text-center font-bold text-sky-700">{message}</h1>
    </section>
  );
}
