const mongoose = require("mongoose");

// chatName, isGroupChat, users, latestMessages, groupAdmin
const chatModel = mongoose.Schema({
    chatName: { 
        type: String, 
        trim: true, 
        required: true 
    },
    isGroupChat: { 
        type: Boolean, 
        default: false,
        required: true 
    },
    users: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
    latestMessages: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Message" 
    }],
    groupAdmin: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }
}, {
    timestamps: true,
});

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
