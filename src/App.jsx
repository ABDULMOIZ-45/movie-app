import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async (searchQuery) => {
    if (searchQuery) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8118e05b58d706b38c045d3dcf1df26a&query=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.results);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    } else {
      // Fetch popular movies if no query
      fetchMovies('popular');
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        🎬 Movie Explorer
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Movies List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <p className="col-span-full text-center text-gray-400">
            No movies found 😢
          </p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="w-full h-72 flex items-center justify-center bg-gray-800 text-gray-500">
                  No Image
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-500 mb-2">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {movie.overview || "No overview available"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;




















































// import React, { useState, useEffect } from 'react';

// const MovieSearch = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');

//   const fetchMovies = async (searchQuery) => {
//     if (searchQuery) {
//       const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8118e05b58d706b38c045d3dcf1df26a&query=${searchQuery}`);
//       const data = await response.json();
//       setMovies(data.results);
//     } else {
//       setMovies([]);
//     }
//   };

//   useEffect(() => {
//     if (query) {
//       fetchMovies(query);
//     } else {
//       // Fetch popular movies if no query
//       fetchMovies('popular');
//     }
//   }, [query]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for a movie..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <div>
//         {movies.length === 0 ? <p>No movies found</p> : (
//           <ul>
//             {movies.map((movie) => (
//               <li key={movie.id}>
//                 <h3>{movie.title}</h3>
//                 <p>{movie.overview}</p>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieSearch;
