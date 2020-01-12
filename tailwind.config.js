module.exports = {
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#49cc68',
     'legend': '#ffed4a',
     'danger': '#e3342f',
     'info': '#5454ec',
    }),
    fontFamily:{
      'dim':['Dimpro'],
      'inai':['InaiMathi']
    },
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#5454ec',
      'danger': '#e3342f',
    })
  },
  variants: {},
  plugins: [
   
  ]
}
