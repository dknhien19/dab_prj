import { useState } from "react";
import { fetchQueryResults } from "@/utils/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSubmit = async () => {
    const data = await fetchQueryResults(query);
    setResults(data.results);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-bold text-blue-400">DAB v1.0</h2>
        <button className="mt-4 p-2 bg-gray-700 w-full rounded">Start new chat</button>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome <span className="text-blue-400">user!</span></h1>
        <input
          type="text"
          className="p-2 w-1/2 mt-4 bg-gray-700 border rounded"
          placeholder="Ask DAB"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          className="mt-4 p-2 bg-blue-500 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {results && (
          <pre className="bg-gray-800 p-4 mt-4 rounded">{JSON.stringify(results, null, 2)}</pre>
        )}
      </main>
    </div>
  );
}
