"use client"

import { useState } from 'react';
import CodeEditor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
loader.config({ monaco });

export default function Home() {
  const [html, setHTML] = useState('');
  const [css, setCSS] = useState('');
  const renderStr = ` ${html} <style>${css}</style> `;

  return (
    <main>
      <div className="flex">
        {/* HTML 编辑器 */}
        <div>
          <CodeEditor
            width="50vw"
            height="50vh"
            defaultLanguage='html'
            theme="vs-dark"
            value={html}
            onChange={(value: string) => setHTML(value || '')}
          />
        </div>

        <div>
          {/* CSS 编辑器 */}
          <CodeEditor
            width="50vw"
            height="50vh"
            defaultLanguage="css"
            theme="vs-dark"
            value={css}
            onChange={(value: string) => setCSS(value || '')}
          />
        </div>
      </div>
      {/* 页面渲染 */}
      <div dangerouslySetInnerHTML={{ __html: renderStr }}></div>
    </main>
  );
}
