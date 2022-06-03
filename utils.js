function createResult(error, data)
{
    const result ={}

    if(error)
        {
            result['status']='Error'
            result['error']=error
        }
    else {
        result['status']='Sucess'
        result['data']= data
        }    
       return result
}

module.exports={
    createResult,
}