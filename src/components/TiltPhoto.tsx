import { useState , useRef, useCallback } from 'react'


function TiltPhoto({ src, alt}: { src: string; alt?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    // -0.5 to 0.5 based on cursor position within the box
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -15, y: x * 15 }) // scale to a max ~15deg tilt
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false) }}
      style={{ perspective: '1000px' }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl transition-shadow duration-500"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  )
}

export default TiltPhoto