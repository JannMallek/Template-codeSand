import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'

export default function Main() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh ref={ref} onClick={(e) => console.log('click')}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
