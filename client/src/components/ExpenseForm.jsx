import { useState } from 'react';

const inputClasses =
  'w-full rounded-[10px] border-2 border-[#eee] px-[15px] py-3 text-sm font-poppins outline-none transition-colors focus:border-focus-teal';

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    onAdd({ title: title.trim(), amount, category }, () => {
      setTitle('');
      setAmount('');
      setCategory('');
    });
  };

  return (
    <div className="mb-5 rounded-[20px] bg-white p-[25px] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      <h2 className="mb-[15px] text-[1.1rem] text-[#333]">➕ Add New Expense</h2>

      <div className="mb-3 grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClasses}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={inputClasses}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`${inputClasses} mb-3`}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Rent">Rent</option>
        <option value="Other">Other</option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full cursor-pointer rounded-[10px] bg-gradient-to-r from-btn-start to-btn-end py-[13px] font-poppins text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        + Add Expense
      </button>
    </div>
  );
}