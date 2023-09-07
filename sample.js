window.addEventListener("load", () => {
    document.getElementById("colorButton").addEventListener("click", changeColor);

    function changeColor(id){
        let root = document.documentElement; //change CSS local vars
        let button = document.getElementsByClassName("fa-solid"); //change css display button

        for (let i = 0; i < button.length; i++) { //return {list} of classes thus loop
            // Dark -> Light
            if (button[i].classList.contains("fa-sun")) {
                root.style.setProperty('--colorMain', "#8AAAE5");
                root.style.setProperty('--colorSecondary', "#FFFFFF");
                root.style.setProperty('--colorComplement', "#ac2655");
                let icons = document.getElementsByTagName("i");
                for (let i = 0; i < icons.length; i++) { // loop through all i elements
                    icons[i].className = "fa-solid fa-moon fa-lg";
                }
            }
            // Light -> Dark
            else if (button[i].classList.contains("fa-moon")) {
                root.style.setProperty('--colorMain', "#000000");
                root.style.setProperty('--colorSecondary', "#4af626");
                root.style.setProperty('--colorComplement', "#D226F6");
                let icons = document.getElementsByTagName("i");
                for (let i = 0; i < icons.length; i++) { // loop through all i elements
                    icons[i].className = "fa-solid fa-sun fa-lg";
                }
            }
        }
    }
});