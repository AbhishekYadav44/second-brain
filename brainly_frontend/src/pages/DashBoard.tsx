import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useState } from "react";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export default function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const contents: Content[] = useContent();

  const filteredContents = contents.filter((c) => {
    if (activeFilter === "all") return true;
    return c.type === activeFilter;
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#F4F6F8] via-[#EAECEF] to-[#DDE2E7] text-[#1F2937]">

      <Sidebar onFilterChange={setActiveFilter} />

      <div className="flex-1 ml-72 p-6">
        <div className="flex justify-end gap-3 p-4 mb-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-md">
          <Button
            startIcon={<ShareIcon size="md" />}
            size="md"
            varient="primary"
            text="Share Brain"
            onClick={() => {}}
          />

          <Button
            startIcon={<PlusIcon size="md" />}
            size="md"
            varient="primary"
            text="Add Content"
            onClick={() => setModelOpen(true)}
          />
        </div>

      
        <CreateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContents.length === 0 ? (
            <p className="text-gray-500 col-span-3 text-center">
              No content found
            </p>
          ) : (
            filteredContents.map((c) => (
              <Card key={c._id} {...c} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}