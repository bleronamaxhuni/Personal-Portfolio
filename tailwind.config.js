/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'marckscript':['Marck Script', 'cursive'],
    },
    screens: {

			'2xl': {'max': '1980px'},

			'xl': {'max': '1536px'},
	  
			'lg': {'max': '1023px'},
	  
			'md': {'max': '767px'},
	  
			'sm': {'max': '639px'},
		  },
    extend: {
      colors:{
				'customGreen': '#799F28',
				'bg': '#F0F0F0',	
				'purple':'#c084fc',
			  },
    },
  },
  plugins: [],
}
