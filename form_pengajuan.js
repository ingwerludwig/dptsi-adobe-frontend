function showJurusan(fakultas,jurusan){
    var fakultas = document.getElementById(fakultas);
    var jurusan = document.getElementById(jurusan);

    jurusan.innerHTML = "";
    if(fakultas.value == "SCIENTICS"){
        var optionArray = ["|","fisika|FISIKA","matematika|MATEMATIKA","statistika|STATISTIKA","kimia|KIMIA","biologi|BIOLOGI","aktuaria|AKTUARIA"];
    }
    else if(fakultas.value == "MARTECH"){
        var optionArray = ["|","teknik perkapalan|TEKNIK PERKAPALAN","teknik sistem perkapalan|TEKNIK SISTEM PERKAPALAN","teknik kelautan|TEKNIK KELAUTAN","teknik transportasi laut|TEKNIK TRANSPORTASI LAUT"];
    }
    else if(fakultas.value == "INDSYS"){
        var optionArray = ["|","teknik mesin|TEKNIK MESIN","teknik kimia|TEKNIK KIMIA","teknik fisika|TEKNIK FISIKA","teknik sistem dan industri|TEKNIK SISTEM DAN INDUSTRI","teknik material|TEKNIK MATERIAL"];
    }
    else if(fakultas.value == "ELECTICS"){
        var optionArray = ["|","teknik elektro|TEKNIK ELEKTRO","teknik biomedik|TEKNIK BIOMEDIK","teknik komputer|TEKNIK KOMPUTER","teknik informatika|TEKNIK INFORMATIKA","sistem informasi|SISTEM INFORMASI","teknologi informasi|TEKNOLOGI INFORMASI"];
    }
    else if(fakultas.value == "CIVPLAN"){
        var optionArray = ["|","teknik sipil|TEKNIK SIPIL","arsitektur|ARSITEKTUR","teknik lingkungan|TEKNIK LINGKUNGAN","perencanaan wilayan dan kota|PERENCANAAN WILAYAH DAN KOTA","teknik geomatika|TEKNIK GEOMATIKA","teknik geofisika|TEKNIK GEOFISIKA"];
    }
    else if(fakultas.value == "CREABIZ"){
        var optionArray = ["|","desain produk industri|DESAIN PRODUK INDUSTRI","desain interior|DESAIN INTERIOR","desain komunikasi visual|DESAIN KOMUNIKASI VISUAL","manajemen bisnis|MANAJEMEN BISNIS","studi pembangunan|STUDI PEMBANGUNAN","manajemen teknologi|MANAJEMEN TEKNOLOGI"];
    }
    else if(fakultas.value == "VOCATIONS"){
        var optionArray = ["|","teknik infrastruktur sipil|TEKNIK INFRASTRUKTUR SIPIL","teknik mesin industri|TEKNIK MESIN INDUSTRI","teknik elektro otomasi|TEKNIK ELEKTRO OTOMASI","teknik kimia industri|TEKNIK KIMIA INDUSTRI","teknik instrumentasi|TEKNIK INSTRUMENTASI","statistika bisnis|STATISTIKA BISNIS"];
    }
    else if(fakultas.value == "NON FAKULTAS"){
        var optionArray = ["|","dosen|DOSEN","staff|STAFF"];
    }
    

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        jurusan.options.add(newOption);
    }
    
}