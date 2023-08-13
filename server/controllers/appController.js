import userModel from "../model/User.model.js"
import bcrypt, { hash } from 'bcrypt';

export async function register(req,res){
    // res.json('register route')

    try {
        const {username, password, profile, mail}=req.body;
        //chek the existing user:
        const existUsername = new Promise((resolve, reject) =>{
            userModel.findOne({username}), function(error, user){
                if(error) reject(new Error(error))
                if(user) reject({error:"Please use Unique USername"});

                resolve();
            }
        })
        
        //chek for mail:
        const existMailAdress = new Promise((resolve, reject) =>{
            userModel.findOne({mail}), function(error, user){
                if(error) reject(new Error(error))
                if(user) reject({error:"Please use Unique Mail Adress"});

                resolve();
            }
        })

        Promise.all([existUsername, existMailAdress])
            .then(()=>{
                if(password){ //bcrypt kütüphanesi ile plaint text teğil hash  code olarak pwd saklıyoruz
                    bcrypt.hash(password, 10)
                        .then(hashhedPwd =>{
                            //eğer olduysa user  data oluşsun:
                            const user = new userModel({
                                username,
                                password: hashhedPwd,
                                profile: profile || '',
                                mail
                            })

                            // return save result as a res
                            user.save()
                                .then(res=>res.status(201).send({ msg: "User Register Successfull"}))
                                .catch(res=>res.status(500).send({ error}))
                        }).catch(error =>{
                            return res.status(500).send({
                                error:"Enabled to hashed password"
                             })
                        })
                }
            }).catch (error=>{
                return res.status(500).send({
                    error
            })
        })
        

    } catch (error) {
        return res.status(500).send(error);
    }
}
export async function login(req,res){
    res.json('Login route')
}
export async function getUser(req,res){
    res.json('getUser route')
}
export async function uptadeUser(req,res){
    res.json('uptadeUser route')
}
export async function generateOTP(req,res){
    res.json('generateOTP route')
}
export async function verifyOTP(req,res){
    res.json('verifyOTP route')
}
export async function createResetSession(req,res){
    res.json('createResetSession route')
}
export async function resetPwd(req,res){
    res.json('resetPwd route')
}
