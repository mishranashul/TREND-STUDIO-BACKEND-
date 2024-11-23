const { z } = require("zod");

const signUpSchema = z.object({
    username : z.string({ required_error: "name ie required" }).trim().min(3, { message: "Name must be at least 3 chars." }),
    email: z.string({required_error: "email is required"}).trim().email({message:"invalid email address"}).min(3,{message: "email must be at least of 3characters."}).max(255,{message: "email must not be more than 255 characters"}),
    phone: z.string({required_error: "phone is required"}).trim().min(10,{message: "minimum  10 digits require"}).max(20,"maximum 20 digits"),
    password: z.string({required_error: "password is required"}).min(8,{message: "must be of 8 characters"}).max(1024,"password can't be greater than 1024 charters"),
});

const loginSchema = z.object({
    email: z.string({required_error: "email is required"}).trim().email({message:"invalid email address"}).min(3,{message: "email must be at least of 3characters."}).max(255,{message: "email must not be more than 255 characters"}),
    password: z.string({required_error: "password is required"}).min(8,{message: "must be of 8 characters"}).max(1024,"password can't be greater than 1024 charters"),
});

module.exports = {signUpSchema};