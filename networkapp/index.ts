//Making a network request to fetch JSON data
//Import axios
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Creating a structure for an object. This time, for the response.data object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response =>{

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

showTodo(id, title, completed);

});

const showTodo = (id: number, title: string, completed: boolean) =>{
  console.log(`
  The todo ID is: ${id}
  Its title is: ${title}
  Is is completed? ${completed}
`
  );
};

