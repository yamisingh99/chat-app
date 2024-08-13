const mongoose = require('mongoose');  // Import mongoose

// Define the User schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String, default: 'https://example.com/default-pic.png' }
}, {
    timestamps: true,
});

// Password hashing (optional but recommended)
// const bcrypt = require('bcryptjs');
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model("User", userSchema);  // Create the User model
module.exports = User;  // Export the model
