import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"


export async function GET(){
  
  const client= await MongoClient.connect('mongodb+srv://sumukhahm2:fMlTEYejMtTBhVTm@cluster0.bn7ho7m.mongodb.net/todos?retryWrites=true&w=majority')
  const db=client.db()
  const todoCollection=db.collection('todos')
  const result=await todoCollection.find().toArray()
  console.log(result)
  client.close()
    return NextResponse.json({result})
}


     