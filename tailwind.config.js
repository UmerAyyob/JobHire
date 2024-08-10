/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html",
    "./public/findjobs.html",
    "./public/employers.html",
    "./public/pricing.html",
    "./public/blog.html",
    "./public/blog-1.html",
    "./public/blog-2.html",
    "./public/blog-3.html",
    "./public/blog-4.html",
    "./public/contact.html",
  ],
  theme: {
    extend: {
      backgroundColor:{
        btnBgYellowish:"rgb(253 224 71) ",
        btnBgGreenish:"rgb(232,242,241)",
        jobTypesBg:"#D9EBE9",
      },
      colors:{
        btntextGreenish:"rgb(34,19,94)",
      },
      textUnderlineOffset:{
        'negative-5':'-5px',
        'negative-10':'-10px',
        'negative-20':'-20px',
      }
    },
    
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.underline-negative-offset-5':{
          textUnderlineOffset:'-5px'
        },
        '.underline-negative-offset-10':{
          textUnderlineOffset:'-10px'
        },'.underline-negative-offset-15':{
          textUnderlineOffset:'-15px'
        },
      },
    )
    }
  ],
}

