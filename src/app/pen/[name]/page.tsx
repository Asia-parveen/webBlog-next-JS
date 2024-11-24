"use client";

import { pens } from "../../../data/penData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  params: {
    name: string;
  };
};

const PenDetail = ({ params }: Props) => {
  const penName = decodeURIComponent(params.name.replace(/-/g, " "));

  const pen = pens.find(
    (pen) => pen.name.toLowerCase() === penName.toLowerCase()
  );

  if (!pen) {
    return notFound();
  }

  const [comments, setComments] = useState<
    { id: number; text: string; userImage: string }[]
  >([]);
  const [newComment, setNewComment] = useState("");
  const [userImage, setUserImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUserImage(e.target.files[0]);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newComment.trim() === "") return;

    const imageUrl = userImage
      ? URL.createObjectURL(userImage)
      : "/images/logo.jpg";

    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      userImage: imageUrl,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
    setUserImage(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white  rounded-lg">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{pen.name}</h1>
      <Image
        src={pen.imageUrl}
        alt={`Image of ${pen.name}`}
        width={500}
        height={300}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4 font-semibold">
        {pen.description}
      </p>
      <p className="text-lg text-gray-700 mb-6"><span className="font-bold text-yellow-700">Details:</span> { pen.content}<br></br>
        <button className="px-5 py-2 bg-[#1D3557] text-white mt-8 rounded-md hover:bg-[#5A8F7D]">Place Order</button>

      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
          Leave your Comment here:
        </h2>

        <form onSubmit={handleCommentSubmit} className="mb-6 p-6 rounded-lg ">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#1D3557] transition"
            rows={4}
          ></textarea>

          <div className="flex items-center mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full mt-2 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F1C40F] file:text-black hover:file:bg-[#D4AC0D]"
            />
            <span className="text-gray-600 text-sm font-bold">
              Upload a profile picture (optional)
            </span>
          </div>

          <button
            type="submit"
            className="bg-[#1D3557] text-white px-6 py-2 rounded-md hover:bg-[#5A8F7D] transition duration-300"
          >
            Post Comment
          </button>
        </form>

        {/* Display Comments */}
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start gap-4 bg-gray-300 p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg"
              >
                <Image
                  src={comment.userImage}
                  alt="User Image"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-800">User</p>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/pen"
        className="text-[#1D3557] hover:underline font-medium text-lg mt-8 inline-block"
      >
        ← Go Back
      </Link>
    </div>
  );
};

export default PenDetail;

