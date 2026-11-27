"use client";

import React from "react";
import { useEditorState } from "@tiptap/react";
import styles from "./EditorToolbar.module.scss";

const BUTTONS = [
  { id: "bold", icon: "fas fa-bold", title: "Bold", run: (c) => c.toggleBold() },
  { id: "italic", icon: "fas fa-italic", title: "Italic", run: (c) => c.toggleItalic() },
  { id: "underline", icon: "fas fa-underline", title: "Underline", run: (c) => c.toggleUnderline() },
  { divider: true, id: "d1" },
  { id: "h2", label: "H2", title: "Heading 2", active: ["heading", { level: 2 }], run: (c) => c.toggleHeading({ level: 2 }) },
  { id: "h3", label: "H3", title: "Heading 3", active: ["heading", { level: 3 }], run: (c) => c.toggleHeading({ level: 3 }) },
  { id: "h4", label: "H4", title: "Heading 4", active: ["heading", { level: 4 }], run: (c) => c.toggleHeading({ level: 4 }) },
  { divider: true, id: "d2" },
  { id: "bulletList", icon: "fas fa-list-ul", title: "Bullet list", run: (c) => c.toggleBulletList() },
  { id: "orderedList", icon: "fas fa-list-ol", title: "Numbered list", run: (c) => c.toggleOrderedList() },
  { id: "blockquote", icon: "fas fa-quote-right", title: "Quote", run: (c) => c.toggleBlockquote() },
  { id: "link", icon: "fas fa-link", title: "Link", link: true },
  { divider: true, id: "d3" },
  { id: "undo", icon: "fas fa-undo", title: "Undo", stateless: true, run: (c) => c.undo() },
  { id: "redo", icon: "fas fa-redo", title: "Redo", stateless: true, run: (c) => c.redo() },
];

export default function EditorToolbar({ editor }) {
  const active = useEditorState({
    editor,
    selector: ({ editor: ed }) => {
      if (!ed) return {};
      return BUTTONS.reduce((acc, b) => {
        if (b.divider || b.stateless) return acc;
        acc[b.id] = b.active ? ed.isActive(...b.active) : ed.isActive(b.id);
        return acc;
      }, {});
    },
  });

  if (!editor) return <div className={styles.toolbar} />;

  const handleLink = () => {
    const prev = editor.getAttributes("link").href || "";
    const url = window.prompt("Enter URL (leave empty to remove)", prev);
    if (url === null) return;
    const chain = editor.chain().focus().extendMarkRange("link");
    if (url === "") chain.unsetLink().run();
    else chain.setLink({ href: url }).run();
  };

  return (
    <div className={styles.toolbar}>
      {BUTTONS.map((b) =>
        b.divider ? (
          <span key={b.id} className={styles.divider} />
        ) : (
          <button
            key={b.id}
            type="button"
            title={b.title}
            aria-label={b.title}
            className={`${styles.btn} ${active?.[b.id] ? styles.active : ""}`}
            onClick={() => (b.link ? handleLink() : b.run(editor.chain().focus()).run())}
          >
            {b.icon ? <i className={b.icon} aria-hidden="true" /> : b.label}
          </button>
        )
      )}
    </div>
  );
}
