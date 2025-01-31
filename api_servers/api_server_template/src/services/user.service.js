const { NotFoundError, ValidationError, AuthenticationError,AuthorizationError } = require("ca-webutils/errors");

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async getAllUsers(){
        const users = await this.userRepository.getAll();
        return users;
    }

    async register(user){

        return await this.userRepository.create(user);
        
    }

    async login({email, password}){
        let user = await this.userRepository.getOne({email})
        if(!user) throw new AuthenticationError(`Invalid credentials:${email}`,{email});
        if(user.password!==password) throw new AuthenticationError(`Invalid credentials: ${email}`,{email});
        if(!user.active) throw new AuthorizationError(`User Is Inactive`,{email});

        return {name:user.name, email:user.email, photo:user.photo, roles:user.roles};
    
    }

    async getUserById(id){
        return await this.userRepository.getOne({id});
    }

    async activateUser(email,activate=true){
        return await this.userRepository.updateOne({email}, {active: activate});
    }

    async addUserToRole(email,role){
        return await this.userRepository.updateOne({email}, {$push: {roles:role}});
    }

    async removeUserFromRole(email,role){
        return await this.userRepository.updateOne({email}, {$pull: {roles:role}});
    }

    async changePassword(email, oldPasswordOrOtp , newPassword){

        //verify if oldPssword matches password or otp of user
        let user = await this.userRepository.findOne({email})
        if(!user) throw new NotFoundError(`User ${email} does not exist`,{email})

        let match = user.password===oldPasswordOrOtp || user.otp===oldPasswordOrOtp;
        if(!match) throw new ValidationError(`Invalid old password or OTP`);
        return await this.userRepository.updateOne({email}, {password: newPassword});
    }
}

UserService._dependencies =[ 'userRepository' ];

module.exports = UserService;

