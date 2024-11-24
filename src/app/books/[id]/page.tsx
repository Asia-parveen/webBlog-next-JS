"use client";

import React, { useState } from "react";
import { books } from "../../../data/books";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Comment {
  text: string;
  date: Date;
  image: string;
}

const BookDetails = ({ params }: { params: { id: string } }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [userImage, setUserImage] = useState<string>("");

  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
    return null;
  }

  const handleAddComment = () => {
    if (newComment.trim() && userImage) {
      setComments((prevComments) => [
        ...prevComments,
        { text: newComment.trim(), date: new Date(), image: userImage },
      ]);
      setNewComment("");
      setUserImage("");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setUserImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
      <div className="rounded-lg p-2">
        <Image
          src={book.image}
          alt={book.title}
          width={800}
          height={400}
          className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:opacity-60"
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
          <br />
          <button className="px-5 py-2 bg-[#1D3557] text-white mt-8 rounded-md hover:bg-[#5A8F7D]">
            Place Order
          </button>
        </p>
      </div>

      <Link
        href="/"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Back to Home
      </Link>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1D3557]">
          Leave your Comment here:
        </h2>

        <div className="mb-8">
          <textarea
            className="w-full p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#F1C40F] resize-none mb-4"
            rows={4}
            placeholder="Please Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <label className="block mb-4">
            <span className="font-bold text-[#1D3557]">Upload Your Image</span>
            <input
              type="file"
              accept="image/*"
              className="block w-full mt-2 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F1C40F] file:text-black hover:file:bg-[#D4AC0D]"
              onChange={handleImageUpload}
            />
          </label>

          {userImage && (
            <div className="mb-4">
              <Image
                src={userImage}
                alt="User Preview"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          )}
          <button
            onClick={handleAddComment}
            className="bg-[#1D3557] text-white px-6 py-2 rounded-md hover:bg-[#5A8F7D] transition duration-300"
          >
            Post Comment
          </button>
        </div>

        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-300 p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={comment.image}
                    alt="User avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>

                <div className="flex-grow">
                  <p className="text-gray-800 text-lg">{comment.text}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {comment.date.toLocaleDateString()} at{" "}
                    {comment.date.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#1D3557] font-semibold">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;

