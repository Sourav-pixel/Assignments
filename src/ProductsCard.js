import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsCard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <p className="text-gray-700 text-base">{post.body}</p>
            </div>
            <div className="px-6 pt-4 pb-2">

              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{post.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
