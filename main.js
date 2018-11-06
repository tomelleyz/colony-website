var load;

function Loader() {
    load = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}
function openMenu() {
    document.getElementById("sidenav").style.width = "250px";
}
function closeMenu() {
    document.getElementById("sidenav").style.width = "0";
}