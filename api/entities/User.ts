const UserModel = require('../models/User.model')
const verifyContent = require('../utils/verifyContent')

class User {
    private userName: String;
    private joinedDate: Date;

    constructor (userName: String) {
        this.userName = userName;
        this.joinedDate = new Date();
    }

    async createNewUser () {
        const currentTime = new Date();
        this.joinedDate = currentTime;
        if (verifyContent(this.userName)) {
            let newEntry = new UserModel({userName: this.userName, joinedDate: currentTime})
            await newEntry.save()
        } else throw new Error("Innapropriate username")
    }

    async findUser (query: any) {
        try {
            let result = await UserModel.find(query)
            if (result) {
                return { status: 200, data: result }
            } else {
                return { status: 202, data: 'No results found' }
            }
        } catch (err: any) {
            return { status: 500, data: err.message }
        }
    }

    async updateUser (query: any, update: any) {
        try {
            await UserModel.findOneAndUpdate(query, update)
            return { status: 200, data: 'Update successful' }
        } catch (err: any) {
            return { status: 500, data: err.message }
        }
    }

    async toJson () {
        let result = await UserModel.findOne({userName: this.userName})
        if (result) {
            this.joinedDate = result.joinedDate;
        }
        return {
            userName: this.userName,
            joinedDate: this.joinedDate
        }
    }
}

export default User