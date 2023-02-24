let mujeres = [
    "Ada Lovelace", "Marie Curie", "Juana de Arco", "Sor Juana Ines de la Cruz", "Rosalind Franklin"
    ];
    let hombres = [
    "Isaac Newton", "Gregor Mendel", "Charles Darwin", "Alan Turing", "Gottfried Leibniz"
    ];

    hombres.push("Charles Babbage", "Heisenberg", "Francis Crick");
    mujeres.push("Simone de Beauvoir", "Eleanor Roosevelt", "Hipatia de Alejandria");

    document.write("Hombres: "+hombres.length+". "+ "Nombres: "+hombres+"<br>");
    document.write("Mujeres: "+mujeres.length+". "+ "Nombres: "+mujeres+"<br><br>");

    mujeres.pop();
    hombres.pop();

    delete hombres[0];
    delete mujeres[0];

    document.write("Hombres: "+hombres.length+". "+ "Nombres: "+hombres+"<br>");
    document.write("Mujeres: "+mujeres.length+". "+ "Nombres: "+mujeres+"<br><br>");

    let concat = hombres.concat(mujeres);

    document.write(concat+"<br><br>");
    
    document.write(hombres.join("::"),"<br>");
    document.write(mujeres.join("::"),"<br><br>");

    let ordenarH=hombres.sort();
    let ordenarM=mujeres.sort();

    document.write(ordenarH+"<br>");
    document.write(ordenarM+"<br><br>");

    let reversoH=hombres.reverse();
    let reversoM=mujeres.reverse();

    document.write(reversoH+"<br>");
    document.write(reversoM);





    
