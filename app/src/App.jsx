import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import Header from "./components/Header"
import Card from "./components/Card"

const theme = {
  colors: {
    // ### Primary
    softCyan: 'hsl(174, 77%, 80%)', // (Full Slider Bar)
    strongCyan: 'hsl(174, 86%, 45%)', //(Slider Backround)
    lightGrayishRed: 'hsl(14, 92%, 95%)', //(Discount Background)
    lightRed: 'hsl(15, 100%, 70%)', // (Discount Text)
    paleBlue: 'hsl(226, 100%, 87%)', // (CTA Text)

    // ### Neutral
    white: 'hsl(0, 0%, 100%)', // (Pricing Component Background)
    veryPaleBlue: 'hsl(230, 100%, 99%)', // (Main Background)
    lightGrayishBlue: 'hsl(224, 65%, 95%)', //(Empty Slider Bar)
    lightGrayishBlueToggleBg: 'hsl(223, 50%, 87%)', // (Toggle Background)
    grayishBlue: 'hsl(225, 20%, 60%)', //(Text)
    darkDesaturatedBlue: 'hsl(227, 35%, 25%)', //(Text & CTA Background)
  },
  desktop: '1440px'
}

function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Card />
    </ThemeProvider>
  )
}

export default App



