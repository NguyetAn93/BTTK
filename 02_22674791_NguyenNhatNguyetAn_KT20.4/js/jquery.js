$(document).ready(function() {
    $("#dangky").click(function() {
        $("#bang").modal();
    });
    $("#vien").val("K16-123456789");
    $("#ten").val("Tran Anh Dung");
    $("#lop").val("DHKTPM16ATT");
    $("#so").val("0xxx-xxx-xxx");
    $("#mail").val("xxxxx@iuh.edu.vn");

    function validatevien() {
        let vien = $("#vien").val();
        let validatevien = /^K16\-\d{9}$/;
        if (vien === "") {
            $("loivien").html("bao loi");
            return false;
        } else {
            if (!validatevien.test(vien))
        }
    }
})