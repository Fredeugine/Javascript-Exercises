// Define a function to print out uncompleted todos in each note
function uncompletedNotes(notes) {
  // Loop through each note in the notes array
  for (const note of notes) {
    // Get the todos array for the current note
    todos = note.todos
    // Loop through each todo in the todos array
    for (const todo of todos) {
      // Check if the todo is false
      if (!todo.done){
        // Print out the uncompleted todo
        console.log(todo)
      }
    }
  }
}

// Define an array of notes with todos
const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

// Call the uncompletedNotes function with the notes array
uncompletedNotes(notes);
