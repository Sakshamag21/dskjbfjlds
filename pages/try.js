const { MongoClient } = require("mongodb");


async function main(){
    const uri="mongodb+srv://AncSaksham:AncSaksham9927@cluster0.vemdodk.mongodb.net/?retryWrites=true&w=majority"
    const client=new MongoClient(uri);
    
    try {
        await client.connect();
        // await listDatabases(client);
        // await createListing(client,{
        //     name:"Saksham",
        //     summary:"jsdvud",
        //     bedrooms:1,
        //     bathrooms:1
        // })
        // await createMultipleListing(client,[
        //     {
        //             name:"Ayran",
        //             summary:"jsdvud",
        //             bedrooms:1,
        //             bathrooms:1
        //     },
        //     {
        //         name:"Lakshay",
        //         summary:"jsdvud",
        //         bedrooms:1,
        //         bathrooms:1
        //     },
        //     {
        //           name:"Raj",
        //         summary:"jsdvud",
        //          bedrooms:1,
        //         bathrooms:1
        //     },
        //     {
        //         name:"Bruno",
        //         summary:"jsdvud",
        //         bedrooms:1,
        //         bathrooms:1
        //     }
            
        // ])

        // await findOneListingByName(client,"Saksham");
        await findListingsWithMultipleConditions(client,{
            minimumNumberOfBathrooms:2,
            minimumNumberOfBedrooms:4,
            maximumNumberOfResults:5
        })
    } catch (e) {
        console.error(e); 
    }finally{
        await client.close();
    }
}
// let db;
main().catch(console.error);

async function findListingsWithMultipleConditions(client,{
    minimumNumberOfBathrooms=0,
    minimumNumberOfBedrooms=0,
    maximumNumberOfResults=Number.MAX_SAFE_INTEGER
}={}){
    const cursor=client.db("sample_airbnb").collection("listingsAndReviews").find({
        bedrooms:{$gte:minimumNumberOfBedrooms},
        bathrooms:{$gte:minimumNumberOfBathrooms}
    }).sort({last_review: -1}).limit(maximumNumberOfResults);

    const results= await cursor.toArray();

    if (results.length>0){
        results.forEach((result,i)=>{
            date=new Date(result.last_review).toDateString();
            console.log(i+1,result.name);
            console.log(result._id);
            console.log(result.bedrooms);
            console.log(result.bathrooms);
            console.log(new Date(result.last_review).toDateString());
        })
    }else{
        console.log("nothing foumd")
    }
}


async function findOneListingByName(client,nameOfListing){
   const result= await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name:nameOfListing});
   if (result){
    console.log(result);
   }else{
    console.log("nojhjjjujjjjjjj");
   }

}

async function createMultipleListing(client,newListings){
    const result= await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
    console.log(result.insertedCount);
    console.log(result.insertedIds);
}


async function createListing(client,newListing){
  const result= await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(result.insertedId);

}


async function listDatabases(client){
    const databasesList=await client.db().admin().listDatabases();
    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(db.name);
    });
}