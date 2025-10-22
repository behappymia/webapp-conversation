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
            // 检查子元素中是否包含图片
            const hasImage = Array.isArray(children) && children.some(child =>
              typeof child === 'object' && child !== null
              && 'props' in child && child.props && 'src' in child.props,
            )

            // 如果包含图片，使用 div 而不是 p 标签
            if (hasImage) {
              return <div {...props}>{children}</div>
            }

            return <p {...props}>{children}</p>
          },
        }}
      >
        {content}
      </Streamdown>
    </div>
  )
}

export default StreamdownMarkdown
