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
  CodePane,
  Code,
} from 'spectacle';

// Special code slide
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import randomSlide from './randomSlide';
import Preview from './Preview';
import StepLink from './StepLink';
import {links, slideNotes, codes} from './constants';

const codeSlideDefaults = {
  lang: 'js',
  transition: [''],
  transitionDuration: 0,
  margin: 0,
  textSize: '0.8em',
};

const theme = createTheme({
  primary: 'white',
  secondary: '#232f3e',
  tertiary: '#ff9900',
  quartenary: '#f3d078',
}, {
  primary: 'Arial',
  secondary: 'Montserrat',
});

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
            Websockets @ AMZN
          </Heading>
          <Heading size={6} caps lineHeight={3} textColor="tertiary">
            By Will Farley
          </Heading>
          <br />
          <Text textColor="secondary">goldhand.github.io/presentation-websockets</Text>
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
          <Heading size={3} textColor="secondary">Websockets</Heading>
          <Heading size={3} textColor="secondary">Socket.IO</Heading>
          <Heading size={3} textColor="secondary">PaintApp.IO</Heading>
          <Heading size={3} textColor="secondary">Questions</Heading>
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
        <Slide transition={randomSlide()} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>The Websocket Handshake</Heading>
        </Slide>
        <Slide transition={randomSlide()} bgColor="secondary" textColor="primary">
          <Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="primary">Hey server, how about you and I ditch HTTP?</Text>
          <Appear><Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="tertiary">{'\'Sup client, I got your header, so you want to upgrade?'}</Text></Appear>
          <Appear><Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="primary">Yeah! Have you heard of the Websocket protocol?</Text></Appear>
          <Appear><Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="tertiary">The one that was standardized by the IETF in RFC 6455?</Text></Appear>
          <Appear><Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="primary">Yeah lets switch!</Text></Appear>
          <Appear><Text textSize={'1.2em'} lineHeight={'1.5'} textAlign="left" textColor="tertiary">{'Ok, we\'ll just use the same TCP/IP connection and port.'}</Text></Appear>
        </Slide>
        <Slide transition={randomSlide()} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>Websocket API</Heading>
          <CodePane lang="js" source={codes.websockets} margin="20px auto" textSize="0.7em" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Socket.IO</Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={'2.5rem'} textColor="secondary" padding="1rem">Socket.IO enables real-time bi-directional event-based communication.</Quote>
            <Quote textSize={'2.5rem'} textColor="secondary" padding="1rem">It works on every platform, browser or device, focusing equally on reliability and speed.</Quote>
            <Cite textColor="primary">socket.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']} notes={slideNotes.socket.client}>
          <Heading size={6} textColor="primary" textAlign="top" caps>Client</Heading>
          <CodePane lang="js" source={codes.client} margin="20px auto" textSize="0.6em" />
        </Slide>
        <Slide bgColor="tertiary" transition={randomSlide()} notes={slideNotes.socket.server}>
          <Heading size={6} textColor="primary" caps>Server</Heading>
          <CodePane lang="js" source={codes.server} margin="20px auto" textSize="0.7em" />
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.emitCheatsheet}
          textSize="0.7em"
          ranges={[
            {loc: [0, 30], title: '/docs/emit-cheatsheet/'},
            {loc: [4, 6], note: 'sending to the client'},
            {loc: [7, 9], note: 'sending to all clients except sender'},
            {loc: [22, 24], note: 'sending to individual socketid (private message)'},
            {loc: [25, 27], note: 'sending with acknowledgement'},
          ]}
          notes={slideNotes.emitCheatsheet}
        />
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
          <Link href={links.herokuActual}>{links.heroku}</Link>
          <Preview src={links.herokuActual} />
        </Slide>
        <Slide textColor="primary" transition={randomSlide()}>
          <Heading size={6} caps>Preview Backup</Heading>
          <Link href={links.preview}>Backup: {links.preview}</Link>
          <Preview src={links.preview} />
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
          </List>
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
          </List>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={6} caps>Get Started</Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Setup</Heading>
          <Appear><Text size={6} textColor="primary">{'Find a partner and decide who will be the client and who will be the server. Since you will be collaborating, you may want to fork the repo.'}</Text></Appear>
          <Appear><Text size={6} textColor="primary">{'Decide if you\'re going to develop locally or in an apollo environment (your dev desktop), within a brazil workspace using the "PaintAppIO/dev" or "live" versionset'}</Text></Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Text size={6} textColor="primary">Local:</Text>
          <Text textAlign="left"><Code textSize="0.7em">$ git clone git@github.com:goldhand/presentation-websockets.git</Code></Text>
          <Text textAlign="left"><Code textSize="0.7em">$ git checkout start</Code></Text>
          <Text textAlign="left"><Code textSize="0.7em">$ npm install && npm start</Code></Text>
          <Text size={6} textColor="primary">Apollo:</Text>
          <Text textAlign="left"><Code textSize="0.7em">$ git clone git@github.com:goldhand/presentation-websockets.git</Code></Text>
          <Text textAlign="left"><Code textSize="0.7em">$ git checkout start-amazon</Code></Text>
          <Text textAlign="left"><Code textSize="0.7em">$ brazil-build server</Code></Text>
        </Slide>
        {/*
          ****************
          part-4-1: step 1
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 1</Heading>
          <Text size={6}>Make the paint application collaborative using socket.io</Text>
        </Slide>
        <Slide
          transition={randomSlide()}
          notes={slideNotes.step1.client}
        >
          <Heading size={6} caps>Client</Heading>
          <Code textAlign="left">src/client/PaintCanvas.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Dispatch a draw event (eg "DRAW_LINE"), containing two points to draw, to listeners'}</ListItem></Appear>
          </List>
          <Code textAlign="left">src/client/index.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>import socket.io-client</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>create a new socket connection</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>emit events that dispatched by paintCanvas to the server</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for draw events from the server and use paintCanvas.drawLine to draw the points</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <Text textAlign="left"><Code>src/server/development.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>import socket.io</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>attach socket to server</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for new connections and handle them in a socket callback</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for draw events from the socket and broadcast them to others sockets</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 1: Make the paint application collaborative using socket.io</Text>
          <StepLink link={links.start} actual={links.startActual} />
          <StepLink link={links.startAmazon} actual={links.startAmazonActual} />
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 1: Solutions</Heading>
          <Text size={6} textColor="tertiary">Make the paint application collaborative using socket.io</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step1.PaintCanvas}
          ranges={[
            {loc: [0, 166], title: 'src/client/PaintCanvas.js'},
            {loc: [135, 136], note: '1. Dispatch the draw event to listeners'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step1.index}
          ranges={[
            {loc: [0, 35], title: 'src/client/index.js'},
            {loc: [1, 2], note: '1. import socket.io-client'},
            {loc: [22, 23], note: '2. create a new socket connection'},
            {loc: [26, 29], note: '3. emit events that dispatched by paintCanvas to the server'},
            {loc: [32, 35], note: '4. listen for and handle events emitted from the server'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step1.development}
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
          <Text size={6}>Users</Text>
        </Slide>
        <Slide
          transition={randomSlide()}
          notes={slideNotes.step2.client}
        >
          <Code textAlign="left">src/client/index.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Emit a login event (eg "LOGIN") to server on connect'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Prevent users from using an existing username'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Listen for an update user list event (eg "UPDATE_USER_LIST") from server and update user list display'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <Text textAlign="left"><Code>src/server/development.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Listen for login events (eg "LOGIN") from client and save the user using addUser(username, socket.id)'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Prevent users from using an existing username'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Emit an update user list event (eg "UPDATE_USER_LIST") to all clients when there is a login event'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Listen for "disconnect" events and remove the socket user from the users object (*hint: addUser returns the logout fn)'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Emit another update user list event after a user has been "logged out"'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 2: Users</Text>
          <StepLink link={links.step2} actual={links.step2Actual} />
          <Code>$ git checkout step-2</Code>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 2: Solutions</Heading>
          <Text size={6} textColor="tertiary">Users</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step2.index}
          ranges={[
            {loc: [0, 56], title: 'src/client/index.js'},
            {loc: [40, 43], note: '1. Emit "LOGIN" event to server on connect'},
            {loc: [45, 49], note: '2. Listen for "USERNAME_TAKEN" and prompt for another username'},
            {loc: [51, 56], note: '3. Listen for "UPDATE_USER_LIST" events from server and update user list display'},
          ]}
          notes={slideNotes.step2.bonus}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step2.development}
          ranges={[
            {loc: [0, 84], title: 'src/server/development.js'},
            {loc: [58, 71], note: '1. Listen for "LOGIN" events from client and update user object'},
            {loc: [61, 70], note: '2. Prevent users from using an existing username'},
            {loc: [66, 67], note: '3. Emit "UPDATE_USER_LIST" to all clients when there is a "LOGIN" event'},
            {loc: [73, 78], note: '4. Listen for "disconnect" events and remove the socket user from the users object'},
            {loc: [76, 77], note: '5. Emit "UPDATE_USER_LIST" after user is removed from users object'},
          ]}
        />
        {/*
          ****************
          part-4-3: step 3
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 3</Heading>
          <Text size={6}>Write secret messages to other users</Text>
        </Slide>
        <Slide transition={randomSlide()}>
          <Code textAlign="left">src/client/index.js</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Create buttons for users, when clicked, only dispatch events to that user'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Hint: two methods are available on the paintCanvas instance to help you:'}
              <List>
                <ListItem><Code textSize={'0.8em'}>{'paintCanvas.createUserButton(username)'}</Code></ListItem>
                <ListItem><Code textSize={'0.8em'}>{'paintCanvas.createAllButton()'}</Code></ListItem>
              </List>
            </ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <Text textAlign="left"><Code>src/server/development.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Check if a "toUser" is specified and only broadcast to that user'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 3: Write secret messages to other users</Text>
          <StepLink link={links.step3} actual={links.step3Actual} />
          <Code>$ git checkout step-3</Code>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 3: Solutions</Heading>
          <Text size={6} textColor="tertiary">Write secret messages to other users</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step3.index}
          ranges={[
            {loc: [0, 65], title: 'src/client/index.js'},
            {loc: [54, 64], note: '1. Create buttons for users, when clicked, only dispatch events to that user'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step3.development}
          ranges={[
            {loc: [0, 89], title: 'src/server/development.js'},
            {loc: [79, 87], note: '1. Check if a "toUser" is specified and only broadcast to that user'},
          ]}
        />
        {/*
          ***********
          part-5: fin
          ***********
        */}
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Running this in Apollo</Heading>
          <Text size={6} textColor="primary">Some tricks for running a node app in an Apollo environment</Text>
          <StepLink link={links.amazonBuildExample} actual={links.amazonBuildExampleActual} />
        </Slide>
        <Slide transition={randomSlide()} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Questions?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={2}>fin</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Websockets @ AMZN
          </Heading>
          <Heading size={6} caps lineHeight={3} textColor="secondary">
            By Will Farley
          </Heading>
          <Text textColor="tertiary">@wfarley</Text>
          <br />
          <Text textColor="secondary">goldhand.github.io/presentation-websockets</Text>
        </Slide>
      </Deck>
    );
  }
}
