import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        paddingTop: '25px',
        maxWidth: '100%',
      },
    },
    Heading: {
      baseStyle: {
        marginBottom: '25px',
      },
    },
    Text: {
      baseStyle: {
        marginBottom: '20px',
      },
    },
  },
  colors: {
    gray: {
      800: '#f2eae2',
    },
  },
})
export default theme
