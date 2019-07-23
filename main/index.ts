import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const createHandler = require('azure-function-express').createHandler;
import { createApp } from '../src/main';

const handlerPromise = (async function getHandler() {
  const app = await createApp();
  const instance = app.getHttpAdapter().getInstance(); // express app
  await app.listen(3000);
  return createHandler(instance);
})();

const main: AzureFunction = function (context: Context, req: HttpRequest): void {
  handlerPromise.then(function(handler) {
    handler(context, req);
  })
};

export default main;