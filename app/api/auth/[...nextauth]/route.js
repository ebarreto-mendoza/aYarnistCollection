import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user"
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name:"credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials;
                console.log("In Credentials");

                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    //if user does not exist
                    if(!user){
                        console.log("User does not exist")
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if(!passwordMatch){
                        console.log("Passwords do not match");
                        return null;
                    }
                    console.log("Successful user");
                    return user;


                } 
                catch (error) {
                    console.log("Authorize error: ", error)
                }

            },

        }),
        
    ],
    callbacks: {
        async session({ session, token, user }){     
            session.user.id = token.sub     
            return session
        }
    },       
    database: process.env.MONGO_URI,
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",

    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
