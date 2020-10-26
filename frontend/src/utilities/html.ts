import marked from 'marked'
import DOMPurify from 'dompurify'

export const markdownToHtml = (markdown: string | null | undefined): string => {
  return String(DOMPurify.sanitize(String(marked(markdown || ''))))
}