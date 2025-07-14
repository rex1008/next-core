import { addTodo, getTodos } from "@/action";

const userId = "2333"

export default async function Page() {

  const todos = await getTodos()

  const addTodoWithExtraParam = addTodo.bind(null, userId)

  return (
    <div className='p-10'>
        <form action={addTodoWithExtraParam}>
          <input type="text" name='todo' className='border p-2' />
          <button type='submit' className='border p-2 ml-2'>提交</button>
        </form>
        <ul className='leading-8 mt-4'>
          {
            todos.map((todo, index) => <li key={index}>{todo}</li>)
          }
        </ul>
    </div>
  )
}
