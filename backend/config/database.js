const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("\nDB connected successfully\n"))
		.catch((err) => {
			console.log("\nDB connected failed successfully\n");
			console.log(err);
			process.exit(1);
		});
};
