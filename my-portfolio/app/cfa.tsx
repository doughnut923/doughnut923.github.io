import Button from './components/button';

export default function CFA() {

    return (
        <>
            <div className="col-span-2 w-full block p-2">
                <h1 className='text-7xl md:text-8xl w-full text-center mt-11 mb-7 font-normal italic text-gray-300 dark:invert'>Call me if you <span className='font-bold not-italic text-white dark:invert'>need</span> me :p</h1>
                <div className='m-auto block w-fit'>
                    <Button text={"GET IN TOUCH"} />
                </div>
            </div>
        </>
    )

}