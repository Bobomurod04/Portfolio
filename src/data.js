export const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const IMG1 = require('./assets/portfolio1.jpg')
const IMG2 = require('./assets/portfolio2.jpg')
const IMG3 = require('./assets/portfolio3.jpg')
const eLearning = require('./assets/e-Learning.png')
const QRcode = require('./assets/QRcode.png')
const bobDev = require('./assets/bobDev.png')
const Schnee = require('./assets/schnee.jpg')

export const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Crypto Wallet Library',
    github: 'https://github.com',
    demo: 'https://dribbble.com/demo/portfolio-crypto-wallet-library',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Crypto Wallet Library',
    github: 'https://github.com',
    demo: 'https://dribbble.com/demo/portfolio-crypto-wallet-library',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Crypto Wallet Library',
    github: 'https://github.com',
    demo: 'https://dribbble.com/demo/portfolio-crypto-wallet-library',
  },
  {
    id: 4,
    image: QRcode,
    title: 'React QR Code Generator',
    github: 'https://github.com',
    demo: 'https://qrgenerator1.netlify.app/',
  },
  {
    id: 5,
    image: bobDev,
    title: 'HTML, CSS, JS Portfolio',
    github: 'https://github.com/Bobomurod04/JS-Portfolio',
    demo: 'https://bobdev.netlify.app/',
  },
  {
    id: 6,
    image: Schnee,
    title: 'HTML, CSS, JS Schnee Animation',
    github: 'https://github.com/Bobomurod04/Project-Schnee',
    demo: 'https://schnee.netlify.app/',
  },
  {
    id: 7,
    image: eLearning,
    title: 'React, StyledComp, Framer-motion',
    github: 'https://github.com/Bobomurod04/interactive-react-elearning',
    demo: 'https://bobe-learning.netlify.app/',
  },
].reverse()

export const testimonials = [
  {
    id: 1,
    name: 'Diana Ayiya',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'Student',
    avatar: require('./assets/testimonial1.png'),
  },
  {
    id: 2,
    name: 'Daniel Vinyo',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'Software Engineer',
    avatar: require('./assets/testimonial2.png'),
  },
  {
    id: 3,
    name: 'Edem Quist',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'University Lecturer',
    avatar: require('./assets/testimonial1.png'),
  },
  {
    id: 4,
    name: 'Grace Lavoe',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'Talking Parrot',
    avatar: require('./assets/testimonial2.png'),
  },
  {
    id: 5,
    name: 'Nana Yaa Dankwa',
    quote:
      'Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'Pharmacist',
    avatar: require('./assets/testimonial1.png'),
  },
]
