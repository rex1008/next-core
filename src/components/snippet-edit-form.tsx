"use client";

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { editSnippet } from "@/actions";

export default function SnippetEditForm(props: { snippet: Snippet }) {
  const snippet = props.snippet;
  const [code, setCode] = useState(snippet.code);

  const editSnippetWithOtherInfo = editSnippet.bind(null, snippet.id, code);

  const handleChange = (code: string = "") => {
    setCode(code);
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        options={{
          minimap: { enabled: false },
        }}
        defaultValue={snippet.code}
        onChange={(code) => handleChange(code)}
      />
      <form action={editSnippetWithOtherInfo}>
        <button className="p-2 mt-2 border border-teal-500 rounded">Save</button>
      </form>
    </div>
  );
}
