import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState("youtube");
  const [loading, setLoading] = useState(false);

  async function addContent() {
    try {
      setLoading(true);

      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title: titleRef.current?.value,
          link: linkRef.current?.value,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-6">

      
        <div className="flex justify-end">
          <button onClick={onClose}>
            <CrossIcon size="lg" />
          </button>
        </div>

       
        <Input ref={titleRef} placeholder="Title" />
        <Input ref={linkRef} placeholder="Link" />

       
        <div className="flex gap-3 my-3">
          <Button
            text="YouTube"
            varient={type === "youtube" ? "primary" : "secondary"}
            onClick={() => setType("youtube")}
            size="md"
          />
          <Button
            text="Twitter"
            varient={type === "twitter" ? "primary" : "secondary"}
            onClick={() => setType("twitter")}
            size="md"
          />
        </div>

        
        {loading && (
          <div className="flex justify-center my-2">
            <div className="h-6 w-6 border-4 border-[#6C63FF] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        
        <Button
          text={loading ? "Adding..." : "Submit"}
          varient="primary"
          onClick={addContent}
          size={"md"}
        />
      </div>
    </div>
  );
}