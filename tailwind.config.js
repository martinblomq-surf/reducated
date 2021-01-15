const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: false,
  theme: {
    screens: {
      sm: '100%',
      md: '48rem',
      lg: '75rem',
      xl: '90rem',
      'tablet':{'max': '62rem'},
      'phone':{'max': '48rem'}
    },
    fontFamily: {
      'display': ['Kanit', 'sans-serif'],
      'body': ['Kanit', 'sans-serif'],
    },
    borderRadius:{
      'none':'0',
      'sm':'.375rem',
      default:'2rem',
      'md':'1rem',
      'lg':'4rem',
      'full':'9999rem',
      'circle':'100%'
    },
    fontSize: {
      'xxs': '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '16px',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      'xxl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '2.85rem',
      '6xl': '3.75rem',
    },
    opacity: {
      '0': '0',
      '5': '.05',
      '10': '.1',
      '15': '.15',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '35': '.35',
      '40': '.4',
      '45': '.45',
      '50': '.5',
      '55': '.55',
      '60': '.6',
      '65': '.65',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '85': '.85',
      '90': '.9',
      '95': '.95',
      '100': '1',
    },
    extend: {
      colors:{
        blue:{
          '100':'#d7e8f9',
          '200':'#82b3e0',
          '300':'#4480b7',
          '400':'#2d69a0',
          '500':'#1b508b',
          '600':'#144572',
          '700':'#0d335d',
          '800':'#082744',
          '900':'#02111e',
        },
        dark:{
          '100':'#02111e10',
          '500':'#02111e',
        },
        purple:{
          '10':'#9564b510',
          '100':'#eadcf4',
          '200':'#d7c1e5',
          '300':'#c1a1d3',
          '400':'#9c79b2',
          '500':'#9564b5',
          '600':'#793da0',
          '700':'#5a207f',
          '800':'#3e0d5e',
          '900':'#1a0428',
        },
        orange:{
          '100':'#f7e4d2',
          '200':'#f7c89c',
          '300':'#f7ae6d',
          '400':'#f49037',
          '500':'#ea8018',
          '600':'#cc6406',
          '700':'#a35005',
          '800':'#6b3403',
          '900':'#331a04',
        },
        green:{
          '100':'#b3e2d9',
          '200':'#74baae',
          '300':'#4ea094',
          '400':'#2f847a',
          '500':'#106b62',
          '600':'#0a5950',
          '700':'#094c45',
          '800':'#023b37',
          '900':'#011e1b',
        },
        brown:{
          '100':'#d8ced1',
          '200':'#b1a3a7',
          '300':'#938a91',
          '400':'#7f747c',
          '500':'#6b5d66',
          '600':'#594a53',
          '700':'#46373f',
          '800':'#2d2329',
          '900':'#110d0f',
        },
        red:{
          '100':'#fcc0db',
          '200':'#ed6ea2',
          '300':'#db407c',
          '400':'#c12559',
          '500':'#a3133c',
          '600':'#870732',
          '700':'#6b032b',
          '800':'#49021f',
          '900':'#280113',
        },
        yellow:{
          '100':'#fcfae3',
          '200':'#fcf8b6',
          '300':'#f4f078',
          '400':'#f7f737',
          '500':'#e8f214',
          '600':'#d1d107',
          '700':'#ada805',
          '800':'#726c04',
          '900':'#332f02',
        }
      },
      lineHeight: {
        '1': '1',
      },
      height:{
        '10v':'10vh',
        '20v':'20vh',
        '30v':'30vh',
        '40v':'40vh',
        '50v':'50vh',
        '60v':'60vh',
        '70v':'70vh',
        '80v':'80vh',
        '90v':'90vh',
        '95v':'95vh',
      },
      width:{
        '10v':'10vw',
        '20v':'20vw',
        '30v':'30vw',
        '40v':'40vw',
        '50v':'50vw',
        '60v':'60vw',
        '70v':'70vw',
        '80v':'80vw',
        '90v':'90vw',
        '95v':'95vw',
      },
      boxShadow: {
        lg:'0 2px 30px rgba(4, 28, 35, .1)',
        xl:'0 3rem 6rem -1rem rgba(0, 0, 0, 0.075)',
        'btn':'0 2px 20px 3px rgba(0,187,255, .12)',
        'btn-secondary':'inset 0 0 0 2px rgb(0,187,255)',
        'purple':'0 2px 20px 3px rgba(98,93,213, .12)',
        'green':'0 2px 20px 3px rgba(90,245,209, .12)',
        'success': '0 2px 12px rgba(76, 248, 208, .3)',
        'slider': '0 5px 40px -10px rgba(76, 248, 208, .06)'
      },
      transitionDuration: {
        '0':'0',
        '250':'250ms',
        '300':'300ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms'
      },
      transitionDelay: {
        '350':'350ms',
        '600':'600ms'
      },
      zIndex:{
        '-2':'-2',
        '-1':'-1',
        '1':'1',
        '2':2,
        '999':999
      },
      maxWidth: {
        '10': '10rem',
        'logo': '9rem',
        'screen':'100vw'
      },
      maxHeight: {
        '10': '10rem',
        'logo': '3rem',
        'screen':'100vh'
      },
      inset: {
        '4': '1rem',
        '1/2': '50%',
        '-1/2': '-50%',
        '100':'100%',
        '-100':'-100%'
      },
      translate: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
      margin: {
        '1/2': '50%',
        '-1/2': '-50%',
        '100':'100%',
        '-100':'-100%'
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents, addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.6xl') },
        'h2': { fontSize: config('theme.fontSize.5xl'), marginBottom: '1.2rem' },
        'h3': { fontSize: config('theme.fontSize.lg') },
        'h1,h2,h3,h4,h5,h6': { fontWeight: '900', lineHeight:'1.25' },
        'a': { color: config('theme.colors.blue.500') },
        'strong': { fontWeight:'900' },
        'p':{marginBottom:'1rem'},
        '.container':{ padding: '0 2rem' }
      });
      const extraComponents = {
        '.arrow-right':{
          width: '20px',
          height: '0',
          backgroundColor: '#fff',
          display: 'inline-block',
          position: 'relative',
          transition: 'all .2s ease',
          marginLeft: '.5rem',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          '&:after':{
            content: '""',
            position: 'absolute',
            right: '0',
            width: '8px',
            height: '8px',
            borderRight: '2px solid',
            borderBottom: '2px solid',
            transform: 'rotate(-45deg)',
            top: '50%',
            marginTop: '-4px'
          }
        },
        'a':{
          '&:hover':{
            '.arrow-right': {
              transform: 'translateX(3px)'
            }
          },
        },
        '.success--check':{
          width: '30px',
          height: '30px',
          background: config('theme.colors.green.500'),
          borderRadius: '100%',
          position: 'relative',
          boxShadow: config('theme.boxShadow.success'),
          
          '&:after':{
            content: '""',
            width: '7px',
            height: '14px',
            borderRight: '2px solid',
            borderBottom: '2px solid',
            borderColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'rotate(45deg)',
            marginTop: '-8px',
            marginLeft: '-3px'
          }
        },
        '.overlay':{
          position:'relative',
          zIndex:'1',
          '&:after':{
            content:'""',
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            background:config('theme.colors.dark.900'),
            opacity:'.8',
            zIndex:'-1'
          }
        },
        '.checked': {
          width: '.5rem',
          height: '.9rem',
          borderRight: '2px solid',
          borderBottom: '2px solid',
          borderColor: 'white',
          transform: 'rotate(45deg)',
          position: 'relative',
          bottom: '2px'
        },
        '.pending':{
          textAlign: 'center',
          '&:after':{
            content: '"..."',
            fontSize: '1.75rem',
            color: 'white',
            lineHeight: '1',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginTop: '-.82rem',
            marginLeft: '-.4rem'
          }
        }
      }

      addComponents([extraComponents]);
    })
  ],
}