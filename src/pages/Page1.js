import React, { useEffect, useState } from 'react';
import Seccion from '../components/Seccion';

const Page1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Página 1</h1>
      <Seccion title="Lista de Publicaciones" content="Aquí se muestran las publicaciones de la API." />
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Cuerpo</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page1;
