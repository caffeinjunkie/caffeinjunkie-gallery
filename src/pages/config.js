import * as loadingAnimation from '../assets/animation/loadingAnimation.json'

export const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default {
  lottieOptions
}
