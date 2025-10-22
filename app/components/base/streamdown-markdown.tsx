'use client'
import { Streamdown } from 'streamdown'
import 'katex/dist/katex.min.css'

interface StreamdownMarkdownProps {
  content: string
  className?: string
}

export function StreamdownMarkdown({ content, className = '' }: StreamdownMarkdownProps) {
  return (
    <div className={`streamdown-markdown ${className}`}>
      <Streamdown
        components={{
          p: ({ children, ...props }) => {
            // 始终使用 div 而不是 p 标签以避免嵌套块级元素的 HTML 验证错误
            // 这解决了图片包装器、代码块等块级元素在 p 标签内的水合错误
            return <div {...props}>{children}</div>
          },
        }}
      >
        {content}
      </Streamdown>
    </div>
  )
}

export default StreamdownMarkdown
