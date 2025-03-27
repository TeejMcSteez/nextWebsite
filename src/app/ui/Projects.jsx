"use client"

import {useState, useEffect } from 'react';

export default function Blog() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/TeejMcSteez/repos");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty array for some reason means it only runs on mount ***
    if (loading) return <p className='dark:text-white text-xl'>Loading . . .</p>;
    if (error) return <p className='dark:text-white text-xl'>Error: {error}</p>;
    return (
        <>
        <div className='dark:text-white flex flex-col place-items-center'>
            <h1 className='text-4xl m-2 p-2'>GitHub Stream</h1>
                <div className='grid grid-cols-3 grid-flow-dense gap-2'>
                    {data.map((repo) => (
                        <div key={repo.full_name} className='bg-neutral-200 dark:bg-neutral-800 p-2 rounded-lg'>
                            <a href={repo.html_url} className='text-blue-500' target='_blank'>{repo.name}</a>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
        </div>
        </>
    );
}