import Image from "next/image";

export default function Loading() {
    return (
        <div className='flex flex-col place-items-center'>
            <p className='dark:text-white text-3xl text-center m-5 p-5'>
                <Image height={200} width={200} src='/assets/loading.svg' className='motion-safe:animate-spin dark:invert' alt="Loading Spinner"/>
            </p>
        </div>
    );
}