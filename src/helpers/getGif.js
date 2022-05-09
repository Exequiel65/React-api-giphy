
const Getgif = async (category) => {
    try {
        const apiKey = "Zt0SFw83CKHyNCUAnSRKgsFhkO83V5M5"
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`);
        let result = await response.json();
        

        return result

    } catch (error) {
        console.error(error);
        return []
    }
    
}

export default Getgif;
