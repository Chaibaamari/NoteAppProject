import Button from './Button.jsx'

export default function SideBar({ onselect , project , handleInforamtion}) {
  return (
    <section className=" bg-stone-900 text-stone-50 md:w-72 border-solid h-screen min-w-80 mt-9 rounded-tr-xl px-8 py-4">
      <h2 className="text-xl text-stone-200 font-bold my-8 uppercase">
        Your Projects
      </h2>
      <Button name="+ Add Project" onClick={onselect} />
      <ul>
        {project.map(ele => {
          return (
            <li key={ele.Id}>
              <button className="w-full text-left px-2 py-1 rounded-sm  text-stone-400 hover:bg-stone-800 hover:text-stone-200" onClick={() => handleInforamtion(ele.Id)}>{ele.title}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}