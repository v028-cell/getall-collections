import { ArchwayClient } from '@archwayhq/arch3.js';
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const network = {
  chainId: 'constantine-3',
  endpoint: 'https://rpc.constantine.archway.tech',
  prefix: 'archway',
};

const hubContractAddress = 'archway1x8dugk6pw27j5q6kkv837fgp9ycvu9y7tm99th8x0gmkgu8x346sa55ygj';

const client = await SigningArchwayClient.connectWithSigner(network.endpoint);

const collectionsMsg = {
  collections: {
    "pagination": {
      "limit": 10,
      "order": "ascending",
      "page": "4"
    }
  },
};

const collections = await client.queryContractSmart(
  hubContractAddress,
  collectionsMsg
);

console.log(collections);