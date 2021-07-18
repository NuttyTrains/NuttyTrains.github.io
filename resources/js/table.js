function arrayToTable(tableData, Num) {
    var table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if (j<Num){
            row.append($('<td>'+cellData+'</td>'));
            }
            else{
            row.append($('<td>'+cellData.split("//").join('<br>')+'</td>'));
            }
        });
        table.append(row);
    });
    return table;
}

function tableLength(tableData, No1, No2) {
    No = tableData.length - 1
    return No1 + No + No2;
}

function getAjax(CSV, Div, Num, Div2, No1, No2) {
    $.ajax({
        type: "GET",
        url: CSV,
        success: function (data) {
            Table = Papa.parse(data).data
            $(Div).append(arrayToTable(Table, Num));
            $(Div2).append(tableLength(Table, No1, No2));
        }
    });
  }
