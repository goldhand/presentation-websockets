// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Code,
} from 'spectacle';

// Special code slide
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import randomSlide from './randomSlide';

const links = {
  preview: '#',  // TODO: deploy demo
  start: 'https://github.com/goldhand/presentation-websockets/tree/start',
  step2: 'https://github.com/goldhand/presentation-websockets/tree/step-2',
};

const images = {
  dependencyDiagram: require('../assets/dependency-diagram.jpg'),
};

preloader(images);

const codes = {
  server: require("raw-loader!../assets/server.example"),
  client: require("raw-loader!../assets/client.example"),
  step1: {
    index: require("raw-loader!../assets/step-1/index.example"),
    PaintCanvas: require("raw-loader!../assets/step-1/PaintCanvas.example"),
    development: require("raw-loader!../assets/step-1/development.example"),
  },
};

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica',
});

const stepLinkStyles = {padding: '20px', margin: '30px 0', border: '6px dashed #CECECE'};

const StepLink = ({
  link,
}) =>
  <div style={stepLinkStyles}>
    <Link href={link}>{link}</Link>
  </div>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        {/*
          *************
          part-1: intro
          *************
        */}
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Websockets @AMZN
          </Heading>
          <Heading size={6} caps lineHeight={3} textColor="tertiary">
            By Will Farley
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Say hi!</Heading>
          <br />
          <br />
          <Text textColor="primary">github.com/goldhand</Text>
          <br />
          <Text textColor="primary">@wfarley</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Summary</Heading>
          <Heading size={2} textColor="secondary">NodeJS @ Amzn</Heading>
          <Heading size={3} textColor="secondary">Websockets</Heading>
          <Heading size={4} textColor="secondary">PaintApp.IO</Heading>
          <Heading size={5} textColor="secondary">Server</Heading>
          <Heading size={6} textColor="secondary">Client</Heading>
          <Text size={6} textColor="secondary">Questions</Text>
        </Slide>
        {/*
          **************
          part-2: NodeJS
          **************
        */}
        <Slide transition={['spin']}>
          <Heading size={6} textColor="secondary" caps>NodeJS @ Amzn</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" textAlign="left">Challenges</Heading>
          <Appear>
            <List>
              <ListItem>Building (apollo)</ListItem>
              <ListItem>Packages (brazil)</ListItem>
            </List>
          </Appear>
          <Heading size={4} textColor="secondary" textAlign="left">NodeJS Things</Heading>
          <Appear>
            <List>
              <ListItem>Server / Client</ListItem>
              <ListItem>App / Package</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} textColor="secondary" caps>Super Simple Node Package</Heading>
          <div style={{padding: '10px', maxWidth: '400px', display: 'inline-block', textAlign: 'center'}}>
            <CodePane
              textSize={'1em'}
              source={`
package-name/
├── index.js
└── package.json
          `} />
          </div>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6}>package.json</Heading>
          <CodePane
            lang="json"
            textSize={'1em'}
            source={`
{
  "name": "package-name",
  "version": "1.0.0",
  "main": "index.js"
}
          `} />
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6}>index.js</Heading>
          <CodePane
            lang="javascript"
            textSize={'1em'}
            source={`
function foo(bar) {
  return bar;
}
module.exports = foo;
          `} />
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} textAlign="right">Client</Heading>
          <Image src={images.dependencyDiagram} width={'50%'} />
          <Heading size={6} textAlign="left">Server</Heading>
        </Slide>
        {/*
          ******************
          part-3: Websockets
          ******************
        */}
        <Slide>
          <Heading size={6} textColor="secondary" caps>Websockets</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>What is a Websocket?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize={'4rem'}>A WebSocket is a bi-directional communication pipe built upon an upgraded http: connection.</Quote>
            <Cite>w/?WebSockets</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Socket.IO</Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={'2.5rem'} textColor="secondary" padding="1rem">Socket.IO enables real-time bidirectional event-based communication.</Quote>
            <Quote textSize={'2.5rem'} textColor="secondary" padding="1rem">It works on every platform, browser or device, focusing equally on reliability and speed.</Quote>
            <Cite textColor="primary">socket.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="tertiary" transition={randomSlide()}>
          <Heading size={6} textColor="primary" caps>Server</Heading>
          <CodePane lang="js" source={codes.server} margin="20px auto" textSize="0.7em" />
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']}>
          <Heading size={6} textColor="primary" textAlign="top" caps>Client</Heading>
          <CodePane lang="js" source={codes.client} margin="20px auto" textSize="0.6em" />
        </Slide>
        {/*
          ****************
          part-4: PaintApp
          ****************
        */}
        <Slide textColor="primary" transition={['fade']}>
          <Heading size={6} caps>PaintApp.IO</Heading>
        </Slide>
        <Slide textColor="primary" transition={randomSlide()}>
          <Heading size={6} caps>Preview</Heading>
          <Link href={links.preview}>(URL)</Link>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={6} caps>Server</Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>Requirements</Heading>
          <List>
            <Appear><ListItem>Listen for incoming socket connections using a standard TCP socket</ListItem></Appear>
            <Appear><ListItem>Listen for events emitted by connected clients</ListItem></Appear>
            <Appear><ListItem>Emit events to connected clients</ListItem></Appear>
            <Appear><ListItem>Graceful degradation to other transport connections</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Dependencies</Heading>
          <List>
            <Appear><ListItem>socket.io</ListItem></Appear>
            <Appear><ListItem>express</ListItem></Appear>
            <Appear><ListItem>babel</ListItem></Appear>
            <Appear><ListItem>jest</ListItem></Appear>
            <Appear><ListItem>eslint</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={6} caps>Client</Heading>
        </Slide>
        <Slide>
          <Heading size={6} caps>Requirements</Heading>
          <List>
            <Appear><ListItem>Initiate the WebSocket &quot;handshake&quot;</ListItem></Appear>
            <Appear><ListItem>Listen for events emitted by the server</ListItem></Appear>
            <Appear><ListItem>Emit events to the server</ListItem></Appear>
            <Appear><ListItem>Work across multiple browsers</ListItem></Appear>
            <Appear><ListItem>Graceful degradation to other transport connections</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Dependencies</Heading>
          <List>
            <Appear><ListItem>socket.io/client</ListItem></Appear>
            <Appear><ListItem>webpack</ListItem></Appear>
            <Appear><ListItem>babel</ListItem></Appear>
            <Appear><ListItem>jest</ListItem></Appear>
            <Appear><ListItem>eslint</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={6} caps>Get Started</Heading>
        </Slide>
        {/*
          ****************
          part-4-1: step 1
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 1</Heading>
          <Text size={6}>Use socket.io to connect make this application collaborative</Text>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Client</Heading>
          <Code textAlign="left">src/client/PaintCanvas.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>Dispatch the draw event to listeners</ListItem></Appear>
          </List>
          <Code textAlign="left">src/client/index.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>import socket.io-client</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>create a new socket connection</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>emit events that dispatched by paintCanvas to the server</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for and handle events emitted from the server</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <Text textAlign="left"><Code>src/server/development.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>import socket.io</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>attach socket to server</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for new connections</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for draw events and broadcast them to others</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 1: Use socket.io to connect make this application collaborative</Text>
          <StepLink link={links.start} />
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 1: Solutions</Heading>
          <Text size={6} textColor="tertiary">Use socket.io to connect make this application collaborative</Text>
        </Slide>
        <CodeSlide
          lang="javascript"
          code={codes.step1.PaintCanvas}
          transition={['']}
          ranges={[
            {loc: [0, 166], title: 'src/client/PaintCanvas.js'},
            {loc: [135, 136], note: '1. Dispatch the draw event to listeners'},
          ]}
        />
        <CodeSlide
          lang="javascript"
          code={codes.step1.index}
          transition={['']}
          ranges={[
            {loc: [0, 35], title: 'src/client/index.js'},
            {loc: [1, 2], note: '1. import socket.io-client'},
            {loc: [22, 23], note: '2. create a new socket connection'},
            {loc: [26, 29], note: '3. emit events that dispatched by paintCanvas to the server'},
            {loc: [32, 35], note: '4. listen for and handle events emitted from the server'},
          ]}
        />
        <CodeSlide
          lang="javascript"
          code={codes.step1.development}
          transition={['']}
          ranges={[
            {loc: [0, 50], title: 'src/server/development.js'},
            {loc: [5, 6], note: '1. import socket.io'},
            {loc: [39, 40], note: '2. attach socket to server'},
            {loc: [42, 43], note: '3. listen for new connections'},
            {loc: [45, 48], note: '4. listen for draw events and broadcast them to others'},
          ]}
        />
        {/*
          ****************
          part-4-2: step 2
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 2</Heading>
          <Text size={6}>Add users</Text>
          <StepLink link={links.step2} />
        </Slide>
        {/*
          ****************
          part-4-3: step 3
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 3</Heading>
          <Text size={6}></Text>
          <StepLink link={links.step3} />
        </Slide>
        {/*
          ***********
          part-5: fin
          ***********
        */}
        <Slide transition={randomSlide()} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Questions?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={2}>fin</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Websockets @AMZN
          </Heading>
          <Heading size={6} caps lineHeight={3} textColor="secondary">
            By Will Farley
          </Heading>
          <Text textColor="tertiary">@wfarley</Text>
        </Slide>
      </Deck>
    );
  }
}
