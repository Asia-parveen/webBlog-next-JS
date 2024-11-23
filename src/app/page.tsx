// import React from "react";
// import { books } from "@/data/books";
// import Link from "next/link";
// import Image from "next/image";

// const HomePage = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto pb-20">
//       <h1 className="text-5xl font-bold text-center mb-6 cursor-pointer hover:text-[#F1c40F]">📚 Welcome to BookBlogs</h1>
//       <p className="text-center text-gray-600 mb-8">
//         &quot;Embark on a literary journey as we delve into in-depth blogs, exploring the timeless classics and best-selling books that have shaped the world of literature.&quot;
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {books.map((book) => (
//           <Link
//             href={`/books/${book.id}`}
//             key={book.id}
//             className="block border rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden bg-white image-container p-[10px]"
//           >
//             {/* Wrapping everything inside Link */}
//             <Image
//               src={book.image}
//               alt={book.title}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
//               <p className="text-gray-500">By {book.author}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React from "react";
import { books } from "../data/books";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto pb-20">
      <h1 className="text-5xl font-bold text-center mb-6 cursor-pointer hover:text-[#F1c40F]">📚 Welcome to BookBlogs</h1>
      <p className="text-center text-gray-600 mb-8">
      Embark on a literary journey as we delve into in-depth blogs, exploring the timeless<br></br>  classics and best-selling books that have shaped the world of literature.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link
            href={`/books/${book.id}`}
            key={book.id}
            className="block border rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden bg-white image-container p-[10px] "
          >
            {/* Wrapping everything inside Link */}
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-500">By {book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
