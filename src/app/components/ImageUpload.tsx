"use client";

import { IconDefinition, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRef } from "react";

export default function ImageUpload({ icon }: { icon: IconDefinition }) {
  const fileInRef = useRef<HTMLInputElement>(null);

  async function upload(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (input && input.files?.length && input.files.length > 0) {
      const file = input.files[0];
      const data = new FormData();
      data.set("file", file);
      const response = await axios.post("/api/upload", data);
      if (response.data.url) {
      }
    }
  }
  return (
    <>
      <div className="bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-gray-400" />
      </div>
      <div className="mt-2">
        <input
          onChange={upload}
          ref={fileInRef}
          type="file"
          className="hidden"
        />
        <Button type="button" onClick={() => fileInRef.current?.click()}>
          select file
        </Button>
      </div>
    </>
  );
}
