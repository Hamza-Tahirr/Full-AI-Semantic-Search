// Importing Libraries
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { OpenAI } from "langchain/llms/openai"
import { loadQAStuffChain } from "langchain/chains"
import { Document } from "langchain/document"
import { timeout } from "./config"

//For Creating pinecone index
export const createPineconeIndex =async (
    client,
    indexName,
    vectorDimension
) => {
    // Index existence check
    console.log(`Checking "${indexName}"...`)
    //getting list of exsisting indexes 
}