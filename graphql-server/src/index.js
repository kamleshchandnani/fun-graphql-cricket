import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

const { PORT } = process.env;

const app = express();
app.use(helmet({ dnsPrefetchControl: false }));
app.use(compression());
app.use('/health', (req, res) => res.send({ 'graphql-server': true }));

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
