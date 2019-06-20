import React, { Component } from "react";
import './main.css'
import PropTypes from 'prop-types'
import BandcampPlayer from 'react-bandcamp'

import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      className= 'title'
      content='Doug Enas'
      inverted
      style={{
        fontSize: mobile ? '1em' : '2em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginRight: '550px',
        marginTop: mobile ? '1.5em' : '3em',
        
        
      }}
    />
  </Container>
)


const MainImage = () => (
  <Image
  src={require('./Images/profile.jpg')}
  size='small'
  className='mainPhoto'>

  </Image>
)

const Music = () => (
  <Segment className='projects'>
    <h2>Music</h2>
  <BandcampPlayer album="2852856610" title='Bandcamp Player' tracklist="true" height="500px"></BandcampPlayer>
  </Segment>
)

const Projects = () => (
  <Container text>
  <Segment className='projects'>
  <h2>Kwitter</h2>
  <h4>React, Redux</h4>
  <a href="https://dougenas.github.io/kwitter/">
        <Image src={require('./Images/kwitter.png')}></Image>
        </a>
  <br></br>
  <h2>Bird Nerd</h2>
  <h4>React, Postgres</h4>
  <a href="https://mhoelzer.github.io/birdNerd/">
        <Image src={require('./Images/birdnerd.png')}></Image>
        </a> 
        <br></br>
  <h2>Sokoban</h2>
  <h4>Javascript</h4>
  <a href="https://dougenas.github.io/sokoban/">
        <Image src={require('./Images/sokoban.png')}></Image>
        </a> 
        <br></br>
  </Segment>
  </Container>
)

const HometpageBio = () => (
  <Container text>
  <Segment className='bio'>
  <p>Hi, my name is Doug Enas. I'm a creative living in Indianapolis, IN. On this page you will find the most recent projects I have worked on. Feel free to contact me via email at <a href="mailto:douglassenas@gmail.com">douglassenas@gmail.com</a>. Thanks!</p>
  </Segment>
  </Container>
)

const Contact = ({ mobile }) => (
  <Container className="contact" text>
  <Header as='h2' className='title' content='Contact' style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        textAlign: 'center',
      }}>
    
  </Header>

  <p><a href="mailto:douglassenas@gmail.com">douglassenas@gmail.com</a>
</p>
<Segment className="footer">
<a href="https://github.com/dougenas">
<Image src={require('./Images/github.png')}></Image>
</a>
<a href="https://www.linkedin.com/in/doug-enas-ab54b914/">
<Image src={require('./Images/linkedin.png')}></Image>
</a>
</Segment>
  </Container>
)

const Footer = () => (
  <Container>

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              
            </Menu>
            <HomepageHeading />
            {/* <HometpageBio /> */}
            <br></br>
            <Projects />
            <br></br>
            <Music />
            <br></br>
            <Contact />
            <Footer />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  
                </Menu.Item>
                
            <HomepageHeading />
            {/* <HometpageBio /> */}
            <br></br>
            <Projects />
            <br></br>
            <Music />
            <br></br>
            <Contact />
            <Footer />
              </Menu>
            </Container>
          
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}


const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        </Grid>
      
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
