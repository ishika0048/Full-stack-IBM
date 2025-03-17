let parent = document.getElementById("parent");

async function getData() {
    try {
        let response = await fetch(`http://localhost:3000/posts`);
        let data = await response.json();
        showData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function showData(arr) {
    parent.innerHTML = "";
    arr.forEach((el) => {
        let box = document.createElement("div");
        box.className = "box";

        let title = document.createElement("p");
        title.innerText = el.title;

        let views = document.createElement("p");
        views.innerText = el.views;

        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.style.backgroundColor = "yellow";
        updateBtn.style.color = "white";
        updateBtn.style.border = "none";
        updateBtn.style.padding = "8px";
        updateBtn.style.margin = "5px";
        updateBtn.style.cursor = "pointer";

        updateBtn.addEventListener("click", async () => {
            let newTitle = prompt("Enter new title:", el.title);
            if (newTitle && newTitle.trim()) {
                await updateData(el.id, newTitle.trim());
            }
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.backgroundColor = "blue";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "8px";
        deleteBtn.style.cursor = "pointer";

        deleteBtn.addEventListener("click", async () => {
            await deleteData(el.id);
        });

        box.append(title, views, updateBtn, deleteBtn);
        parent.append(box);
    });
}

async function deleteData(id) {
    try {
        let response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Data deleted successfully");
            getData();
        } else {
            console.error("Error deleting data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updateData(id, newTitle) {
    try {
        let response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title: newTitle }),
        });

        if (response.ok) {
            alert("Data updated successfully");
            getData();
        } else {
            console.error("Error updating data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById("btn").addEventListener("click", async () => {
    let value = document.getElementById("input").value.trim();
    if (!value) {
        alert("Title cannot be empty");
        return;
    }

    let obj = {
        title: value,
        views: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    };

    try {
        let response = await fetch(`http://localhost:3000/posts`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            alert("Data saved successfully");
            getData();
        }
    } catch (error) {
        console.error("Error saving data:", error);
    }
});

getData();