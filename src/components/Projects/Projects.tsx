"use client"

import { useState, useEffect } from 'react';
import Loading from '../ui/Loading';

export default function Blog() {
    
    interface Repo {
        full_name: string;
        html_url: string;
        name: string;
        description: string | null;
    }

    const [data, setData] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/TeejMcSteez/repos");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (error: unknown) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (loading) return ( 
        <Loading />
    );
    if (error) return <p className='dark:text-white text-xl'>Error: {error}</p>;
    return (
        <>
        <div className='dark:text-white flex flex-col place-items-center'>
            <h1 className='text-4xl m-2 p-2'>GitHub Public Repo Stream</h1>
                <div className='grid md:grid-cols-3 grid-flow-dense gap-2'>
                    {data.map((repo) => (
                        <div key={repo.full_name} className='bg-neutral-200 dark:bg-neutral-800 m-4 p-2 rounded-lg text-balance text-pretty'>
                            <a href={repo.html_url} className='text-blue-500' target='_blank'>{repo.name}</a>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
        </div>
        </>
    );
}