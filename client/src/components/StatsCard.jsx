export default function StatsCards({ total, count, avg }) {
  const cards = [
    { number: `₹${total}`, label: 'Total Spent' },
    { number: count, label: 'Expenses' },
    { number: `₹${avg}`, label: 'Average' }
  ];

  return (
    <div className="mb-[25px] grid grid-cols-3 gap-[15px]">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-[15px] border border-white/20 bg-white/15 p-5 text-center text-white backdrop-blur-[10px]"
        >
          <div className="text-[1.6rem] font-bold">{c.number}</div>
          <div className="mt-1 text-[0.75rem] opacity-80">{c.label}</div>
        </div>
      ))}
    </div>
  );
}