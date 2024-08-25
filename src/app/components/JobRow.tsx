import type { Job } from "@/models/Job";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "./TimeAgo";
import Link from "next/link";

export default async function JobRow({ jobDoc }: { jobDoc: Job }) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute cursor-pointer top-4 right-4 ">
          <FontAwesomeIcon className="size-4 text-gray-200" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt=""
            />
          </div>
          <div className="grow flex md:flex">
            <div className="grow">
              <div className="text-gray-500 textsm">{jobDoc.orgName}</div>
              <div className="font-bold text-lg mb-1">{jobDoc.title}</div>
              <div className="text-gray-400 text-sm capitalize">
                {jobDoc.remote} &middot; {jobDoc.city}, {jobDoc.country}{" "}
                &middot; {jobDoc.type}-time{" "}
                {jobDoc.isAdmin && (
                  <>
                    {" "}
                    &middot; <Link href={"/jobs/edit/" + jobDoc._id}>
                      Edit
                    </Link>{" "}
                    &middot;
                    <button>Delete</button>
                  </>
                )}
              </div>
            </div>
            {jobDoc.createdAt && (
              <div className="content-end text-gray-500 text-xs">
                <TimeAgo createdAt={jobDoc.createdAt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
