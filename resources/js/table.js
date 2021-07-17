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

function getAjax(CSV, Div) {
    $.ajax({
        type: "GET",
        url: CSV,
        success: function (data) {
            $(Div).append(arrayToTable(Papa.parse(data).data));
        }
    });
  }
