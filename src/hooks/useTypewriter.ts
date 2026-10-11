import { useEffect, useState } from 'react'

type TypewriterOptions = {
  typeSpeed?: number
  deleteSpeed?: number
  pause?: number
  loop?: boolean
}

/**
 * Types each word in turn. With `loop`, words are deleted and cycled forever;
 * otherwise typing stops once the last word is complete.
 */
export function useTypewriter(words: string[], { typeSpeed = 70, deleteSpeed = 40, pause = 1800, loop = true }: TypewriterOptions = {}) {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState(reduceMotion ? (words[0] ?? '') : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion || words.length === 0) return

    const word = words[wordIndex % words.length] ?? ''
    const isLastWord = wordIndex === words.length - 1

    if (!deleting && text === word) {
      if (!loop && isLastWord) return
      const id = window.setTimeout(() => setDeleting(true), pause)
      return () => window.clearTimeout(id)
    }

    const id = window.setTimeout(
      () => {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        setText(next)
        if (deleting && next === '') {
          setDeleting(false)
          setWordIndex((index) => (index + 1) % words.length)
        }
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => window.clearTimeout(id)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, loop, reduceMotion])

  return text
}
