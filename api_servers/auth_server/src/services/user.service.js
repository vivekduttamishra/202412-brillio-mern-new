const { NotFoundError, ValidationError, AuthenticationError,AuthorizationError } = require("ca-webutils/errors");
const bcrypt = require("bcrypt");
class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async getAllUsers(){
        const users = await this.userRepository.getAll();
        return users.map(this._userInfo);
    }

    _userInfo(user){
        return {name:user.name, email:user.email, photo:user.photo, roles:user.roles,active:user.active}

    }

    async register(user){
        const admin = user.roles.find(role=>role.toLowerCase() === "admin");
        if(admin)
            throw new AuthorizationError(`Admin user cannot be created manually`);
        user.password = await bcrypt.hash(user.password,10);
        let dbUser= await this.userRepository.create(user);
        return this._userInfo(dbUser);
    }

    async login({email, password}){
        let user = await this.userRepository.findOne({email})
        if(!user) throw new AuthenticationError(`Invalid credentials:${email}`,{email});
        const match = await bcrypt.compare(password,user.password);        
        if(!match) 
            throw new AuthenticationError(`Invalid credentials: ${email}`,{email});
        if(!user.active) 
            throw new AuthorizationError(`User Is Inactive`,{email});

        //return {name:user.name, email:user.email, photo:user.photo, roles:user.roles};
    
        return this._userInfo(user);
    }

    async getUserById(id){
        const user = await this.userRepository.getById(id);
        return user;
    }

    async activateUser(email,activate=true){
        let user = await this.userRepository.getById(email);
        user.active=activate;
        return await user.save();
    }

    async addUserToRole(email,role){
        return await this.userRepository.update({email}, {$push: {roles:role}});
    }

    async removeUserFromRole(email,role){
        return await this.userRepository.update({email}, {$pull: {roles:role}});
    }

    async changePassword(email, oldPasswordOrOtp , newPassword){

        //verify if oldPssword matches password or otp of user
        let user = await this.userRepository.getById(email);
        
        let match = await bcrypt.compare(oldPasswordOrOtp,user.password);
        if(!match)
            match = await bcrypt.compare(oldPasswordOrOtp,user.otp);
        if(!match) throw new ValidationError(`Invalid old password or OTP`);

        newPassword = await bcrypt.hash(newPassword,10);

        return await this.userRepository.updateOne({email}, {$set:{password: newPassword}});
    }

    async forgetPassword(email){
        //check if email is valid
        //generate a random hashed otp.
        //add the otp to the user object in mongoose
        //send an email with the otp to the user
        //return success message
        //throw error if email is not found
    }
}

UserService._dependencies =[ 'userRepository' ];

module.exports = UserService;

