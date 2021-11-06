var service = new ProductService();
function getListProduct(){
    service.getListProductApi().then(function(result){
        renderData(result.data);
    })
    .catch(function(error){
        console.log(error);
    });
}
getListProduct();
function getID(id){
    return document.getElementById(id);
}
function renderData(data){
    var content = "";
    data.forEach(function(item){
        content += `
        <tr>
        <td>${item.id}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td><img src="../../assets/img/${item.hinhAnh}" height = "50%" width = "50%" alt="..."></td>
        <td>${item.moTa}</td>
        </tr>
        `
    });
    getID("tblDanhSachSP").innerHTML = content;
}