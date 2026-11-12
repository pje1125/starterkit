import { useCounterStore } from './store/useCounterStore';

export default function App() {
  const { count, increment, reset } = useCounterStore();

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-brand">내 생활 웹앱 Starter Kit</h1>
      <p className="text-gray-600">새로고침해도 값이 유지됩니다.</p>
      <div className="text-6xl font-bold tabular-nums">{count}</div>
      <div className="flex gap-3">
        <button
          onClick={increment}
          className="rounded-xl bg-brand px-6 py-3 font-semibold text-white active:scale-95"
        >
          +1
        </button>
        <button
          onClick={reset}
          className="rounded-xl border border-gray-300 px-6 py-3 font-semibold active:scale-95"
        >
          초기화
        </button>
      </div>
    </main>
  );
}
