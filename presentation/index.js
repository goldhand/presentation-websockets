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
            Websockets Workshop
          </Heading>
          <Heading size={6} caps lineHeight={3} textColor="tertiary">
            By Will Farley
          </Heading>
          <br />
          <Text textColor="tertiary">@wfarley</Text>
          <Text textColor="tertiary">github.com/goldhand</Text>
          <br />
          <Text textColor="secondary">goldhand.github.io/presentation-websockets</Text>
        </Slide>
        <Slide>
          <Heading size={6} caps>Hi, I'm Will</Heading>
        </Slide>
        <Slide>
          <Image style={{maxWidth: '100%', maxHeight: '100%'}} src={require('../assets/apluslogo_highres.png')} />
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
          <StepLink link={'tiny/74c9bcbr/'} actual={'http://tiny.amazon.com/74c9bcbr/'} />
          <br />
          <Text>
            <small>
              {'Backup: '}
              <Link href={links.herokuActual}>{links.heroku}</Link>
            </small>
          </Text>
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
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Setup</Heading>
          <Appear><Text size={6} textAlign="left" textColor="primary">{'Find a partner and decide who will be the client and who will be the server.'}</Text></Appear>
          <Appear><Text size={6} textAlign="left" textColor="primary">{'Decide if you\'re going to develop locally or in an apollo environment (your dev desktop), within a brazil workspace using the "PaintAppIO/dev" versionset'}</Text></Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={4} textColor="primary">"client" should clone or use</Heading>
          <br />
          <Text size={6} textColor="primary">Local:</Text>
          <StepLink link={'github.com/goldhand/paint-io-client'} actual={'https://github.com/goldhand/paint-io-client'} />
          <Text size={6} textColor="primary">Apollo:</Text>
          <StepLink link={'code/packages/NodeJS-paint-io-client'} actual={'https://code.amazon.com/packages/NodeJS-paint-io-client'} />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={4} textColor="primary">"server" should clone or use</Heading>
          <br />
          <Text size={6} textColor="primary">Local:</Text>
          <StepLink link={'github.com/goldhand/paint-io-server'} actual={'https://github.com/goldhand/paint-io-server'} />
          <Text size={6} textColor="primary">Apollo:</Text>
          <StepLink link={'code/packages/NodeJS-paint-io-server'} actual={'https://code.amazon.com/packages/NodeJS-paint-io-server'} />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={4} textColor="primary">From the package directory, run:</Heading>
          <br />
          <Text size={6} textColor="primary">Local:</Text>
          <Text textAlign="left"><Code textSize="0.7em">$ npm install</Code></Text>
          <Text textAlign="left"><Code textSize="0.7em">$ npm start</Code></Text>
          <Text size={6} textColor="primary">Apollo:</Text>
          <Text textAlign="left"><Code textSize="0.7em">$ brazil-build start</Code></Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Text size={6} textAlign="left" textColor="primary">You should only need to edit one file in each package.</Text>
          <Text size={6} textColor="primary">Client:</Text>
          <Text textAlign="left"><Code textSize="0.7em">./src/app.js</Code></Text>
          <Text size={6} textColor="primary">Server:</Text>
          <Text textAlign="left"><Code textSize="0.7em">./src/socket.js</Code></Text>
          <br />
          <Text size={6} textAlign="left" textColor="primary">{'Inline instructions can be found in that file. Each task is marked by as:'}</Text>
          <Text textAlign="left"><Code textSize="0.7em">TODO x.x [description]</Code></Text>
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
        >
          <Heading size={6} caps>Client</Heading>
          <Text textAlign="left"><Code>src/app.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'0.7em'}>import socket.io-client</ListItem></Appear>
            <Appear><ListItem textSize={'0.7em'}>{`create a new socket connection to your server by invoking "socket.io-client" with your server's url or ip address`}</ListItem></Appear>
            <Appear><ListItem textSize={'0.7em'}>{`emit a "DRAW_POINTS" message to the server when paintCanvas has mouseMove events`}</ListItem></Appear>
            <Appear><ListItem textSize={'0.7em'}>
              {`listen for draw events from the server of the draw action-type (eg "DRAW_POINTS") and use the "paintCanvas.drawLine(Array<{x: number, y: number}>, color: string)" method to draw the points on the canvas.`}
            </ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <Text textAlign="left"><Code>src/socket.js</Code></Text>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>import socket.io</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>attach a socket to the express server by passing the express server instance as an argument when socket.io is invoked</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>listen for new connections and use the provided "onSocketConnect" function</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>
              {`listen for draw action-type events (eg "DRAW_POINTS") from the socket and broadcast them to others sockets`}
            </ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']}>
          <Heading size={6} textColor="primary" textAlign="top" caps>Concepts</Heading>
          <CodePane lang="js" source={codes.step1.concepts} margin="20px auto" textSize="0.6em" />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 1: Make the paint application collaborative using socket.io</Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 1: Solutions</Heading>
          <Text size={6} textColor="tertiary">Make the paint application collaborative using socket.io</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step1.app}
          ranges={[
            {loc: [0, 85], title: 'Client'},
            {loc: [7, 8], note: '1. import socket.io-client'},
            {loc: [9, 10], note: '2. create a new socket connection'},
            {loc: [46, 47], note: '3. emit a "DRAW_POINTS" message to the server'},
            {loc: [51, 54], note: '4. listen for and handle "DRAW_POINTS" events emitted from the server'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step1.socket}
          ranges={[
            {loc: [0, 31], title: 'Server'},
            {loc: [23, 24], note: '1. import socket.io'},
            {loc: [23, 24], note: '2. attach socket to server'},
            {loc: [26, 27], note: '3. listen for new connections'},
            {loc: [5, 8], note: '4. listen for "DRAW_POINTS" events and broadcast them to other client sockets'},
          ]}
        />
        {/*
          ****************
          part-4-2: step 2
          ****************
        */}
        <Slide transition={['fade']}>
          <Heading size={6} caps>Step 2</Heading>
          <Text size={6}>Maintain a list of active users</Text>
        </Slide>
        <Slide
          transition={randomSlide()}
        >
          <Heading size={6} caps>Client</Heading>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Emit a login event (eg "LOGIN") to the server when the client is connected with the selected username'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Prevent users from using an existing username using an "acknowledgement" when you dispatch the login event'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Listen for an update user list event (eg "UPDATE_USER_LIST") from server and update user list display'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Listen for login events (eg "LOGIN") from client and save the user using db.create(username, socket.id)'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Prevent users from using an existing username using the "acknowledgement" from the client'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Emit an update user list event (eg "UPDATE_USER_LIST") to all clients when there is a login event'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Listen for "disconnect" events and remove the socket user from the users object (*hint: db.create(username, socket.id) returns the logout fn)'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Emit another update user list event after a user has been "logged out"'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']}>
          <Heading size={6} textColor="primary" textAlign="top" caps>Concepts</Heading>
          <CodePane lang="js" source={codes.step2.concepts} margin="20px auto" textSize="0.6em" />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 2: Maintain a list of active users</Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 2: Solutions</Heading>
          <Text size={6} textColor="tertiary">Maintain a list of active users</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step2.app}
          ranges={[
            {loc: [0, 96], title: 'Client'},
            {loc: [74, 82], note: '1. Emit "LOGIN" event to server on connect'},
            {loc: [76, 77], note: '2. Prevent users from using an existing username using an "acknowledgement" when you dispatch the login event'},
            {loc: [83, 91], note: '3. Listen for "UPDATE_USER_LIST" events from server and update user list display'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step2.socket}
          ranges={[
            {loc: [0, 45], title: 'Server'},
            {loc: [13, 21], note: '1. Listen for "LOGIN" events from client and update user object'},
            {loc: [15, 16], note: '2. Prevent users from using an existing username'},
            {loc: [18, 19], note: '3. Emit "UPDATE_USER_LIST" to all clients when there is a "LOGIN" event'},
            {loc: [24, 28], note: '4. Listen for "disconnect" events and remove the socket user from the users object'},
            {loc: [26, 27], note: '5. Emit "UPDATE_USER_LIST" after user is removed from users object'},
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
          <Code textAlign="left">Client</Code>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Update the user list display from step 2.3 so that it displays buttons, when clicked, draw events will only be dispatched to that user'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'When a user is selected, filter draw events from other users and only display events from the selected user'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Create a button that, when clicked, will send draw events to all users again'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()}>
          <Heading size={6} caps>Server</Heading>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>{'Check if a "toUser" is specified and only broadcast to that user'}</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>{'Include information about the "fromUser" so the client can filter draw events from other users and only display events from the selected user'}</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" transition={['zoom']}>
          <Heading size={6} textColor="primary" textAlign="top" caps>Concepts</Heading>
          <CodePane lang="js" source={codes.step3.concepts} margin="20px auto" textSize="0.6em" />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary" transition={['fade']}>
          <Heading size={3} textColor="primary">Get Started!</Heading>
          <Text size={6} textColor="primary">Step 3: Write secret messages to other users</Text>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary" transition={randomSlide()}>
          <Heading size={3} textColor="tertiary">Step 3: Solutions</Heading>
          <Text size={6} textColor="tertiary">Write secret messages to other users</Text>
        </Slide>
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step3.app}
          ranges={[
            {loc: [0, 118], title: 'Client'},
            {loc: [92, 101], note: '1. This createUser function creates a button that will set "toUser" to a username'},
            {loc: [50, 54], note: '1. Pass the "toUser" value in the "DRAW_POINTS" events'},
            {loc: [50, 54], note: '2. Pass the "fromUser" value as the current user\'s username.'},
            {loc: [58, 61], note: '2. If a "toUser" is specified, filter out draw events from other users'},
            {loc: [103, 111], note: '3. Create a button that, when clicked, will send draw events to all users again'},
          ]}
        />
        <CodeSlide
          {...codeSlideDefaults}
          code={codes.step3.socket}
          ranges={[
            {loc: [0, 89], title: 'Server'},
            {loc: [28, 35], note: '1. Check if a "toUser" is specified and only broadcast to that user'},
            {loc: [28, 35], note: '2. Include information about the "fromUser" so the client can filter draw events from other users and only display events from the selected user'},
          ]}
        />
        {/*
          ***********
          part-5: fin
          ***********
        */}
        <Slide transition={randomSlide()} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Discuss</Heading>
          <List ordered>
            <Appear><ListItem textSize={'1em'}>Flow / TypeScript</ListItem></Appear>
            <Appear><ListItem textSize={'1em'}>Scaling Horizontally</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={randomSlide()} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Resources</Heading>
          <StepLink link="AWS Fargate / ECS with Socket.IO" actual={'https://medium.com/containers-on-aws/building-a-socket-io-chat-app-and-deploying-it-using-aws-fargate-86fd7cbce13f'} />
        </Slide>
        <Slide transition={randomSlide()} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Cache these if you want to use brazil</Heading>
          <StepLink actual={'https://code.amazon.com/version-sets/PaintAppIO/dev'} link={'code/version-sets/PaintAppIO/dev'} />
          <StepLink actual={'https://code.amazon.com/packages/NodeJS-paint-io-server'} link={'code/packages/NodeJS-paint-io-server'} />
          <StepLink actual={'https://code.amazon.com/packages/NodeJS-paint-io-client'} link={'code/packages/NodeJS-paint-io-client'} />
        </Slide>
        <Slide transition={randomSlide()} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary">Questions?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={2}>fin</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Websockets Workshop
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
