import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: { id: string; text: string; isCompleted: boolean };
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-neutral-100 group">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-5 h-5 border flex items-center justify-center shrink-0 transition-all duration-200 ${
          todo.isCompleted
            ? 'bg-black border-black'
            : 'border-neutral-300 hover:border-black'
        }`}
      >
        {todo.isCompleted && <Check className="w-3.5 h-3.5 text-white" />}
      </button>

      {/* Text */}
      <span
        className={`flex-grow text-sm transition-colors font-cascadia ${
          todo.isCompleted
            ? 'line-through text-neutral-400'
            : 'text-neutral-900'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete */}
      <button
        onClick={() => onRemove(todo.id)}
        className="p-1.5 rounded text-red-500 group-hover:text-red-600 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;
