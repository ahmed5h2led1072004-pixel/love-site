function login() {
    const password = document.getElementById("password").value;
    const correctPassword = "972025"; // غير الباسورد هنا ❤️

    if (password === correctPassword) {
        window.location.href = "memories.html";
    } else {
        document.getElementById("error").innerText =
            "الباسورد غلط.. جرب تاني يا قلبي 😅";
    }
}