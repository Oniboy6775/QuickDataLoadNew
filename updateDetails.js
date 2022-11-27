const mongoose = require("mongoose");
const User = require("./Models/usersModel");
const URI =
  "mongodb://Oniboy:cILBt3LmZ6tSvuao@oniboytechzone-shard-00-00.su5o9.mongodb.net:27017,oniboytechzone-shard-00-01.su5o9.mongodb.net:27017,oniboytechzone-shard-00-02.su5o9.mongodb.net:27017/oniboytechzone?ssl=true&replicaSet=atlas-qw42ej-shard-0&authSource=admin&retryWrites=true&w=majority";
const populate = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
    let update = await User.updateMany(
      {},
      {
        $set: {
          reservedAccountNo: "",
          reservedAccountBank: "",
          reservedAccountNo2: "",
          reservedAccountBank2: "",
        },
      }
    );
    // let update = await User.find();
    console.log(update);
    console.log("Success!!");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

populate();
