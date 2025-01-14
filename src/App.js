

function App() {
  return (
    <div className="  h-screen bg-gradient-to-r from-indigo-500 from-10% via-stone-500 via-30% to-slate-500 to-90% flex flex-col justify-center items-center " >
<h1 className="flex  underline text-2xl font-extrabold " >To-Do</h1>

  <div className="flex justify-center items-center gap-4 mt-6">
  <form className="flex gap-3">
  <input className=" border-2 border-black px-4 py-2 outline-none rounded-md" type="text" placeholder ="enter the Task"></input>
  <button className="border-2 border-black bg-white text p-2 rounded-md font-mono">Add Task</button>
  </form>
  </div>

    </div>
  );
}

export default App;
