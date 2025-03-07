let API_KEY = "AIzaSyBlhkT47pb3Z5JyaYH-viPMRGoUiHdfHu0";

let videocontener = document.getElementById("video-data");

async function getData() {

    let search_term = document.getElementById("search").value || "University";
    console.log(search_term)

    console.log("Clicked")
    try {

        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
        let response = await data.json();
        console.log(data);
        console.log(response.items);
        showVideoCards(response.items);
    } catch (error) {
        console.log(error);
    }
}
// getData();

async function showVideoCards(array) {
    console.log(array);
    // document.getElementById("loader-container").style.display = "none";
    document.getElementById("video-data").innerHTML = null;
    array.forEach(({ snippet, id }) => {
        let videobox = document.createElement("div")
        videobox.className = "videos";
        // videobox.style.height="20%";
        videobox.style.border = "1px solid black";


        let img = document.createElement("img")
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p")
        title.innerText = snippet.title;

        let channel_title = document.createElement("p")
        channel_title.innerText = snippet.channelTitle;

        videobox.append(img, title, channel_title);

        videocontener.append(videobox);



        videobox.onclick = () => {
            console.log(snippet, id)
            let data = {
                snippet, id
            }
            localStorage.setItem("videoData", JSON.stringify(data));
            window.location.href = "video.html"
        }
    });


}

{/* <iframe width="914" height="514" src="https://www.youtube.com/embed/-wFTAFAjIrY" title="Terrifying South Horror | Syringe Hindi Dubbed Full Movie | Swathi Reddy, Naveen Chandra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }