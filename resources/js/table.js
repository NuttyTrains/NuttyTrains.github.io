function CSVTable(csv, div){
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

        div.innerHTML = output;}



function CSVTable2(csv) {
    var TableLines = csv.split(/\r\n|\n/);
    var headers = TableLines[0].split(',');
    var lines = [];

    for (var i=1; i<TableLines.length; i++) {
        var data = TableLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
}
    
function arrayToTable(tableData) {
    var table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            row.append($('<td>'+cellData+'</td>'));
        });
        table.append(row);
    });
    return table;
}