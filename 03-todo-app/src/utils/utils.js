export function formatTasksForDatabase(tasks) {
  if (tasks.length === 0) return null;
  const newTasks = {};
  tasks.forEach((task) => {
    newTasks[task.id] = task;
  });

  return newTasks;
}

export function formatTasksFromDatabase(tasks) {
  return Object.values(tasks);
}

export function generateUserId() {
  return `${Date.now()}`;
}
