const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // printing the current state of that task
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Marking tasks as complete
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();
