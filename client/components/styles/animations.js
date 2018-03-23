import { zoomIn, bounceInDown, bounceInLeft, bounceInRight, fadeIn, fadeInLeft, fadeInRight } from 'react-animations';

const styles = {
  fadeIn: {
    animationName: 'fadeIn',
    animationDuration: '1s',
    animationDelay: '1.2s',
    animationFillMode: 'forwards'
  },
  '@keyframes fadeIn': {
    ...fadeIn,
    to: {
      opacity: 1
    },
  },

  fadeInCenter: {
    animationName: 'fadeInCenter',
    animationFillMode: 'forwards'
  },
  '@keyframes fadeInCenter': {
    ...fadeIn,
    to: {
      opacity: 1
    },
  },

  fadeInLeft: {
    animationName: 'fadeInLeft',
    animationFillMode: 'forwards'
  },
  '@keyframes fadeInLeft': {
    ...fadeInLeft,
    to: {
      opacity: 1
    },
  },

  fadeInRight: {
    animationName: 'fadeInRight',
    animationFillMode: 'forwards'
  },
  '@keyframes fadeInRight': {
    ...fadeInRight,
    to: {
      opacity: 1
    },
  },

  zoomIn: {
    animationName: 'zoomIn',
    animationFillMode: 'forwards'
  },
  '@keyframes zoomIn': {
    ...zoomIn,
    to: {
      opacity: 1
    },
  },

  bounceInDown: {
    animationName: 'bounceInDown',
    animationFillMode: 'forwards'
  },
  '@keyframes bounceInDown': {
    ...bounceInDown,
    to: {
      opacity: 1
    },
  },

  bounceInLeft: {
    animationName: 'bounceInLeft',
    animationFillMode: 'forwards'
  },
  '@keyframes bounceInLeft': {
    ...bounceInLeft,
    to: {
      opacity: 1
    },
  },

  bounceInRight: {
    animationName: 'bounceInRight',
    animationFillMode: 'forwards'
  },
  '@keyframes bounceInRight': {
    ...bounceInRight,
    to: {
      opacity: 1
    },
  }
};

function getStylesForAnimation(name, duration, delay) {
  if (styles.hasOwnProperty(name)) {
    var res = {
      [name]: styles[name],
      [`@keyframes ${name}`]: styles[`@keyframes ${name}`]
    };
    res[name].animationDuration = duration || '1s';
    res[name].animationDelay = delay || '0s';

    return res;
  }
  else {
    console.error('No animation styles for ' + name);
  }
}

export { getStylesForAnimation };