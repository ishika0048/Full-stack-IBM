let videoContainer = document.getElementById("video");


let data = JSON.parse(localStorage.getItem("videoData"));
console.log(data)

let videoID = data.id.videoId


async function showData(videoID) {
    let box = document.createElement("div");

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoID}`

    iframe.height = "400px";
    iframe.width = "60%"
    iframe.setAttribute("allowfullscreen", true)

    let title = document.createElement("p")
    title.innerText = data.snippet.title;

    let channel_title = document.createElement("p")
    channel_title.innerText = data.snippet.channelTitle;


    box.append(iframe, title, channel_title);
    videoContainer.append(box)

}

showData(videoID);