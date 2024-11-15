import { useEffect, useState } from 'react';
import { Category } from '../types';
import { API_URL } from '../config/constants';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = () => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then((data: Category[]) => setTasks(data))
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error);
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, setTasks, error };
};

export default useFetchTasks;
