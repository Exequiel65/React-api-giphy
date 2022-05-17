
const Getgif = async (category) => {
    try {
        const apiKey = "Zt0SFw83CKHyNCUAnSRKgsFhkO83V5M5"
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`);
        let {data} = await response.json();
        
        const gifs = data.map(gif => (
            {
                id : gif.id,
                title : gif.title,
                url : gif.images.downsized_medium.url
            }
        ))
        return gifs

    } catch (error) {
        console.error(error);
        return []
    }
    
}

export default Getgif;
