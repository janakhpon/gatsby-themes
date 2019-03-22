import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import {
  Layout,
  Typography,
  ColorScheme,
  Header,
  Main,
  Footer,
  Box,
} from 'gatsby-theme-system'
import merge from 'lodash.merge'

const blue = '#33e'
const theme = outer => merge({}, outer, {
  colors: {
    blue,
    text: '#000',
    background: '#fff',
    link: blue,
    pre: {
      text: 'rebeccapurple',
      background: '#f6f3f9',
    },
    code: {
      text: 'rebeccapurple',
      background: '#f6f3f9',
    },
  },
})

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <Typography />
      <ColorScheme />
      <Layout>
        <Header>
          <Box as='h1'
            fontSize={2}>
            Gatsby Theme System
          </Box>
          <Box mx='auto' />
          <Box as={Link} to='/' color='inherit'>Home</Box>
          <Box mx={1} />
          <Box as={Link} to='/freeform' color='inherit'>Demo</Box>
        </Header>
        <Main>
          {props.children}
        </Main>
        <Footer
          py={4}
          fontSize={1}>
          <a href='https://github.com/jxnblk/gatsby-themes'>GitHub</a>
          <Box mx={1} />
          <a href='https://jxnblk.com'>Made by Jxnblk</a>
          <Box mx='auto' />
          <Box>
            © 2019 Jxnblk
          </Box>
        </Footer>
      </Layout>
    </ThemeProvider>
  )
}
