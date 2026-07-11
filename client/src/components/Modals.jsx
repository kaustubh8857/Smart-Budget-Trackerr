export default function Modal({ modal, onClose }) {
  if (!modal.active) return null;

  const isSuccess = modal.type === 'success';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-[320px] rounded-[20px] bg-white p-[30px] text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-popIn">
        <div className="mb-[15px] text-[2.5rem]">{isSuccess ? '✅' : '❌'}</div>
        <div className="mb-2 text-[1.1rem] font-semibold text-[#333]">{modal.title}</div>
        <div className="mb-5 text-[0.9rem] text-[#666]">{modal.message}</div>
        <button
          onClick={onClose}
          className={`w-full rounded-[10px] py-3 font-poppins text-sm font-semibold cursor-pointer ${
            isSuccess ? 'bg-success-bg text-success-text' : 'bg-del-bg text-del-text'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
}