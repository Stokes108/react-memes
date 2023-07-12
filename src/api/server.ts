const api_token = 'c08d63d389653a43d408a7e6df83ef6c9174c94c3ba511fd'

export const server_calls = {
    get : async () => {
        const response = await fetch('https://meme-app-flask.onrender.com/api/memes',
        {
            method: "GET",
            headers: {
                'Content-Type' : 'multipart/form-data',
                'x-access-token' : `Bearer ${api_token}`,
            }

        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
        
    },
    create : async (picData : any, memeData : any = {}) =>{
        const picResponse = await fetch('https://meme-app-flask.onrender.com/api/memes-picture',
        {
            method: "POST",
            headers: {
                'x-access-token' : `Bearer ${api_token}`,
            },
            body: picData
        });

        if (!picResponse.ok){
            throw new Error('Failed to add data to the server')
        }

        const picPath = await fetch('https://meme-app-flask.onrender.com/api/memes-picture',
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
        });

        if (!picPath.ok){
            throw new Error('Failed to retrieve picture data from the server')
        }

        const pic = await picPath.json()
        const final_pic_path = pic['pic_path']
        console.log(final_pic_path);
        

        

        const memeDict = {
            "file" : final_pic_path,
            "content_top" : memeData['content_top'],
            "content_bottom" : memeData['content_bottom'],
            "public" : true
        }

        


        const memeResponse = await fetch('https://meme-app-flask.onrender.com/api/memes',
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
            body: JSON.stringify(memeDict)
        });


        return await memeResponse.json()
        
    },
    delete : async ( id: string) => {
        const response = await fetch(`https://meme-app-flask.onrender.com/api/meme/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }
        return
    }, 
    update : async ( data : any = {}, id: string) =>{
        const response = await fetch(`https://meme-app-flask.onrender.com/api/meme/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
            body: JSON.stringify(data)

        });
        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }
        return await response.json()
    },
    get_single_data : async (id: string) => {
        const response = await fetch(`https://meme-app-flask.onrender.com/api/meme/${id}`,
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${api_token}`,
            },
        });
        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }
        return await response.json()
    },

    }

