// Funções para abrir e fechar o menu lateral
function OpenNav(){
        document.getElementById("sidebar").style.left = "0px";
        document.getElementById("controllCloseSideBar").style.display = "block";
}
function CloseNav(){
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("controllCloseSideBar").style.display = "none";
}