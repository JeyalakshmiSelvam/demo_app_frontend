export async function postRequest(endPoint, data,token) {

    try{
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        if(token) requestOptions['headers']['authorization'] = token
        console.log("requestOptions",requestOptions);
        return fetch(`http://localhost:3030${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                return data
            })
            .catch((error) => {
                    return error; 
            });
    }catch(err){
        return err;
    }

   
}

export async function getRequest(endPoint,data,token) {
    
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
            },
        };
        if(token) requestOptions['headers']['authorization'] = token
        console.log("requestOptions",requestOptions);
        return fetch(`http://localhost:3030${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data",data)
                return data
            })
            .catch((error) => {
                    return error; 
            });
    } catch (err) {
        console.log("error" + err);
        return err;
    }
    
}