import '@babel/polyfill';
import express from 'express';
import helmet from 'helmet';
// import compression from 'compression';
import slashes from 'connect-slashes';
import renderMiddleware from './render/renderMiddleware';

const app = express();

app.set('trust proxy', true);
app.use(helmet({ dnsPrefetchControl: false }));
app.use('/health', (req, res) => res.send({ 'graphql-client': true }));
app.use('/graphql-client/build/client', express.static('build/client'));
app.use(slashes(true));
app.use(renderMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`graphql-client is running as ${__STAGE__} on port ${PORT}`);
});
