import { useState } from "react";
import Upload from "../features/upload/Upload";
import PdfViewer from "../features/pdf/PdfViewer";
import { useAuth } from "../features/auth/useAuth";
import ChatBox from "../components/organisms/ChatBox";

export default function Dashboard() {
  const { user, hasUploadAccess } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="h-screen w-screen flex bg-slate-100">
      {/* ================= Sidebar ================= */}
      <aside
        className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 border-b border-slate-700">
          {sidebarOpen && (
            <h1 className="text-xl font-bold tracking-wide">LegalMind</h1>
          )}
        </div>

        {sidebarOpen && (
          <div className="px-4 py-3 text-sm text-slate-300">
            User: {user?.name} <br />
          </div>
        )}

        <div className="flex-1" />

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-3 rounded bg-indigo-600 px-3 py-2 text-sm font-medium hover:bg-indigo-500 transition"
        >
          {sidebarOpen ? "Collapse" : "☰"}
        </button>
      </aside>

      {/* ================= MAIN (FULL RIGHT WIDTH) ================= */}
      <main className="flex-1 w-full flex flex-col">
        {/* Upload */}
        {hasUploadAccess() && (
          <div className="bg-white border-b shadow-sm p-2">
            <h2 className="text-lg font-semibold mb-2">Upload Document</h2>
            <Upload />
          </div>
        )}
        {/* Chat */}
        <div className="flex flex-1 w-full p-2">
          {/* Chat (fixed width) */}
          <section className="w-[420px] min-w-[380px] border-r bg-white flex flex-col">
            <div className="p-3 border-b font-semibold">Chat</div>
            <div className="flex-1 overflow-hidden p-2">
              <ChatBox />
            </div>
          </section>

          {/* PDF (fills ALL remaining space) */}
          <section className="flex-1 bg-white flex flex-col w-full">
            <div className="p-3 border-b font-semibold">PDF Viewer</div>
            <div className="flex-1 overflow-auto p-2">
              <PdfViewer />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
