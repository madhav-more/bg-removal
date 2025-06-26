import { Webhook } from "svix"
import UserModel from "../models/userModel.js"






// api controller function to manage clerk user  eith database

// http://localhost:4000/api/user/webhooks

const clerWebhooks = async(req,res)=>{
  try {

    // create a svix instance
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    await whook.verify(JSON.stringify(req.body) , {
      "svix-id":req.headers["svix-id"],
      "svix-timestamp":req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    })


    const {data , type} = req.body

    switch (type) {
      case "user.created":{
        const userdata = {
          clerlId: data.id,
          email: data.email_addresses[0].email_address,
          firstName:data.first_name,
           lastName: data.last_name,
           photo : data.image_url
        }

        await UserModel.create(userdata)
        res.json({})

        break;
      }

       case "user.updated":{

        const userdata = {
          email: data.email_addresses[0].email_address,
          firstName:data.first_name,
           lastName: data.last_name,
           photo : data.image_url
        }

        await UserModel.findOneAndUpdate({clerlId:data.id} , userdata)
        res.json({})

        break;

      }

       case "user.deleted":{

        await UserModel.findOneAndDelete({clerlId:data.id})
        res.json({})

        break;

      }

      default:
        break;
    }





    
  } catch (error) {
    console.log(error.message);
    res.json({success:false , message:error.message})
    
    
  }
  
}

export {clerWebhooks}