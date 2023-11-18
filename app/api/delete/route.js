import { NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

export async function DELETE(req,res){
 
    const data=await new Response(req.body).text()
    const convertedData=JSON.parse(data)
     const id=new ObjectId(convertedData)
     const client= await MongoClient.connect('mongodb+srv://sumukhahm2:fMlTEYejMtTBhVTm@cluster0.bn7ho7m.mongodb.net/todos?retryWrites=true&w=majority')
     const db=client.db()
     const todoCollection=db.collection('todos')
     
     const result=await todoCollection.deleteOne({_id:id})
     console.group(result)
     client.close()
    
     return NextResponse.json({message:'deleted'})
  
  
}


     