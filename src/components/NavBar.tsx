import categories from "@/mock-categories.json";
export default function NavBar() {
  const someCategories = categories.slice(0, 4);
  return (
    <header className="mx-auto p-4">
      <nav className="flex justify-between items-center bg-slate-500 px-4 py-2 rounded-md">
        <span className="flex items-end text-3xl font-semibold">
          <img src="/logo.webp" alt="Logo" className="size-10" />
          <a href="#" className="contents">
            <h1>MovieList</h1>
            <strong className="bg-none text-red-700 font-semibold">
              Pro
            </strong>
          </a>
        </span>
        <ul className="flex gap-6 px-2">
          {someCategories.map((category) => (
            <li key={category._id}>
              <a href={`#${category.category}`} className="hover:underline">
                {category.category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
