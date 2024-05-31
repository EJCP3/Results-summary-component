/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",    ],
    theme: {
      extend: {
   
        fontFamily: {
          "principal": ['Hanken Grotesk, sans-serif'],
        },

        colors: {
          ///Primary
          LightRedBG: "hsl(0, 100%, 67%, 0.05)",
          LightRed: "hsl(0, 100%, 67%)",
          OrangeyYellowBG: "hsl(39, 100%, 56%, 0.05)",
          OrangeyYellow: "hsl(39, 100%, 56%)",
          GreenTealBG: "hsl(166, 100%, 37%, 0.05)",
          GreenTeal: "hsl(166, 100%, 37%)",
          CobaltBlueBG: "hsl(234, 85%, 45%, 0.05)",
          CobaltBlue: "hsl(234, 85%, 45%)",
          

           ///Gradients
            LightSlateBlue: "hsl(252, 100%, 62%)",
            LightRoyalBlue: "hsl(241, 81%, 54%)",
            VioletBlue: "hsla(256, 72%, 46%, 1)",
            PersianBlue: "hsla(241, 80%, 7%, 0.3)",


            primary1: 'hsla(254, 100%, 10%, 0.7)',  // Color con transparencia
            primary2: 'hsla(256, 72%, 80%, 0.3)',   // Color con transparencia

            ///Neutral
            White: "hsl(0, 0%, 100%)",
            PaleBlue: "hsl(221, 100%, 96%)",
            LightLavender: "hsl(241, 100%, 89%)",
             DarkGrayBlue: "hsl(224, 30%, 27%)",
        },

        backgroundImage: {
          'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        },
        gradientColorStops: theme => ({
          'start': 'hsla(256, 72%, 46%, 1)',
          'end': 'hsla(241, 72%, 46%, 0)',
        }),


        screens: {
          'pc': '600px',
        },
      },
    },
    plugins: [],
  }