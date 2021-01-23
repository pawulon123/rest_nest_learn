
const globalError = 
{
    statusCode: 500,
    message: "Internal server error"
} 
export default (mockRepository) => {
  return (fnRepository, rejectedMethod)=>{
    mockRepository[fnRepository].mockRejectedValue(globalError);
    return expect(rejectedMethod()).rejects.toMatchObject({statusCode: globalError.statusCode});
}
}

