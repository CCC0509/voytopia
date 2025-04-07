export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Voytopia</h1>
        <p className="text-muted-foreground mb-6">
          和朋友一起編輯與分享你的旅行計畫 ✈️
        </p>
        <a
          href="/plans"
          className="px-4 py-2 bg-primary text-white rounded-xl hover:opacity-90"
        >
          查看我的旅遊計畫
        </a>
      </div>
    </main>
  );
}
