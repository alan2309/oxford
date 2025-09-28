"use client";

import { useEffect, useState } from "react";

interface Chapter {
   _id: string;
  title: string;
  status: boolean;
  book: string;
  index: string;
}

const Page = () => {
  const [data, setData] = useState<Chapter[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result.data[0].data);
        setData(result.data[0].data);
      } catch (err: any) {
        setError(err?.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No data found</div>;

  return (
    <div>
      <ul>
        {data.map((chapter: Chapter,index) => {
          return <h1 key={chapter._id}>
            {index}- {chapter.title}
          </h1>
})}
        {/* {JSON.stringify(data.data)} */}
      </ul>
    </div>
  );
};

export default Page;