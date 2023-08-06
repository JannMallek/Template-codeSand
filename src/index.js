import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'

import './styles.css'
import Main from './main.js'

ReactDOM.render(
  <Canvas>
    <Main />
  </Canvas>,
  document.getElementById('root')
)
