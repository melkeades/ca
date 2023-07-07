import './style.styl'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
