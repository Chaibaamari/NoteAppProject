export default function Button ({name , children , onselect,...props}) {
    return (
        <button
            className="text-xs text-stone-400 px-4 py-2 mb-3 rounded-md bg-stone-700 hover:text-stone-100 hover:bg-stone-600"
            {...props}
        >
            {children}
            {name}
        </button>
    );
}