import * as eyeAnimation from "../../assets/animation/eyeAnimation.json"

const lottieOptions = {
  loop: false,
  autoplay: false,
  animationData: eyeAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default lottieOptions;
