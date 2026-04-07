import './Toast.css';

interface ToastProps {
  mensagem: string;
  tipo: 'sucesso' | 'erro';
  onClose: () => void;
}

export const Toast = ({ mensagem, tipo, onClose }: ToastProps) => {
  if (!mensagem) return null;

  return (
    <div className={`toast-container ${tipo}`}>
      <span>{tipo === 'erro' ? '⚠️' : '✅'} {mensagem}</span>
      <button onClick={onClose} className="toast-close">X</button>
    </div>
  );
};