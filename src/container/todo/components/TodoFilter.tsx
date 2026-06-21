interface TodoFilterProps {
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  counts: { all: number; active: number; completed: number };
}

const filters: { id: 'all' | 'active' | 'completed'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
];

const TodoFilter = ({ filter, onFilterChange, counts }: TodoFilterProps) => {
  return (
    <div className="flex items-center gap-1 border-b border-neutral-200 mb-6">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={`px-4 py-2.5 text-sm font-medium transition-all border-b-2 font-cascadia ${
            filter === f.id
              ? 'text-black border-black bg-white'
              : 'text-neutral-400 border-transparent hover:text-black hover:border-neutral-300'
          }`}
        >
          {f.label} ({counts[f.id]})
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
