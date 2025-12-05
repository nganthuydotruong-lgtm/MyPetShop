// Khởi tạo danh sách sản phẩm
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [
            {
                id: 1,
                status: 1, 
                title: 'Hạt Today Dinner dành cho chó trưởng thành',
                img: './assets/image/products/Today Dinner.webp',
                category: 'Đồ ăn khô cho chó',
                price: 300000,
                desc: 'Hạt thức ăn Today Dinner được nghiên cứu dựa trên công thức cân bằng giá trị dinh dưỡng giúp duy trì chế độ ăn lành mạnh cho thú cưng.'
            },
            {
                id: 2,
                status: 1, 
                title: 'Hạt Today Dinner dành cho chó con',
                img: './assets/image/products/Today Dinner-1.webp',
                category: 'Đồ ăn khô cho chó',
                price: 290000,
                desc: 'Công thức định lượng các chất theo tỷ lệ phù hợp, để mỗi bữa ăn của cún luôn "đầy đủ và cân bằng" chất dinh dưỡng.'
            },
            {
                id: 3,
                status: 1, 
                title: 'Hạt Keos+ hỗ trợ tiêu hóa cho chó, vị thịt cừu&gạo',
                img: './assets/image/products/keos+.png',
                category: 'Đồ ăn khô cho chó',
                price: 35000,
                desc: 'Các bé cún rất thường gặp phải vấn đề về tiêu hóa nên việc bổ sung dinh dưỡng hợp lý để giúp các bé có một hệ tiêu hóa khỏe mạnh. Vì vậy, với công thức Natural Shield, Keos+ sẽ giúp cải thiện hệ tiêu hóa, chất lượng phân và sức khỏe ổn định lâu dài cho bé cún.'
            },
            {
                id: 4,
                status: 1, 
                title: 'Hạt Keos+ cho chó trưởng thành, vị gà&rau củ.',
                img: './assets/image/products/keos+-1.png',
                category: 'Đồ ăn khô cho chó',
                price: 35000,
                desc: 'Keos+ vị gà&rau củ giúp giảm mùi hôi phân nhờ chiết xuất cây Yucca, dễ hấp thu dinh dưỡng và tiêu hóa. Bổ sung omega 3,6 giúp lông bóng mượt đồng thời răng cũng ít xuất hiện mảng bám.'
            },
            {
                id: 5,
                status: 1, 
                title: 'Hạt Keos+ cho chó con, vị sữa, gà&trứng',
                img: './assets/image/products/keos+-2.png',
                category: 'Đồ ăn khô cho chó',
                price: 35000,
                desc: 'Vị sữa, gà&trứng dành cho chó con bổ sung DHA&Choline giúp phát triển trí não, tăng cường miễn dịch với các loại vitamin. Bổ sung omega 3,6 giúp lông bóng mượt đồng thời răng ít xuất hiện mảng bám.'
            },
            {
                id: 6,
                status: 1, 
                title: 'Hạt Pedigree cho chó con 2.7kg, vị gà, trứng&sữa',
                img: './assets/image/products/pedigree-1.png',
                category: 'Đồ ăn khô cho chó',
                price: 210000,
                desc: 'Tăng cường phát triển não bộ, Pedigree cho chó con chứa các chất dinh dưỡng quan trọng như DHA, chất xơ và canxi giúp phát triển tối ưu trí não của bé cún ngoài ra hạt Pedigree còn chứa chất xơ hỗ trợ hệ tiêu hóa và sức khỏe tổng thể cho bé. Tăng cường sức khỏe răng&xương, nuôi dưỡng da khỏe&lông bóng mượt.'
            },
            {
                id: 7,
                status: 1, 
                title: 'Thức ăn Pedigree cho các bé trưởng thành giống mini 1.3kg, vị bò, cừu&rau củ',
                img: './assets/image/products/pedigree-2.png',
                category: 'Đồ ăn khô cho chó',
                price: 103000,
                desc: 'Giàu protein chất lượng cao, bổ sung omega 6&kẽm, chất xơ tự nhiên giúp hệ tiêu hóa khỏe mạnh.'
            },
            {
                id: 8,
                status: 1, 
                title: 'Thức ăn cho chó lớn SmartHeart vị bò nướng gói 3kg',
                img: './assets/image/products/smartheart.png',
                category: 'Đồ ăn khô cho chó',
                price: 180000,
                desc: 'Kích thước hạt nhỏ phù hợp với lực cắn của cún, giảm gây tổn hại cho răng, vitamin E và selenium tăng cường miễn dịch. Hàm lượng omega-3&6 cân bằng giúp trái tim khỏe mạnh và da lông khỏe đẹp.'
            },
            {
                id: 9,
                status: 1, 
                title: 'Thức ăn cho chó SmartHeart vị bò&sữa gói 1.3kg',
                img: './assets/image/products/smartheart-1.png',
                category: 'Đồ ăn khô cho chó',
                price: 110000,
                desc: 'Hàm lượng đạm 26% giúp cún phát triển toàn diện, canxi&photpho cân bằng nhanh chóng phát triển khung xương cho cún. Vitamin E và selenium tăng cường miễn dịch. Hàm lượng omega-3&6 dồi dào từ dầu cá giúp trái tim khỏe mạnh.'
            },
            {
                id: 10,
                status: 1, 
                title: 'Pate cho chó MONGE vị thịt cá hồi hộp 400gr',
                img: './assets/image/products/pate.png',
                category: 'Đồ ăn vặt&Pate',
                price: 50000,
                desc: 'Pate Monge cho chó Bwild Grain Free Formula là thức ăn cho chó hoàn chỉnh và cân bằng dành cho chó trưởng thành. Được phát triển đặc biệt để chăm sóc sức khỏe cho những chú chó của bạn thông qua tuyển chọn các nguồn carbohydrate phái sinh phi ngũ cốc thay thế như bí xanh và bí ngô...'
            },
            // ... (các sản phẩm từ 11 đến 18 giữ nguyên, mình rút gọn để dễ đọc)

            {
                id: 19,
                status: 1, 
                title: 'Thức ăn cho mèo con Whiskas vị gà dạng sốt túi 70g',
                img: './assets/image/products/whiskas-3.png',
                category: 'Đồ ăn ướt cho mèo',
                price: 12000,  // SỬA: trước là 400000 → vô lý!
                desc: 'Thức ăn dạng sốt cho mèo WHISKAS là nguồn dinh dưỡng cân bằng và hoàn thiện dành cho mèo con, đảm bảo tối ưu sức khỏe và tinh thần cho chúng...'
            },
            // ... tiếp tục đến id 20-29

            {
                id: 30,
                status: 1, 
                title: 'Cây thịt bò cho chó 500g - Snack dẻo thịt tươi tự nhiên, thơm ngon',
                img: './assets/image/products/cây_thịt_bò.png',  // SỬA đường dẫn (trước thiếu image)
                category: 'Đồ ăn vặt&Pate',
                price: 50000,
                desc: 'Thành phần 100% thịt bò tươi không chất bảo quản, không phẩm màu độc hại. Thịt dẻo dài, thơm lừng, giúp kích thích vị giác của boss, hỗ trợ làm sạch răng...'
            },
            // ... các sản phẩm còn lại giữ nguyên cấu trúc đúng
            {
                id: 36,
                status: 1,
                title: 'Túi du lịch đựng hamster, chuột lang',
                img: './assets/image/products/túi.png',
                category: 'Phụ kiện',
                price: 200000,
                desc: 'Túi đựng động vật nhỏ đi du lịch: Túi đựng chuột lang này thích hợp cho các vật nuôi nhỏ như chuột đồng, chuột lang, thỏ, vẹt, v.v...'
            }
        ];

        localStorage.setItem('products', JSON.stringify(products));
        console.log('Đã tạo danh sách sản phẩm!');
    }
}

// Tạo tài khoản admin
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Trương Đỗ Thùy Ngân",
            phone: "thuyngan",
            password: "14092311",
            email: 'nganthuydotruong@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1  // 1 = admin
        });
        localStorage.setItem('accounts', JSON.stringify(accounts));
        console.log('Đã tạo tài khoản admin!');
    }
}

// SỬA LỖI LỚN NHẤT: Gọi cả 2 hàm khi trang load
window.onload = function() {
    createProduct();
    createAdminAccount();
};