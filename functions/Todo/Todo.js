var faunadb = require('faunadb'),
  q = faunadb.query;

const handler = async (event) => {
  const msg=JSON.parse(event.body)

  try {
    var adminClient = new faunadb.Client({secret:"fnAD9xujdVACB7XRpestrt37ZAqK4FWCVge82QBt"});
  var result=await adminClient.query(
  
    q.Create(
      q.Collection('posts'),
      { data:{detail:msg.message} },
    )
    
  )
  console.log(result,"result show here plz >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    return {
      statusCode: 200,
      body: JSON.stringify({detial:`${result.ref.id}` }),
   
    }







   
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
