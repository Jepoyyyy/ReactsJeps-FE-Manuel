import { useState } from 'react';
import { Plus } from 'lucide-react';
import useTodo from '@/hooks/useTodo';
import TodoItem from './components/TodoItem';
import TodoFilter from './components/TodoFilter';
import { ConfirmDialog } from '@/components/ConfirmDialog';

const TodoPage = () => {
  const [input, setInput] = useState('');
  const { todos, allTodos, addTodo, removeTodo, toggleTodo, filter, setFilter } = useTodo();

  // Confirmation dialog state
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskText = input.trim();
    if (!taskText) return;

    setConfirmDialog({
      isOpen: true,
      title: 'Add Task',
      message: `Do you want to add the task: "${taskText}"?`,
      onConfirm: () => {
        addTodo(taskText);
        setInput('');
        setConfirmDialog({ ...confirmDialog, isOpen: false });
      },
    });
  };

  const handleRemoveTodo = (id: string, text: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Delete Task',
      message: `Are you sure you want to delete "${text}"?`,
      onConfirm: () => {
        removeTodo(id);
        setConfirmDialog({ ...confirmDialog, isOpen: false });
      },
    });
  };

  const counts = {
    all: allTodos.length,
    active: allTodos.filter((t) => !t.isCompleted).length,
    completed: allTodos.filter((t) => t.isCompleted).length,
  };

  return (
    <div className="todo-page max-w-2xl mx-auto p-6 text-left">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight text-black font-playfair">Todo</h1>

      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow bg-white border border-neutral-200 text-black rounded-lg px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:border-black font-cascadia transition-colors"
        />
        <button
          type="submit"
          className="bg-black hover:bg-neutral-800 text-white font-cascadia font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-all hover:shadow-[2px_2px_0_0_#000]"
        >
          <Plus className="w-5 h-5" />
          Add
        </button>
      </form>

      {/* Filter Tabs */}
      <TodoFilter filter={filter} onFilterChange={setFilter} counts={counts} />

      {/* Todo List */}
      <div className="todo-list border border-neutral-200 bg-white/50 p-6 rounded-xl">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={() => handleRemoveTodo(todo.id, todo.text)}
            />
          ))
        ) : (
          <p className="text-neutral-500 text-sm py-8 text-center">
            {filter === 'all'
              ? 'No todos yet. Add one above.'
              : filter === 'active'
              ? 'No active todos.'
              : 'No completed todos.'}
          </p>
        )}
      </div>

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        onConfirm={confirmDialog.onConfirm}
        onCancel={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
      />
    </div>
  );
};

export default TodoPage;
