function ProductService(){
    this.getListProductApi = function(){
        // lay danh sach sp tu server 
        /**
         * axios tra ve dtuong Promise
         * - pending: chờ
         * - resolve : thành công
         * - reject: thất bại
         */

        return axios({
            url: "https://6183cb0191d76c00172d1b6b.mockapi.io/api/products",
            method: "GET",
        })
    };
}