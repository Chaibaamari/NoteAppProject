import Input from "./Input";
import { useRef } from "react";
import Modle from "./Modle.jsx";


export default function NewProject({ onselect, onAdd }) {
    const dialog = useRef();
    const title = useRef();
    const Description = useRef();
    const date = useRef();

    function handleSave() {
        const saveTitle = title.current.value
        const saveDescrition = Description.current.value
        const savedate = date.current.value;
        
        if (saveTitle.trim() === "" || saveDescrition.trim() === "" || savedate.trim() === "") {
            dialog.current.open()
        } else {
            onAdd({
                title: saveTitle,
                description: saveDescrition,
                date: savedate
            });
        }
    }
    return (
        <>
            <Modle ref={dialog} buttonClose="Okey">
                <h2 className="text-xl text-stone-500 font-bold my-4">Error</h2>
                <p className="text-stone-400 mb-4">Opss....I think you forgot some information check all the input is empty</p>
            </Modle>
            <section className="flex flex-col gap-4 pt-36 w-1/2">
                <div className="text-end">
                    <button
                        className="ml-2 text-xs text-stone-700 px-4 py-2 rounded-md  hover:text-stone-100 hover:bg-stone-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="ml-2 text-xs text-stone-200 px-4 py-2 rounded-md bg-stone-950 hover:text-stone-100 hover:bg-stone-600 transition"
                    >
                        Save
                    </button>
                </div>
                <Input ref={title} label="Title"
                    type="Title"
                />
                <Input ref={Description} label="Decription" TextArea />
                <Input ref={date} label="Due Date"
                    type="date"
                />
            </section>
        </>
    );
}