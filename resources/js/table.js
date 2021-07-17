function CSVTable(csv, div){
    var divtable = document.getElementById(div);
        var lines = csv.split("\n"), output = [], i;

        output.push("<tr><th>" 
            + lines[0].slice().split(",").join("</th><th>") 
            + "</th></tr>");

        for (i = 1; i < lines.length; i++)
            output.push("<tr><td>" 
                + lines[i].slice().split(",").join("</td><td>") 
                + "</td></tr>");

        output = "<table><tbody>" 
                    + output.join("") + "</tbody></table>";

        divtable.innerHTML = output;}
    