//Nhập số ==============================================
var arrList = [];

function getID(id) {
    return document.getElementById(id);
}

function hienKQ() {
    getID("result").style.display = "block";
}

getID("add").onclick = function addNum() {
    soNhap = getID("nhapso").value;
    arrList.push(" " + soNhap);
    getID("displaynum").innerHTML = "Số của mảng: " + arrList;
}

//1.Tính tổng số dương ==============================================
getID("tinhtong").onclick = function tinhTong() {
    var tongSoDuong = 0;
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            var soDuong = Number(arrList[i]);
            tongSoDuong += soDuong;
        }
    }
    hienKQ();
    getID("result").innerHTML = "Tổng số dương: " + tongSoDuong;
}

//2.Đếm số dương ==============================================
getID("demsoduong").onclick = function demSoDuong() {
    var count = 0;
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            count++;
        }
    }
    hienKQ();
    getID("result").innerHTML = "Có " + count + " số dương";
}

//3.Số nhỏ nhất ==============================================
getID("sonhonhat").onclick = function soNhoNhat() {
    var soNhoNhat = Math.min.apply(Math, arrList);
    hienKQ();
    getID("result").innerHTML = "Số nhỏ nhất là: " + soNhoNhat;

}

//4.Số dương nhỏ nhất ==============================================
getID("soduongnhonhat").onclick = function soDuongNhoNhat() {
    var arrSoDuongNhoNhat = [];
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            var soDuong = arrList[i];
            arrSoDuongNhoNhat.push(soDuong);
        }
    }
    var soDuongNhoNhat = Math.min.apply(Math, arrSoDuongNhoNhat);
    // arrSoDuongNhoNhat.sort();
    hienKQ();
    getID("result").innerHTML = "Số dương nhỏ nhất là: " + soDuongNhoNhat;
}

//5.Số chẵn cuối cùng ==============================================
getID("sochancuoicung").onclick = function soChanCuoiCung() {
    var arrSoChan = [];
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] % 2 == 0) {
            var soChan = arrList[i]
            arrSoChan.push(soChan);
        }
    }
    if (arrSoChan.length > 0) {
        var soChanCuoiCung = arrSoChan[arrSoChan.length - 1];
        getID("result").innerHTML = "Số chẵn cuối cùng là: " + soChanCuoiCung;
    } else {
        soChanCuoiCung = -1;
        getID("result").innerHTML = "Không có số chẵn: " + soChanCuoiCung;
    }
    hienKQ();
}
//6.Đổi chỗ 2 số ==============================================
getID("showdoicho").onclick = function showDoiCho() {
    getID('boxdoi2so').classList.toggle('d-flex');
}
getID("doicho").onclick = function doiCho() {
    vitri1 = getID("vitri1").value;
    vitri2 = getID("vitri2").value;
    console.log(vitri1)
    console.log(vitri2)
    console.log(arrList)

    arrList.splice(vitri1,1,arrList.splice(vitri2,1,arrList[vitri1]));
    console.log(arrList)

    hienKQ();
    getID("result").innerHTML = "Mảng sau khi đổi chỗ: " + arrList ;
}

//7.Sắp xếp mảng ==============================================
getID("sapxep").onclick = function sapXep() {
    arrList.sort(function (a, b) {
        return a - b;
    });
    hienKQ();
    getID("result").innerHTML = "Mảng theo thứ tự tăng dần: " + arrList;

}




