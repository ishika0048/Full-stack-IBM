async function getData(){
    let API_KEY = "AIzaSyDcsAnbrZWC4Ft-u3o98E5wbud6Yxh2b-w"
    let search_term=document.getElementById('query').value ||"Univercity";
    let videoContainer=document.getElementById('video_data');

    async function getData(){
        try{
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}
`);
let response = await data.json()
console.log(data)
console.log(response.item);
} catch(error){
    console.log("Error");
   }
}
//getData()

{/*<iframe width="884" height="497" src="https://www.youtube.com/embed/qUFyj6mMCZ0" title="INDIA VS AUSTRALIA ODI FINAL MATCH FULL MATCH HIGHLIGHTS | IND VS AUS MOST THRILLING EVER🔥😱" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/
}

async function showVideocards(){ 
    Array.foreach(element)=> {
        let videobox=document.createElement("div"
            videobox.className="videos";
        )
}