import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
export async function PUT(req,res){
    const data=await new Response(req.body).text()
    const convertedData=JSON.parse(data)
    let id={_id:new ObjectId(convertedData._id)}
    const options = {upsert: true }
    const updateTodo = {
        $set: { completed:true } 
     };
    console.log(id)
    
    
     const client= await MongoClient.connect('mongodb+srv://sumukhahm2:fMlTEYejMtTBhVTm@cluster0.bn7ho7m.mongodb.net/todos?retryWrites=true&w=majority')
     const db=client.db()
     const todoUpdate=db.collection('todos')
    const result= await todoUpdate.updateOne(id,updateTodo,options)
     client.close()
     return NextResponse.json({message:'success'})
}