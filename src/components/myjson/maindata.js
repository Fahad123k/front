

async function maindata() {


    let response =await fetch("http://localhost:5000/fetchdata");
    let data=await response.json();
    console.log(data.data)
   return data.data;


}

export default maindata