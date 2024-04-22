"use client"

import { useState } from 'react';
import CodeEditor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
loader.config({ monaco });
import './page.css';

const CODE_EDITOR_HEIGHT = '50vh';
const CODE_EDITOR_THEME = 'vs-dark';
const CODE_EDITOR_OPTIONS = {
  fontSize: 18 
};

export default function Home() {
  const [html, setHTML] = useState('');
  const [css, setCSS] = useState('');
  const renderStr = ` ${html} <style>${css}</style> `;

  return (
    <main className="container flex flex-col p-10 h-full bg-slate-800">
      <div className="flex gap-4">
        {/* HTML 编辑器 */}
        <div className="flex-1">
          <span className="text-gray-400">
            HTML
          </span>
          <CodeEditor
            value={html}
            onChange={value => setHTML(value || '')}
            defaultLanguage='html'
            height={CODE_EDITOR_HEIGHT}
            theme={CODE_EDITOR_THEME}
            options={CODE_EDITOR_OPTIONS}
            className="text-5xl"
          />
        </div>

        <div className="flex-1">
          <span className="text-gray-400">
            CSS 
          </span>
          {/* CSS 编辑器 */}
          <CodeEditor
            value={css}
            onChange={value => setCSS(value || '')}
            height={CODE_EDITOR_HEIGHT}
            theme={CODE_EDITOR_THEME}
            defaultLanguage="css"
            options={CODE_EDITOR_OPTIONS}
          />
        </div>
      </div>
      {/* 页面渲染 */}
      <div
        dangerouslySetInnerHTML={{ __html: renderStr }}
        className="content flex-1 p-4 mt-4 text-white bg-gray-300"
      ></div>
    </main>
  );
}
