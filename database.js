const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://prashilkakde29:BTtINYEjKGy2MMyi@cluster0.vs1a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Virat",
    lastName: "Kohli",
    city: "Delhi",
    phoneNumber: "IDN",
  };

  // Add / Insert

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  // Read or Find

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Update

  const updateResult = await collection.updateOne(
    {
      /* filter criteria here */
    }, // Specify which document to update
    { $set: { firstName: "Prash" } } // Update operation
  );

  console.log("Updated documents =>", updateResult);

  return "Done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
