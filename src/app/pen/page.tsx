import { pens } from "../../data/penData";
import Link from "next/link";
import Image from "next/image";

// Function to format pen names for the URL
const formatNameForUrl = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""); // Converts "Fountain Pen!" to "fountain-pen"
};

const PenPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 my-6 hover:text-[#F1c40F] cursor-pointer">
        Our School Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pens.map((pen) => (
          <Link key={pen.name || pen.name} href={`/pen/${formatNameForUrl(pen.name)}`} passHref>
            <div className="cursor-pointer">
              <Image
                src={pen.imageUrl}
                alt={`Image of ${pen.name}`}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-60"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{pen.name}</h3>
              <p className="text-gray-600 mt-2">{pen.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PenPage;



// import { pens } from "../../data/penData";
// import Link from "next/link";
// import Image from "next/image";

// // Function to format pen names for the URL
// const formatNameForUrl = (name: string) => {
//   return name.toLowerCase().replace(/\s+/g, "-"); // Converts "Fountain Pen" to "fountain-pen"
// };

// const PenPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6 pb-20">
//       <h1 className="text-4xl font-bold text-gray-900 my-6 hover:text-[#F1c40F] cursor-pointer">Our School Items</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {pens.map((pen) => (
//           <Link key={pen.name} href={`/pen/${formatNameForUrl(pen.name)}`} passHref>
//             <div className="cursor-pointer">
//               <Image
//                 src={pen.imageUrl}
//                 alt={pen.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-60"
//               />
//               <h3 className="text-xl font-semibold text-gray-900 mt-4">{pen.name}</h3>
//               <p className="text-gray-600 mt-2">{pen.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PenPage;

