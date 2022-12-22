//how todo is like ,defining types

class Todo {
  //TODO:no need to define it in normal javascript
  id: string;
  text: string;
  //TODO:
  constructor(todoText: string) {
    this.id = new Date().toString();
    this.text = todoText;
  }
}
export default Todo;
