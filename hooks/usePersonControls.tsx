import { useEffect, useState } from 'react'

const usePersonControls = () => {
  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    keyZ: 'downward',
    Space: 'jump',
  }

  //@ts-ignore
  const moveFieldByKey = (key: any) => keys[key]

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    downward: false,
    left: false,
    right: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  return movement
}

export default usePersonControls
