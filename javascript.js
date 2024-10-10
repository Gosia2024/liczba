function sprawdz(){
    let liczba = document.getElementById("pole").value;
    document.getElementById("pole").value= "";

    if(liczba === "") document.getElementById("wynik").innerHTML ="to nie jest liczba";
    else if(liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
    else if(liczba<0) document.getElementById("wynik").innerHTML="ujemna";
    else if(liczba==0) document.getElementById("wynik").innerHTML="zero";

    else document.getElementById("wynik").innerHTML = "to nie jest liczba You konw nothing John Snow"

    
} 
