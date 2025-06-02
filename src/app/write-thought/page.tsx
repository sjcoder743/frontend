"use client";
// random for checking in github
import { useState } from "react";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";

export default function WriteThoughtPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitting thought", { title, content });
    try {
      const res = await axios.post("/write-thought", { title, content });
      console.log("Response:", res.data);
      alert(res.data.message);
      router.push("/profile");
    } catch (err) {
      console.error("Error saving thought", err);
      alert("Error saving thought");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write Your Thought</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 border"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 border"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-black text-white p-2">
          Save
        </button>
      </form>
    </div>
  );
}
