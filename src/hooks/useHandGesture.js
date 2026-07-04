// Stub — MediaPipe integration (disabled by default)
// To enable: set GESTURE_ENABLED = true in App.jsx and flesh out this hook
import { useEffect } from 'react'

export function useHandGesture({ enabled = false, onSwipeLeft, onSwipeRight } = {}) {
  useEffect(() => {
    if (!enabled) return
    // MediaPipe hands setup would go here
  }, [enabled, onSwipeLeft, onSwipeRight])
}
