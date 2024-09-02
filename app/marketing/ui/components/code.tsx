import * as React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeProps {
  children: string | string[]
  className: string
}

export default function Code({ children, className }: CodeProps) {
  const language = className?.replace('lang-', '') || 'typescript'

  return (
    <div className="codeBlock">
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        showLineNumbers
        customStyle={{
          fontSize: '16px',
          border: '1px solid #e5e7eb',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
