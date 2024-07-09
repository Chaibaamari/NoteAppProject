import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, TextArea, ...props }, ref) {
    return (
        <p className="flex  flex-col gap-1 justify-start mb-3">
            <label className="uppercase text-sm  text-stone-500 font-bold">
                {label}
            </label>
            {TextArea ? (
                <textarea
                    {...props}
                    className="bg-stone-200 text-slate-900 p-2  rounded-sm border-b-black border focus:outline-none"
                    ref={ref}
                ></textarea>
            ) : (
                <input
                    {...props}
                        className="bg-stone-200 text-slate-900 p-1  rounded-sm border-b-black border focus:outline-none"
                        ref={ref}
                />
            )}
        </p>
    );
});

export default Input;
