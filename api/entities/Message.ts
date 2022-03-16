const MessageModel = require('../models/Message.model')
const verifyContent = require('../utils/verifyContent')

class Message {
    private content: String;
    private sentDate: Date;
    private userName: String;
    private destination: String;

    constructor (obj: any) {
        if (obj.content) {
            this.content = obj.content
        } else this.content = "";
        if (obj.sentDate) {
            this.sentDate = obj.sentDate
        } else this.sentDate = new Date();
        if (obj.userName) {
            this.userName = obj.userName
        } else this.userName = "";
        if (obj.destination) {
            this.destination = obj.destination;
        } else this.destination = "";
    }
    
    async createNewMessage () {
        const currentTime = new Date();
        this.sentDate = currentTime;
        if (verifyContent(this.content)) {
            let newEntry = new MessageModel({
                content: this.content, sentDate: currentTime, userName: this.userName
            })
            await newEntry.save()
        } else throw new Error("Innapropriate content")
    }

    async findMessage (query: any) {
        try {
            let result = await MessageModel.find(query)
            if (result) {
                return { status: 200, data: result }
            } else {
                return { status: 202, data: 'No results found' }
            }
        } catch (err: any) {
            return { status: 500, data: err.message }
        }
    }

    async sendMessage () {
        // save message
        // send to this.destination
    }

    toJson() {
        return {
            content: this.content,
            sentDate: this.sentDate,
            userName: this.userName
        }
    }
}

export default Message