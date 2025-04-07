export default function Loading() {
    return (
        <div className='flex flex-col place-items-center'>
            <p className='dark:text-white text-3xl text-center m-5 p-5'>
                <img src='/assets/loading.svg' className='motion-safe:animate-spin dark:invert' />
            </p>
        </div>
    );
}