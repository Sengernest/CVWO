
import React from "react";

interface Thread {
  id: number;
  title: string;
  category: string;
}

const threads: Thread[] = [
  { id: 1, title: "Welcome to the forum", category: "General" },
  { id: 2, title: "React Tips & Tricks", category: "Programming" },
  { id: 3, title: "Best Books to Read", category: "Books" },
];

const ThreadList: React.FC = () => {
  return (
    <div>
      <h2>Threads</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <strong>{thread.title}</strong> - {thread.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
