export default function Header({ title }) {
  return (
    <header className="py-4 dark:bg-slate-950 bg-gray-50 shadow w-full sticky top-0">
      <nav className="container max-w-5xl mx-auto flex justify-between items-center gap-4">
        <a
          className="size-10 md:size-16 rounded-full border-4 border-double border-sky-700 bg-white flex justify-center items-center text-sky-700 font-bold shrink-0 grow-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </a>
        <h1 className="text-2xl md:text-4xl text-sky-700 font-bold uppercase">
          {title}
        </h1>
      </nav>
    </header>
  );
}
