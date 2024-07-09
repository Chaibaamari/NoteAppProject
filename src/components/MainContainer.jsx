import logo from '../../public/logo.png'
import Button from './Button.jsx';

export default function MainContainer({ onselect }) {
    return (
        <section className=" grow flex flex-col gap-4 items-center pt-36 ">
            <img src={logo} alt="NoteApp" className=" max-w-24" />
            <h2>No Project Selected</h2>
            <p className=" text-stone-500">select a project or create new one</p>
            <Button
                onClick={onselect}
                name="Create New Project"/>
        </section>
    );
}