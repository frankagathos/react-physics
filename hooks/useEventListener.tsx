import { useEffect } from 'react'
declare global {
    interface Window { MyNamespace: any; }
}
// @ts-ignore
function useEventListener(container, event, callback) {
    if (typeof window !== "undefined") {
  // browser code
  const cont = container === window ? window : container.current
  useEffect(() => {
    if (cont) {
      cont.addEventListener(event, callback)
    }
    return () => {
      if (cont) {
        cont.removeEventListener(event, callback)
      }
    }
    // eslint-disable-next-line
  }, [cont, callback])

  return null
}
}

export default useEventListener
