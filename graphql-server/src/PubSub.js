import { PubSub } from 'apollo-server-express';

const pubsub = new PubSub();

pubsub.exchange = 'fun-cricket';

export default pubsub;
