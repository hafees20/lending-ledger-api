// Function to send err according to error code
export default function errorHandler(err,res){
   if(err.code){
    res.status(err.code).send(err.message)
   }else{
    res.status(500).send("Internal Server Error")
   }
}