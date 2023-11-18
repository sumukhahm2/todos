import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function POST(req,res){
  console.log(req.method)
  if(req.method==='POST')
  {
    const data=await new Response(req.body).text()
    const convertedData=JSON.parse(data)
     console.log(convertedData)
     const client= await MongoClient.connect('mongodb+srv://sumukhahm2:fMlTEYejMtTBhVTm@cluster0.bn7ho7m.mongodb.net/todos?retryWrites=true&w=majority')
     const db=client.db()
     const todoCollection=db.collection('todos')
     
     const result=await todoCollection.insertOne(convertedData)
     console.group(result)
     client.close()
    
     return NextResponse.json({message:data})
  }
  
}


     