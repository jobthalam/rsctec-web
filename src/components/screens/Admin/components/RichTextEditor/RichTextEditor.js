"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "@/components/screens/Admin/components/EditorToolbar/EditorToolbar";
import styles from "./RichTextEditor.module.scss";

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: { openOnClick: false, autolink: true },
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor: ed }) => onChange(ed.isEmpty ? "" : ed.getHTML()),
  });

  return (
    <div className={styles.editor}>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} className={styles.content} />
    </div>
  );
}
