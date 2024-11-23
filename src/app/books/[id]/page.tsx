// import React from "react";
// import { books } from "../../../data/books";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// interface PageProps {
//   params: { id:string };
// }

// const BookDetails = ({ params }: PageProps) => {
//   const book = books.find((b) => b.id === params.id);

//   if (!book) return notFound();

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       {/* Breadcrumbs */}
//       {/* <nav className="text-sm text-gray-500 mb-6">
//         <Link href="/" className="hover:text-blue-500">Home</Link> / <span>{book.title}</span>
//       </nav> */}

//       {/* Book Details */}
//       <h1 className="text-4xl font-bold mb-6">{book.title}</h1>

//       <div className="rounded-lg p-2">
//         <Image
//           src={book.image}
//           alt={book.title}
//           width={800}
//           height={400}
//           className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:scale-105 hover:opacity-80"
//         />
//       </div>

//       <div className="text-center mt-8">
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Author:</span> {book.author}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Genre:</span> {book.genre}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Published Year:</span> {book.publishYear}
//         </p>
//         <p className="text-gray-700 leading-relaxed mb-6">
//           <span className="font-semibold text-gray-800">Description:</span> {book.description}
//         </p>
//       </div>

//       {/* Back to Home Button */}
//       <Link
//         href="/"
//         className="text-[#1D3557] hover:underline font-medium text-lg"
//       >
//         ← Back to Home
//       </Link>
//     </div>
//   );
// };

// export default BookDetails;

import React from "react";
import { books } from "../../../data/books";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const BookDetails = ({ params }: Props) => {
  const book = books.find((b) => b.id === params.id);

  if (!book) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto ">
      {/* Breadcrumbs */}
      {/* <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-500">Home</Link> / <span>{book.title}</span>
      </nav> */}

      {/* Book Details */}
      <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
      <div className=" rounded-lg  p-2">
        <Image
          src={book.image}
          alt={book.title}
          width={800}
          height={400}
          className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300  hover:opacity-60"
        />
      </div>
      <div className="text-center mt-[2rem]">
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Publisher:</span> {book.author}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Published Year:</span>{" "}
          {book.publishYear}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-gray-800">Description:</span>{" "}
          {book.description}
        </p>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default BookDetails;


