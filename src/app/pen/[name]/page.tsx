// src/app/pen/[name]/page.tsx
import { pens } from "../../../data/penData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Define the type for the dynamic route params
type Props = {
  params: {
    name: string; // This will contain the pen name from the URL
  };
};

const PenDetail = ({ params }: Props) => {
  // Decode the URL-encoded name and replace hyphens with spaces
  const penName = decodeURIComponent(params.name.replace(/-/g, " "));
  
  // Find the pen in the data array
  const pen = pens.find((pen) => pen.name.toLowerCase() === penName.toLowerCase());

  // If the pen is not found, return a 404 page
  if (!pen) {
    return notFound(); // Return 404 page
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{pen.name}</h1>
      <Image
        src={pen.imageUrl}
        alt={`Image of ${pen.name}`}
        width={500}
        height={300}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4 font-bold">{pen.description}</p>
      <p className="text-lg text-gray-700 mb-6">{pen.content}</p>
      <Link
        href="/pen"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Go Back
      </Link>
    </div>
  );
};

export default PenDetail;





// import { pens } from "../../../data/penData";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//   params: {
//     name: string; // This will contain the pen name from the URL
//   };
// };

// const PenDetail = ({ params }: Props) => {
//   // Decode the URL-encoded name and replace hyphens with spaces
//   const penName = decodeURIComponent(params.name.replace(/-/g, " "));
  
//   // Find the pen in the data array
//   const pen = pens.find((pen) => pen.name.toLowerCase() === penName.toLowerCase());

//   // If the pen is not found, return a 404 page
//   if (!pen) {
//     return notFound(); // Return 404 page
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-4xl font-semibold text-gray-900 mb-4">{pen.name}</h1>
//       <Image
//         src={pen.imageUrl}
//         alt={`Image of ${pen.name}`}
//         width={500}
//         height={300}
//         className="w-full h-auto rounded-lg mb-6"
//       />
//       <p className="text-lg text-gray-700 mb-4 font-bold">{pen.description}</p>
//       <p className="text-lg text-gray-700 mb-6">{pen.content}</p>
//       <Link
//         href="/pen"
//         className="text-[#1D3557] hover:underline font-medium text-lg"
//       >
//         ← Go Back
//       </Link>
//     </div>
//   );
// };

// export default PenDetail;



// import { pens } from "../../../data/penData";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link  from "next/link";

// type Props = {
//   params: {
//     name: string; // This will contain the pen name from the URL
//   };
// };

// const PenDetail = ({ params }: Props) => {
//   // Convert the name from URL format back to the original pen name (spaces and lowercase)
//   const penName = params.name.replace(/-/g, " ");
  
//   // Find the pen in the data array
//   const pen = pens.find((pen) => pen.name.toLowerCase() === penName.toLowerCase());

//   // If the pen is not found, return a 404 page
//   if (!pen) {
//     return notFound(); // Return 404 page
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-4xl font-semibold text-gray-900 mb-4">{pen.name}</h1>
//       <Image
//         src={pen.imageUrl}
//         alt={pen.name}
//         width={500}
//         height={300}
//         className="w-full h-auto rounded-lg mb-6"
//       />
//       <p className="text-lg text-gray-700 mb-4 font-bold ">{pen.description}</p>
//       <p className="text-lg text-gray-700  ">{pen.content}</p>
//       <Link
//         href="/pen"
//         className="text-[#1D3557] hover:underline font-medium text-lg mt-20"
//       >
//         ← Go Back 
//       </Link>
//     </div>
    

//   );
// };

// export default PenDetail;

