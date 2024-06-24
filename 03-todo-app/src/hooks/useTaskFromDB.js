import { useEffect } from "react";
import { getTasks } from "../services/firestore";
import { formatTasksFromDatabase } from "../utils/utils";
import { useState } from "react";

export function useTaskFromDB(setTasks) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let active = true;

    // fetch data
    async function getData() {
      setStatus("fetching");
      const tasks = await getTasks();

      setStatus("resolved");
      if (active) {
        if (tasks) {
          setTasks(formatTasksFromDatabase(tasks));
        }
      }
    }

    getData();

    return () => {
      active = false;
    };
  }, []);

  return status;
}
