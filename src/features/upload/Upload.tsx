// src/components/FileUpload.tsx
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Progress } from "../../components/atoms/Progress";

export default function Upload() {
  const { hasUploadAccess } = useAuth();

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Idle");
  
  if (!hasUploadAccess()) return null;

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setStatus("Uploading...");
    
    const reader = new FileReader();

    reader.onload = function(e) {
      const base64PDF = e.target.result; // This is a Base64 string
      // Store it in sessionStorage
      sessionStorage.setItem('uploadedPDF', base64PDF);
    };

  reader.readAsDataURL(file); // Read file as Base64
    
    const chunkSize = 1024 * 1024; // 1MB
    const totalChunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < totalChunks; i++) {
      const chunk = file.slice(i * chunkSize, (i + 1) * chunkSize);
      await uploadChunk(chunk, i, totalChunks);
      setProgress(Math.round(((i + 1) / totalChunks) * 100));
    }

    setStatus("Processing/Indexing...");
    await simulateProcessing();
    setStatus("Done!");
  };

  return (
    <div className="border p-4 rounded">
      <input type="file" onChange={handleFile} className="mb-2" />
      <Progress value={progress} max={100} />
      <p>Status: {status}</p>
    </div>
  );
};

const uploadChunk = async (chunk: Blob, index: number, total: number) => {
  // Replace with real chunk upload API
  return new Promise((res) => setTimeout(res, 200));
};

const simulateProcessing = async () => new Promise((res) => setTimeout(res, 2000));
