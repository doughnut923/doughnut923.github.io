export default function Button({text}) {

    return (
        <button className="bg-black text-white p-2 hover:bg-white hover:text-black dark:invert transition duration-300 ease-in-out">
            {text}
        </button>
    );

}
