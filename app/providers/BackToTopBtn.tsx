'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 400) setShow(true)
    if (show && window.scrollY <= 400) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className="bg-indigo-950 dark:bg-white text-white dark:text-indigo-950 p-2 shadow-lg rounded-xl"
          >
            <TbArrowNarrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}