const Message = require('./Message');

class Room {
    private roomId: String;
    private messages: Array<any>
    private users: Array<String>;

    constructor(roomId: String) {
        this.roomId = roomId;
        this.messages = [];
        this.users = [];
    }

    async findMessages() {
        const result = await new Message({}).findMessage({destination: this.roomId})
        if (result.status === 200) {
            this.messages = result;
        } else {
            this.messages = [];
        }
    }

    connectUserToRoom(userName: String) {
        this.users.push(userName)
    }

    connectUsersToRoom(userNames: Array<String>) {
        this.users = this.users.concat(userNames)
    }
}