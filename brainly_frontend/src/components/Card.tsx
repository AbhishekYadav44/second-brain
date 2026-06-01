import axios from "axios";
import { BACKEND_URL } from "../config";
import { ShareIcon } from "../icons/ShareIcon";
import { Delete } from "../icons/Delete";

interface Props {
  _id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

async function deleteContent(id: string) {
  await axios.delete(`${BACKEND_URL}/api/v1/content/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  });

  window.location.reload();
}

export function Card({ _id, title, link, type }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition overflow-hidden">

      
      <div className="flex justify-between p-4">
        <h2 className="font-semibold text-gray-800">{title}</h2>

        <div className="flex gap-3">
          <a href={link} target="_blank">
            <ShareIcon size="md" />
          </a>

          <button onClick={() => deleteContent(_id)}>
            <Delete size="md" />
          </button>
        </div>
      </div>

    
      {type === "youtube" && (
        <iframe
          className="w-full h-64"
          src={link.replace("watch?v=", "embed/")}
          allowFullScreen
        />
      )}

      {type === "twitter" && (
        <div className="p-3">
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      )}
    </div>
  );
}