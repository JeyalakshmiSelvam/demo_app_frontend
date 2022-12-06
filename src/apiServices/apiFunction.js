export async function postRequest(endPoint, data,token) {
    // let result;
    // axios({
    //     method: 'post',
    //     url: "http://192.168.0.103:3030/" + endPoint,
    //     data
    // }).then((response) => {
    //     console.log("post success");
    //     result = response.data;
    // }).catch((error) => {
    //     console.log("post error");
    //     result = "Error";
    // });;

    // return result;
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    if(token) requestOptions['headers']['authorization'] = token
    console.log("requestOptions",requestOptions);
    await fetch(`http://localhost:3030${endPoint}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            // this.setState({ postId: data.id })
            console.log("data",data)
            return Promise.resolve(data) 
        })
        .catch((error) => {
                console.log("post error");
                return Promise.reject(error) 
        });
}

// export async function get(endPoint) {
//     let result;

//     try {
//         const response = await axios.get("http://192.168.0.103:3030/" + endPoint);
//         console.log(response.data);
//         console.log("get success");
//         result = response.data;
//     } catch (err) {
//         console.log("error" + err);
//         result = "error";
//     }
//     // axios.get("http://192.168.0.103:3030/" + endPoint).then((response) => {
//     //     console.log("get success");
//     //     return response.data;
//     // }).catch((error) => {
//     //     console.log("get error");
//     //     return "Error";
//     // });
//     return result;
// }