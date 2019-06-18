// import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const createHandler = require("azure-function-express").createHandler;
import { createApp } from '../src/main'

export default async function() {
    const app = await createApp()
    return createHandler(app)
}