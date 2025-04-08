export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Voytopia 🌍</h1>
      <p className="mt-4">開始建立你的旅遊計畫吧！</p>
      <a
        href="/create"
        className="mt-6 inline-block bg-primary text-white px-4 py-2 rounded-xl"
      >
        建立新計畫
      </a>
    </main>
  );
}
