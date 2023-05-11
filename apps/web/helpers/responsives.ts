const responsiveRegister = (isErrorExists?: boolean) => ({
  form: {
    rInput: { base: '282px', sm: '315px' },
    rBottomBtn: {
      base: isErrorExists ? '-8%' : '-10%',
      sm: isErrorExists ? '-8%' : '-9%',
      md: isErrorExists ? '-8%' : '-28%',
      lg: isErrorExists ? '-8%' : '-36%',
    },
  },
  template: {
    rPaddingY: { base: 8, sm: 0 },
    rWidth: { base: 'full', md: '395px' },
    rMaxWidth: { sm: '676px', md: '756px', lg: '706px', '2xl': '776px' },
  },
})

const responsiveLogin = (isErrorExists?: boolean) => ({
  form: {
    rInput: { base: '282px', sm: '315px' },
    rBottomBtn: {
      base: isErrorExists ? '-23%' : '-32%',
      sm: isErrorExists ? '-56%' : '-109%',
      md: isErrorExists ? '-88%' : '-154%',
      lg: isErrorExists ? '-68%' : '-128%',
      '2xl': isErrorExists ? '-109%' : '-181%',
    },
  },
  template: {
    rPaddingY: { base: 8, sm: 5 },
    rWidth: { base: 'full', md: '395px' },
    rMaxWidth: { base: '526px', sm: '676px', md: '756px', lg: '706px', '2xl': '799px' },
  },
})

export { responsiveRegister, responsiveLogin }
