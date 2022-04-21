module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: { min: '320px', max: '639px' },
      tab: { min: '640px', max: '769px' },
      smallPc: { min: '770px', max: '1025px' },
      largePc: { min: '1026px', max: '2560px' },
    },
  },
  plugins: [require('flowbite/plugin')],
}
