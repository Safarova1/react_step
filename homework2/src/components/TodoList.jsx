/*dano */
// ### Задача 2: Список задач
// **Описание:** Создайте компонент `TodoList`, который принимает массив
// задач через props и отображает их в виде списка. Каждая задача должна
// иметь текст и статус выполнения (выполнено/не выполнено).
// **Пример использования:**
// ```jsx
// const tasks = [
// { text: "Buy groceries", completed: false },
// { text: "Walk the dog", completed: true }
// ];
// <TodoList tasks={tasks} />
// ```
// **Требования:**
// - Отобразить текст каждой задачи.
// - Визуально различать выполненные и невыполненные задачи (например,
// зачеркнутый текст для выполненных).

import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return task.completed ? (
          <li key={task.id} id="vipolneno">
            {task.text}
          </li>
        ) : (
          <li key={task.id} id="nevipolneno">
            {task.text}
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
