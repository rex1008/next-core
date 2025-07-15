import { addTodo, getTodos } from "@/action";
import ClientButton from "@/components/client-button";
import SubmitButton from "@/components/submit-button";

const userId = "2333"

export default async function Page() {

  const todos = await getTodos()

  // const addTodoWithExtraParam = addTodo.bind(null, userId)

  return (
    <div className='p-10'>
      <div className="flex">
        <form action={addTodo}>
          <input type="text" name='todo' className='border p-2' />
          <SubmitButton/>
        </form>
        <ClientButton>疲惫</ClientButton>
      </div>
      <ul className='leading-8 mt-4'>
        {
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  )
}
