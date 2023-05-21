//Nhập số ==============================================
var arrList = [];

function getID(id) {
    return document.getElementById(id);
}

function hienKQ() {
    getID("result").style.display = "block";
}

getID("add").onclick = function addNum() {
    soNguyen = getID("nhapso").value;
    arrList.push(" " + soNguyen);
    getID("displaynum").innerHTML = "Mảng số nguyên: " + arrList;
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
    // console.log(arrList)
    arrList.splice(vitri1, 1, arrList.splice(vitri2, 1, arrList[vitri1]));

    hienKQ();
    getID("result").innerHTML = "Mảng sau khi đổi chỗ: " + arrList;
}

//7.Sắp xếp mảng ==============================================
getID("sapxep").onclick = function sapXep() {
    arrList.sort(function (a, b) {
        return a - b;
    });
    hienKQ();
    getID("result").innerHTML = "Mảng theo thứ tự tăng dần: " + arrList;
}

//8.Tìm số nguyên tố đầu tiên trong mảng ==============================================
getID("songuyento").onclick = function soNguyenTo() {
    for (var i = 0; i < arrList.length; i++) {
        var soNT;
        var count = 0;
        for (var j = 2; j <= arrList[i]; j++) {
            if (arrList[i] % j == 0) {
                count++;
            }
        }
        if (count != 1) {
            soNT = -1;
            getID("result").innerHTML = "Không có số nguyên tố: " + soNT;
        } else if (count == 1) {
            soNT = arrList[i];
            getID("result").innerHTML = "Số nguyên tố đầu tiên là: " + soNT;
            // console.log(arrList[i])
            // console.log(soNT)
            break;
        }
    }
    hienKQ();
}

//9.Nhập mảng số thực, tìm có bn số nguyên ==============================================
getID("showsothuc").onclick = function showSoThuc() {
    getID("boxsothuc1").classList.toggle("d-flex");
    getID("boxsothuc2").classList.toggle("d-block");
    getID("boxsothuc3").classList.toggle("d-flex");

}

var arrSoThuc = [];
getID("addsothuc").onclick = function addSoThuc() {
    soThuc = getID("nhapsothuc").value;
    arrSoThuc.push(" " + soThuc);
    getID("displaysothuc").innerHTML = "Mảng số thực: " + arrSoThuc;
}

// tìm có bn số nguyên =============================
getID("timsonguyen").onclick = function timSoNguyen() {
    var dem = 0;
    for (var i = 0; i < arrSoThuc.length; i++) {
        // console.log(i, Number.isInteger(Number(arrSoThuc[i])))
        if (Number.isInteger(Number(arrSoThuc[i])) == true) {
            dem++
        }
    }
    getID("result2").style.display = "block";
    getID("result2").innerHTML = "Có: " + dem + " số nguyên";
}

//10.So sánh số lượng số âm và số dương ==============================================
getID("sosanh").onclick = function soSanh() {
    var arrSoAm = []
    var arrSoDuong = []
    for (var i = 0; i < arrSoThuc.length; i++) {
        if (arrSoThuc[i] < 0) {
            arrSoAm.push(" " + arrSoThuc[i]);
        } else {
            arrSoDuong.push(" " + arrSoThuc[i]);
        }
    }
    if (arrSoAm.length < arrSoDuong.length) {
        getID("result2").innerHTML = "Số dương nhiều hơn số âm";

    } else if (arrSoAm.length > arrSoDuong.length) {
        getID("result2").innerHTML = "Số âm nhiều hơn số dương";

    } else {
        getID("result2").innerHTML = "Số dương bằng số âm";
    }
    getID("result2").style.display = "block";

}