// src/components/ConfirmDialog.tsx
interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="absolute inset-0" onClick={onCancel} />

      <div className="relative w-full max-w-md bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] animate-scale-in">
        <h3 className="font-playfair text-xl font-bold text-black mb-2">{title}</h3>
        <p className="font-cascadia text-sm text-neutral-700 mb-6 leading-relaxed">{message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-cascadia text-sm rounded-lg transition-all"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-black hover:bg-neutral-800 text-white font-cascadia text-sm rounded-lg shadow-[2px_2px_0_0_#000] transition-all"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
