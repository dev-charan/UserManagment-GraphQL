const User = require("../models/User")

const root ={

    //Query Resolvers

    users:async()=>{
        try {
            return await User.find().sort({
                createdAt:-1
            })
        } catch (error) {
            throw new Error("Failed to fetch users")
        }
    },

    user : async ({id})=>{
        try{
            const user = await User.findById(id);
            
            if(!user){
                throw new Error("User not found")
            }
        }catch(error){
                throw new Error("Failed to fetch user")
        }
    },

    //Mutation Resolvers

    createUser : async ({name,email,age})=>{
        try {
            const existingUser = await User.findOne({email})
            if(existingUser){
                throw new Error('User already exists')
            }
            const user = new User({name,email,age})
            await user.save();
            return user;
        } catch (error) {
            throw new Error("Failed to create user")
        }
    },

    updateUser :async({id,name,email,age})=>{
            try {
                const updateData ={};
                if (name !== undefined) updateData.name = name;
                if (email !== undefined) updateData.email = email;
                if (age !== undefined) updateData.age = age;

                const user = await User.findByIdAndUpdate(
                    id,
                    updateData,
                    {new:true,runValidators:true}
                )

                 if (!user)
                 {
                    throw new Error('User not found');
                 }
            } catch (error) {
                   throw new Error(error.message || 'Failed to update user');
            }
    },

        deleteUser: async ({ id }) => {
            try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                throw new Error('User not found');
            }
            return true;
            } catch (error) {
            throw new Error('Failed to delete user');
            }
        },
};
module.exports = {  root };
