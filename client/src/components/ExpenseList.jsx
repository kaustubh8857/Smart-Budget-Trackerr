import { categoryColors } from '../constants';

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="p-[30px] text-center text-[0.95rem] text-white/70">
        No expenses yet! Add your first expense above 👆
      </div>
    );
  }

  return (
    <div id="expenseList">
      {expenses.map((exp) => {
        const color = categoryColors[exp.category] || '#AAB7B8';
        return (
          <div
            key={exp._id}
            className="mb-3 flex animate-fadeIn items-center justify-between rounded-[15px] bg-white p-[15px_20px] shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-[42px] w-[42px] items-center justify-center rounded-xl text-[1.2rem]"
                style={{ background: `${color}22` }}
              >
                💰
              </div>
              <div>
                <div className="text-[0.95rem] font-semibold text-[#333]">{exp.title}</div>
                <div className="mt-0.5 text-[0.75rem] text-[#999]">{exp.category || 'Other'}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[1rem] font-bold text-amount-pink">₹{exp.amount}</span>
              <button
                onClick={() => onDelete(exp._id)}
                className="w-auto cursor-pointer rounded-lg border border-del-border bg-del-bg px-[14px] py-[6px] text-[12px] font-medium text-del-text hover:bg-del-hover hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}