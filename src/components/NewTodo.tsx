import React, { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Text</button>
    </form>
  );
};

export default NewTodo;
