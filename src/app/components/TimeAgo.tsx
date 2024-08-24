"use client";
import ReactTimeago from "react-timeago";

export default function TimeAgo({ createdAt }: { createdAt: string }) {
  return (
    <>
      <ReactTimeago date={createdAt} />
    </>
  );
}
