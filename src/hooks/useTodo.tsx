import { useState, useEffect, useMemo } from "react";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

type FilterType = "all" | "active" | "completed";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const stored = localStorage.getItem("todos");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>("all");

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: text.trim(), isCompleted: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.isCompleted);
      case "completed":
        return todos.filter((t) => t.isCompleted);
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    todos: filteredTodos,
    allTodos: todos,
    addTodo,
    removeTodo,
    toggleTodo,
    filter,
    setFilter,
  };
};

export default useTodo;
