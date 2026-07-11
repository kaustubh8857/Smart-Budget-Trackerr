import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { categoryColors } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ expenses }) {
  if (expenses.length === 0) return null;

  const categoryTotals = {};
  expenses.forEach((exp) => {
    const cat = exp.category || 'Other';
    categoryTotals[cat] = (categoryTotals[cat] || 0) + exp.amount;
  });

  const labels = Object.keys(categoryTotals);
  const data = {
    labels,
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: labels.map((l) => categoryColors[l] || '#AAB7B8')
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  };

  return (
    <div className="mt-5 rounded-[20px] bg-white p-[25px] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
      <h3 className="mb-[15px] text-[1rem] text-[#333]">📊 Category Wise Spending</h3>
      <Pie data={data} options={options} />
    </div>
  );
}