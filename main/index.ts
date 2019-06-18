// import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const createHandler = require('azure-function-express').createHandler;
import { createApp } from '../src/main';



export default async function() {
    const app = await createApp();
    const instance = app.getHttpAdapter().getInstance(); // express app
    return createHandler(instance);
  }