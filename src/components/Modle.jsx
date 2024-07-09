import { forwardRef, useRef } from "react";
import { useImperativeHandle } from "react";
import Button from "./Button.jsx";

const Modle = forwardRef(function Modle({ children, buttonClose }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog}
        className=" shadow-md p-4 rounded backdrop:bg-stone-900/90">
            {children}
            <form methode="dialog" className="text-right mt-4">
                <Button>
                    {buttonClose}
                </Button>
            </form>
        </dialog>
    )
});

export default Modle;