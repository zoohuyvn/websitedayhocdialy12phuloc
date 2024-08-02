const questions = [
    [
        {
            id: 1,
            question: 'Các nước Đông Nam Á không có chung đường biên giới với nước ta trên biển là',
            answers: [
                'Phi-lip-pin, Mi-an-ma',
                'Phi-lip-pin, Bru-nây',
                'Đông-ti-mo, Mi-an-ma',
                'Ma-lai-xi-a, Phi-lip-pin'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 2,
            question: 'Việt Nam gắn liền với lục địa và đại dương nào sau đây?',
            answers: [
                'Á-Âu và Bắc Băng Dương',
                'Á- Âu và Đại Tây Dương',
                'Á-Âu và Ấn Độ Dương',
                'Á-Âu và Thái Bình Dương'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 3,
            question: 'Theo Công ước của Liên hợp quốc về Luật Biển năm 1982, nhà nước ta có chủ quyền gì ở vùng đặc quyền kinh tế?',
            answers: [
                'Hoàn toàn về kinh tế',
                'Một phần về kinh tế',
                'Không có chủ quyền gì',
                'Hoàn toàn về chính trị'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 4,
            question: 'Hệ tọa độ địa lí trên đất liền nước ta là',
            answers: [
                '23020\'B - 8030\'B và 102009\'Đ - 109024\'Đ',
                '23023\'B - 8030\'B và 102009\'Đ - 109024\'Đ',
                '23023\'B - 8034\'B và 102009\'Đ - 109024\'Đ',
                '23023\'B - 8034\'B và 102009\'Đ - 109020\'Đ'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 5,
            question: 'Tính chất nhiệt đới của khí hậu nước ta được quy định bởi',
            answers: [
                'Vị trí trong vùng nội chí tuyến',
                'Địa hình nước ta thấp dần ra biển',
                'Hoạt động của gió phơn Tây Nam',
                'Địa hình nước ta nhiều đồi núi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 6,
            question: 'Vùng biển mà nước ta có quyền thực hiện các biện pháp an ninh quốc phòng, kiểm soát thuế quan, các quy định về y tế, môi trường nhập cư là vùng',
            answers: [
                'Lãnh hải',
                'Tiếp giáp lãnh hải',
                'Đặc quyền về kinh tế',
                'Thềm lục địa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 7,
            question: 'Lãnh hải của nước ta là',
            answers: [
                'Vùng nước tiếp giáp với đất liền, ở phía trong đường cơ sở',
                'Vùng biển thuộc chủ quyền quốc gia trên biển rộng 12 hải lí',
                'Vùng biển có chiều rộng 200 hải lí tính từ đường cơ sở',
                'Vùng biển rộng 24 hải lí tính từ đường cơ sở'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 8,
            question: 'Phần ngầm dưới biển và lòng đất dưới đáy biển thuộc phần lục địa kéo dài, mở rộng ra ngoài lãnh hải cho đến bờ ngoài của rìa lục địa, có độ sâu khoảng 200m hoặc hơn nữa là',
            answers: [
                'Thềm lục địa',
                'Tiếp giáp lãnh hải',
                'Lãnh hải',
                'Đặc quyền kinh tế'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 9,
            question: 'Hai vịnh biển có diện tích lớn nhất nước ta là',
            answers: [
                'Vịnh Bắc Bộ và vịnh Thái Lan',
                'Vịnh Bắc Bộ và vịnh Nha Trang',
                'Vịnh Thái Lan và vịnh Vân Phong',
                'Vịnh Bắc Bộ và vịnh Vân Phong'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 10,
            question: 'Vùng biển có chiều rộng 200 hải lí tính từ đường cơ sở ra phía biển của nước ta là vùng',
            answers: [
                'Lãnh hải',
                'Đặc quyền kinh tế',
                'Thềm lục địa',
                'Tiếp giáp lãnh hải'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 11,
            question: 'Phía tây nước ta tiếp giáp với những quốc gia nào sau đây?',
            answers: [
                'Lào và Thái Lan',
                'Campuchia và Trung Quốc',
                'Lào và Campuchia',
                'Lào và Trung Quốc'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 12,
            question: 'Vùng biển của nước ta không tiếp giáp với vùng biển của quốc gia nào sau đây?',
            answers: [
                'Trung Quốc',
                'Campuchia',
                'Thái Lan',
                'Mianma'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 13,
            question: 'Vùng nước nằm trong đường  cơ sở được gọi là vùng',
            answers: [
                'Lãnh hải',
                'Nội thủy',
                'Đặc quyền kinh tế',
                'Tiếp giáp lãnh hải'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 14,
            question: 'Huyện đảo nằm cách xa đất liền nhất của nước ta là',
            answers: [
                'Hoàng Sa',
                'Phú Quốc',
                'Phú Quý',
                'Trường Sa'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 15,
            question: 'Tỉnh nào sau đây của nước ta có hai huyện đảo?',
            answers: [
                'Quảng Trị',
                'Quảng Ninh',
                'Quảng Ngãi',
                'Bình Thuận'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 16,
            question: 'Vùng đất Việt Nam gồm toàn bộ phần đất liền và các',
            answers: [
                'Hải đảo',
                'Đảo ven vờ',
                'Đảo xa bờ',
                'Quần đảo'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 17,
            question: 'Phát biểu nào sau đây không đúng về vị trí địa lí của nước ta?',
            answers: [
                'Ở trung tâm bán đảo Đông Dương',
                'Trong vùng nhiệt đới bán cầu Bắc',
                'Tiếp giáp với Biển Đông',
                'Trong vùng nhiều thiên tai'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 18,
            question: 'Đường biên giới trên đất liền của nước ta phần lớn nằm ở',
            answers: [
                'Khu vực miền núi',
                'Khu vực đồng bằng',
                'Khu vực cao nguyên',
                'Khu vực trung du'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 19,
            question: 'Nơi có thềm lục địa hẹp nhất nước ta thuộc vùng biển của khu vực',
            answers: [
                'Bắc Bộ',
                'Bắc Trung Bộ',
                'Nam Trung Bộ',
                'Nam Bộ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 20,
            question: 'Nhận định đúng về đặc điểm địa hình vùng thềm lục địa nước ta là',
            answers: [
                'Thu hẹp ở phía Bắc, mở rộng ở miền Trung và phía Nam',
                'Mở rộng ở phía Bắc, thu hẹp ở miền Trung và phía Nam',
                'Mở rộng ở phía Bắc và phía Nam, thu hẹp ở miền Trung',
                'Thu hẹp ở phía Bắc và phía Nam, mở rộng ở miền Trung'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 21,
            question: 'Căn cứ vào At lát Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây giáp Lào?',
            answers: [
                'Phú Thọ',
                'Hà Tĩnh',
                'Bình Dương',
                'Cao Bằng'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 22,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5,  cho biết tỉnh nào sau đây không giáp Lào?',
            answers: [
                'Kon Tum',
                'Sơn La',
                'Điện Biên',
                'Gia Lai'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 23,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây nằm trên đường biên giới giữa Việt Nam - Trung Quốc?',
            answers: [
                'Sơn La',
                'Thanh Hóa',
                'Quảng Bình',
                'Lào Cai'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 24,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5,  cho biết điểm cực Nam trên đất liền của nước ta thuộc tỉnh nào sau đây?',
            answers: [
                'Cà Mau',
                'Sóc Trăng',
                'Kiên Giang',
                'An Giang'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 25,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4-5,cho biết tỉnh nào sau đây của nước ta giáp với Campuchia cả trên đất liền và trên biển?',
            answers: [
                'Kiên Giang',
                'An Giang',
                'Đồng Tháp',
                'Cà Mau'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 26,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết quần đảo Hoàng Sa thuộc tỉnh, thành phố nào sau đây?',
            answers: [
                'Bà Rịa-Vũng Tàu',
                'Quảng Nam',
                'Khánh Hòa',
                'Đà Nẵng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 27,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây giáp Trung Quốc?',
            answers: [
                'Yên Bái',
                'Phú Thọ',
                'Hoà Bình',
                'Lào Cai'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 28,
            question: 'Căn cứ vào At lát Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây vừa giáp biển vừa giáp Trung Quốc?',
            answers: [
                'Hải Phòng',
                'Lạng Sơn',
                'Quảng Ninh',
                'Thái Bình'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 29,
            question: 'Căn cứ Atlat Địa lí Việt Nam trang 4 - 5, cho biết có bao nhiêu tỉnh (thành phố) của nước ta giáp Lào?',
            answers: [
                '9',
                '11',
                '10',
                '12'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 30,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây giáp biển?',
            answers: [
                'Hà Giang',
                'Điện Biên',
                'Gia Lai',
                'Cà Mau'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 31,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây giáp Campuchia?',
            answers: [
                'Lâm Đồng',
                'Ninh Thuận',
                'Bình Phước',
                'Bình Thuận'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 32,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây giáp Trung Quốc?',
            answers: [
                'Phú Thọ',
                'Lai Châu',
                'Yên Bái',
                'Sơn La'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 33,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết tỉnh nào sau đây vừa giáp Trung Quốc, vừa giáp Lào?',
            answers: [
                'Điện Biên',
                'Lào Cai',
                'Sơn La',
                'Lai Châu'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 34,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết điểm cực Tây phần đất liền của nước ta thuộc tỉnh nào sau đây?',
            answers: [
                'Khánh Hòa',
                'Cà Mau',
                'Hà Giang',
                'Điện Biên'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 35,
            question: 'Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5,  cho biết quần đảo Trường Sa thuộc tỉnh, thành phố nào?',
            answers: [
                'Khánh Hòa',
                'Bình Thuận',
                'Ninh Thuận',
                'Bà Rịa - Vũng Tàu'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 36,
            question: 'Đường biên giới trên biển và trên đất liền của nước ta dài gặp khó khăn lớn nhất về',
            answers: [
                'Thu hút đầu tư nước ngoài',
                'Bảo vệ chủ quyền lãnh thổ',
                'Thiếu nguồn lao động',
                'Phát triển nền văn hóa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 37,
            question: 'Ý nghĩa kinh tế của vị trí địa lý nước ta là',
            answers: [
                'Tự nhiên phân hóa đa dạng giữa Bắc - Nam, Đông - Tây',
                'Nguồn tài nguyên sinh vật và khoáng sản vô cùng giàu có',
                'Thuận lợi giao lưu với các nước trong khu vực và thế giới',
                'Thuận lợi để xây dựng nền văn hóa tương đồng với khu vực'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 38,
            question: 'Sự đa dạng về bản sắc dân tộc của nước ta là do vị trí',
            answers: [
                'Có sự gặp gỡ nhiều nền văn minh lớn với văn minh bản địa',
                'Diễn ra những hoạt động kinh tế sôi động',
                'Nằm trên ngã tư đường hàng hải và hàng không quốc tế lớn',
                'Liền kề của hai vành đai sinh khoáng lớn'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 39,
            question: 'Sự phân hóa đa dạng của tự nhiên và hình thành các vùng tự nhiên khác nhau ở nước ta chủ yếu do',
            answers: [
                'Khí hậu và sông ngòi',
                'Vị trí địa lí và hình thể',
                'Khoáng sản và biển',
                'Gió mùa và dòng biển'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 40,
            question: 'Trong các vùng biển sau đây, vùng nào có diện tích lớn nhất?',
            answers: [
                'Nội thủy',
                'Lãnh hải',
                'Tiếp giáp lãnh hải',
                'Đặc quyền kinh tế'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        }
    ],
    [
        {
            id: 1,
            question: 'Loại gió thổi quanh năm ở nước ta là',
            answers: [
                'Tây ôn đới',
                'Tín phong',
                'Gió phơn',
                'Gió mùa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 2,
            question: 'Do tác động của gió mùa Đông Bắc nên nửa đầu mùa đông ở miền Bắc nước ta thường có kiểu thời tiết',
            answers: [
                'Lạnh, ẩm',
                'Ấm, ẩm',
                'Lạnh, khô',
                'Ấm, khô'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 3,
            question: 'Nhịp điệu dòng chảy của sông ngòi nước ta theo sát',
            answers: [
                'Hướng các dòng sông',
                'Hướng các dãy núi',
                'Chế độ nhiệt',
                'Chế độ mưa'
            ],
            correct: 4,
            explain: 'GIAI_THICH'
        },
        {
            id: 4,
            question: 'Hệ quả của quá trình xâm thực mạnh ở khu vực đồi núi nước ta là quá trình',
            answers: [
                'Phong hóa',
                'Bồi tụ',
                'Bóc mòn',
                'Rửa trôi'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 5,
            question: 'Gió mùa mùa hạ hoạt động ở đồng bằng Bắc Bộ có hướng chủ yếu là',
            answers: [
                'Tây nam',
                'Đông nam',
                'Đông bắc',
                'Tây bắc'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 6,
            question: 'Gió mùa đông bắc xuất phát từ',
            answers: [
                'Biển Đông',
                'Ấn Độ Dương',
                'Áp cao Xibia',
                'Vùng núi cao'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 7,
            question: 'Gió mùa đông bắc thổi vào nước ta theo hướng',
            answers: [
                'Tây bắc',
                'Đông bắc',
                'Đông nam',
                'Tây nam'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 8,
            question: 'Tính chất của gió mùa mùa hạ là',
            answers: [
                'Nóng, khô',
                'Nóng, ẩm',
                'Lạnh, ẩm',
                'Lạnh, khô'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 9,
            question: 'Gió mùa đông bắc tạo nên một mùa đông lạnh ở',
            answers: [
                'Miền Trung',
                'Miền Bắc',
                'Miền Nam',
                'Tây Nguyên'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 10,
            question: 'Gió mùa đông bắc gần như bị chặn lại ở dãy núi nào sau đây?',
            answers: [
                'Tam Điệp',
                'Hoành Sơn',
                'Bạch Mã',
                'Hoàng Liên Sơn'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 11,
            question: 'Gió mùa mùa hạ hoạt động ở nước ta vào thời gian nào sau đây?',
            answers: [
                'Tháng 6 đến 10',
                'Tháng 8 đến 10',
                'Tháng 1 đến 12',
                'Tháng 5 đến 10'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 12,
            question: 'Quá trình chính trong sự hình thành và biến đổi địa hình hiện tại của nước ta là',
            answers: [
                'Xâm thực - bồi tụ',
                'Xâm thực',
                'Bồi tụ',
                'Bồi tụ - xói mòn'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 13,
            question: 'Nơi có sự bào mòn, rửa trôi đất đai mạnh nhất là',
            answers: [
                'Đồng bằng',
                'Miền núi',
                'Ô trũng',
                'Ven biển'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 14,
            question: 'Loại đất chiếm diện tích lớn nhất ở nước ta là',
            answers: [
                'Đất xám bạc màu',
                'Đất mùn thô',
                'Đất phù sa',
                'Đất feralit'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 15,
            question: 'Nước ta có khoảng bao nhiêu con sông dài trên 10km?',
            answers: [
                '2360',
                '2620',
                '3260',
                '3630'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 16,
            question: 'Quá trình chính trong sự hình thành và biến đổi địa hình vùng ven biển nước ta là',
            answers: [
                'Mài mòn - bồi tụ',
                'Xâm thực - thổi mòn',
                'Xâm thực - bồi tụ',
                'Bồi tụ - xói mòn'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 17,
            question: 'Phát biểu nào sau đây không đúng với khí hậu Việt Nam?',
            answers: [
                'Khí hậu có sự phân hoá đa dạng',
                'Khí hậu mang tính chất nhiệt đới',
                'Mùa đông lạnh kéo dài 2 - 3 tháng',
                'Chịu tác động sâu sắc của gió mùa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 18,
            question: 'Tính chất nhiệt đới của khí hậu nước ta được quyết định bởi',
            answers: [
                'Ảnh hưởng của biển Đông rộng lớn',
                'Ảnh hưởng sâu sắc hoàn lưu gió mùa',
                'Vị trí nằm trong vùng nội chí tuyến',
                'Chuyển động biểu kiến của Mặt Trời'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 19,
            question: 'Đất feralit ở nước ta có màu đỏ vàng chủ yếu do',
            answers: [
                'Quá trình tích tụ mùn mạnh',
                'Rửa trôi các chất badơ dễ tan',
                'Tích tụ ôxit sắt và ôxit nhôm',
                'Quá trình phong hóa mạnh mẽ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 20,
            question: 'Phát biểu nào sau đây là biểu hiện của thiên nhiên nhiệt đới ẩm gió mùa ở nước ta?',
            answers: [
                'Cán cân bức xạ quanh năm âm',
                'Sinh vật cận nhiệt đới chiếm ưu thế',
                'Xâm thực mạnh ở miền đồi núi',
                'Chế độ nước sông không phân mùa'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 21,
            question: 'Hệ sinh thái rừng nguyên sinh đặc trưng cho khí hậu nóng ẩm của nước ta là',
            answers: [
                'Rừng thưa nhiệt đới khô rụng lá theo mùa',
                'Rừng nhiệt đới gió mùa nửa rụng lá',
                'Rừng rậm nhiệt đới ẩm lá rộng thường xanh',
                'Rừng nhiệt đới gió mùa thường xanh'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 22,
            question: 'Đất feralit ở nước ta thường bị chua vì nguyên nhân chủ yếu nào sau đây?',
            answers: [
                'Quá trình phong hóa diễn ra mạnh',
                'Tích tụ ôxít sắt Fe2O3',
                'Mưa nhiều, rửa trôi các chất badơ',
                'Tích tụ ôxít nhôm Al2O3'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 23,
            question: 'Vào mùa đông, gió mùa Đông Bắc ở miền Bắc nước ta thổi xen kẽ với',
            answers: [
                'Gió Tây ôn đới',
                'Tín phong bán cầu Bắc',
                'Phơn Tây Nam',
                'Tín phong bán cầu Nam'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 24,
            question: 'Sông ngòi nước ta có chế độ nước theo mùa là do',
            answers: [
                'Chế độ mưa mùa',
                'Hoạt động của dải hội tụ nhiệt đới',
                'Hoạt động của bão',
                'Sự đa dạng của hệ thống sông ngòi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 25,
            question: 'Gió nào sau đây gây mưa phùn ở vùng ven biển và các đồng bằng Bắc Bộ, Bắc Trung Bộ?',
            answers: [
                'Gió mùa Đông Bắc',
                'Tín phong bán cầu Bắc',
                'Gió phơn Tây Nam',
                'Tín phong bán cầu Nam'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 26,
            question: 'Gió mùa đông bắc hoạt động vào thời gian nào sau đây?',
            answers: [
                'Thu - đông',
                'Tháng 5 đến tháng 10',
                'Tháng 11 đến tháng 4',
                'Mùa đông'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 27,
            question: 'Vào đầu mùa hạ, gió mùa mùa hạ xuất phất từ đâu?',
            answers: [
                'Áp cao bắc Ấn Độ Dương',
                'Biển Đông',
                'Áp cao cận chí tuyến bán cầu Nam',
                'Cao áp Xi bia'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 28,
            question: 'Đặc điểm của đất feralit là',
            answers: [
                'Có màu đỏ vàng, chua nghèo mùn',
                'Có màu đen, xốp thoát nước',
                'Có màu đỏ vàng, đất rất màu mỡ',
                'Có màu nâu, khó thoát nước'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 29,
            question: 'Gió mùa hoạt động ở nước ta gồm',
            answers: [
                'Gió mùa mùa đông và gió mùa mùa hạ',
                'Gió mùa mùa đông và tín phong bán cầu Bắc',
                'Gió mùa mùa hạ và tín phong bán cầu Bắc',
                'Gió mùa mùa hạ và tín phong bán cầu Nam'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 30,
            question: 'Đặc điểm nào sau đây không đúng với sông ngòi nước ta?',
            answers: [
                'Mạng lưới dày đặc',
                'Nhiều nước quanh năm',
                'Có trữ lượng phù sa lớn',
                'Thủy chế theo mùa'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 31,
            question: 'Phát biểu nào sau đây đúng khi nói về đặc điểm gió mùa ở nước ta?',
            answers: [
                'Gió mùa mùa hạ có hướng chính là đông nam',
                'Gió mùa mùa hạ có nguồn gốc từ cao áp Xibia',
                'Gió mùa mùa đông thổi liên tục từ tháng 11 đến tháng 4',
                'Gió mùa mùa đông thổi từng đợt từ tháng 11 đến tháng 4'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 32,
            question: 'Tính chất nhiệt đới ẩm gió mùa của sông ngòi nước ta biểu hiện ở đặc điểm nào sau đây?',
            answers: [
                'Sông ngòi dày đặc, nhiều nước, ít phù sa, chế độ nước thất thường',
                'Sông ngòi dày đặc, nhiều nước, giàu phù sa, chế độ nước theo mùa',
                'Sông ngòi dày đặc, có nhiều nước, giàu phù sa, chế độ nước ổn định',
                'Sông ngòi dày đặc, chủ yếu hướng tây bắc - đông nam và vòng cung'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 33,
            question: 'Địa hình Caxtơ (hang động, suối cạn, thung khô) được hình thành chủ yếu trên loại đá nào sau đây?',
            answers: [
                'Granit',
                'Vôi',
                'Badan',
                'Sét'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 34,
            question: 'Gió tín phong nửa cầu Bắc chiếm ưu thế từ khu vực dãy Bạch Mã trở vào Nam có hướng',
            answers: [
                'Tây Bắc',
                'Tây Nam',
                'Đông Nam',
                'Đông Bắc'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 35,
            question: 'Vào giữa và cuối mùa hạ, do ảnh hưởng của áp thấp Bắc Bộ nên gió mùa Tây Nam khi vào Bắc Bộ nước ta di chuyển theo hướng',
            answers: [
                'Đông Bắc',
                'Đông Nam',
                'Tây Nam',
                'Tây Bắc'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 36,
            question: 'Thiên nhiên nhiệt đới ẩm gió mùa ở nước ta ảnh hưởng trực tiếp và rõ rệt nhất đến hoạt động sản xuất nào sau đây?',
            answers: [
                'Công nghiêp',
                'Nông nghiệp',
                'Du lịch',
                'Giao thông vận tải'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 37,
            question: 'Thành phần loài nào sau đây không thuộc cây nhiệt đới?',
            answers: [
                'Dầu',
                'Đỗ Quyên',
                'Dâu tằm',
                'Đậu'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 38,
            question: 'Càng vào phía Nam gió mùa Đông Bắc càng',
            answers: [
                'Suy yếu',
                'Mạnh',
                'Khô nóng',
                'Gây mưa nhiều'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 39,
            question: 'Mưa phùn vùng ven biển và các đồng bằng Bắc Bộ, Bắc Trung Bộ thường diễn ra vào',
            answers: [
                'Nửa đầu mùa đông',
                'Nửa sau mùa đông',
                'Nửa sau mùa xuân',
                'Nửa đầu mùa hạ'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 40,
            question: 'Phát biểu nào sau đây không đúng với đặc điểm sông ngòi nước ta?',
            answers: [
                'Nhiều sông',
                'Phần lớn là sông nhỏ',
                'Giàu phù sa',
                'Ít phụ lưu'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        }
    ],
    [
        {
            id: 1,
            question: 'Khu vực có mưa nhiều nhất vào thời kì đầu mùa hạ ở nước ta là',
            answers: [
                'Bắc Trung Bộ và Tây Bắc',
                'Đồng bằng sông Hồng và Tây Bắc',
                'Tây Nguyên và đồng bằng Nam Bộ',
                'Bắc Trung Bộ và Nam Trung Bộ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 2,
            question: 'Khu vực chịu ảnh hưởng mạnh nhất của gió phơn Tây Nam là',
            answers: [
                'Tây Bắc',
                'Đông Bắc',
                'Đồng bằng sông Hồng',
                'Bắc Trung Bộ'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 3,
            question: 'Sự phân chia mùa khí hậu thành mùa mưa và mùa khô ở phần lãnh thổ phía Nam đặc biệt rõ nét từ vĩ độ',
            answers: [
                '16°B trở vào',
                '16°B trở ra',
                '14°B trở vào',
                '14°B - 16°B'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 4,
            question: 'Hệ sinh thái đặc trưng của khu vực cực Nam Trung Bộ nước ta là',
            answers: [
                'Xa van cây bụi',
                'Rừng thưa nhiệt đới khô',
                'Rừng nhiệt đới',
                'Rừng thường xanh trên đá vôi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 5,
            question: 'Khí hậu miền Nam Trung Bộ và Nam Bộ có đặc điểm nào sau đây?',
            answers: [
                'Nóng, ẩm quanh năm',
                'Tính chất cận xích đạo',
                'Tính chất ôn hòa',
                'Khô hạn quanh năm'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 6,
            question: 'Thành phần loài chiếm ưu thế ở phần lãnh thổ phía Bắc nước ta là',
            answers: [
                'Cây lá kim và thú có lông dày',
                'Cây chịu hạn, rụng lá theo mùa',
                'Động thực vật cận nhiệt đới',
                'Động thực vật nhiệt đới'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 7,
            question: 'Thiên nhiên vùng núi Đông Bắc nước ta có đặc điểm nào sau đây?',
            answers: [
                'Cảnh quan cận xích đạo gió mùa',
                'Cảnh quan nhiệt đới nóng quanh năm',
                'Mang sắc thái cận nhiệt đới gió mùa',
                'Cảnh quan giống như vùng ôn đới núi cao'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 8,
            question: 'Đặc trưng của khí hậu miền Bắc và Đông Bắc Bắc Bộ là',
            answers: [
                'Mùa mưa lùi dần về mùa thu - đông',
                'Gió phơn Tây Nam hoạt động mạnh',
                'Chịu ảnh hưởng của gió mùa Đông Bắc',
                'Phân chia hai mùa mưa, khô sâu sắc'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 9,
            question: 'Sự phân hóa thiên nhiên theo độ cao ở nước ta biểu hiện rõ qua các thành phần',
            answers: [
                'Khí hậu, đất đai, sinh vật',
                'Sông ngòi, đất đai, khí hậu',
                'Sinh vật, đất đai, sông ngòi',
                'Khí hậu, sinh vật, sông ngòi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 10,
            question: 'Hệ sinh thái rừng nhiệt đới gió mùa phát triển trên các loại thổ nhưỡng đặc biệt ở nước ta không phải là loại rừng',
            answers: [
                'Thường xanh trên đá vôi ở phía Bắc',
                'Cây bụi gai nhiệt đới khô trên đá vôi',
                'Ngập mặn trên đất mặn ven biển',
                'Tràm trên đất phèn ở Nam Bộ'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 11,
            question: 'Đai cận nhiệt đới gió mùa trên núi ở nước ta có đặc điểm là',
            answers: [
                'Các tháng đều có nhiệt độ trên 28°C',
                'Không có tháng nào nhiệt độ dưới 25°C',
                'Không có tháng nào nhiệt độ trên 25°C',
                'Chỉ có 2 tháng nhiệt độ trên 25°C'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 12,
            question: 'Phát biểu nào sau đây không phải là đặc điểm của phần lãnh thổ phía Bắc nước ta?',
            answers: [
                'Trong năm có một mùa đông lạnh',
                'Thời tiết thường diễn biến phức tạp',
                'Có một mùa khô sâu sắc kéo dài',
                'Biên độ nhiệt độ trung bình năm lớn'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 13,
            question: 'Phát biểu nào sau đây không đúng về sự phân hóa thiên nhiên theo độ cao của nước ta?',
            answers: [
                'Nhóm đất feralit chiếm phần lớn diện tích đai nhiệt đới gió mùa',
                'Ranh giới đai cận nhiệt đới gió mùa trên núi miền Bắc thấp hơn miền Nam',
                'Các loài chim di cư thuộc khu hệ Himalaya chỉ có ở độ cao trên 2600m',
                'Đai ôn đới gió mùa trên núi chỉ có ở miền Tây Bắc và Bắc Trung Bộ'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 14,
            question: 'Phát biểu nào sau đây không đúng với khí hậu của phần lãnh thổ phía Nam nước ta?',
            answers: [
                'Biên độ nhiệt độ trung bình năm lớn',
                'Nhiệt độ trung bình năm trên 25°C',
                'Phân hóa hai mùa mưa và khô rõ rệt',
                'Nền nhiệt độ thiên về khí hậu xích đạo'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 15,
            question: 'Nhận xét nào sau đây không đúng với sự thay đổi nhiệt độ theo Bắc - Nam ở nước ta?',
            answers: [
                'Biên độ nhiệt độ năm càng vào Nam càng giảm',
                'Nhiệt độ trung bình năm tăng dần từ Bắc - Nam',
                'Nhiệt độ trung bình năm giảm dần từ Bắc - Nam',
                'Nhiệt độ mùa hạ ít có sự khác nhau giữa hai miền'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 16,
            question: 'Đặc điểm nổi bật của thiên nhiên miền Tây Bắc và Bắc Trung Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Đồi núi thấp chiếm ưu thế với các dãy núi có hướng vòng cung',
                'Địa hình cao, các dãy núi xen thung lũng sông có hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 17,
            question: 'Đặc điểm thiên nhiên nổi bật của miền Bắc và Đông Bắc Bắc Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Địa hình có các sơn nguyên bóc mòn và các cao nguyên badan',
                'Địa hình cao, các dãy núi xen kẽ thung lũng sông hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 18,
            question: 'Đặc điểm thiên nhiên nổi bật của miền Nam Trung Bộ và Nam Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Đồi núi thấp chiếm ưu thế với các dãy núi có hướng vòng cung',
                'Địa hình cao, các dãy núi xen thung lũng sông có hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 19,
            question: 'Cảnh quan thiên nhiên tiêu biểu cho vùng lãnh thổ phía Bắc là đới rừng',
            answers: [
                'Nhiệt đới gió mùa',
                'Xa van và cây bụi',
                'Cận nhiệt đới',
                'Ôn đới gió mùa'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 20,
            question: 'Ở vùng lãnh thổ phía Bắc, thành phần loài chiếm ưu thế là',
            answers: [
                'Xích đạo',
                'Nhiệt đới',
                'Cận nhiệt',
                'Ôn đới'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 21,
            question: 'Biểu hiện của cảnh quan thiên nhiên phần lãnh thổ phía Bắc là',
            answers: [
                'Mùa đông lạnh, tất cả cây rụng lá',
                'Mùa đông lạnh, không mưa, nhiều loài cây rụng lá',
                'Mùa đông lạnh ẩm mưa nhiều, nhiều loài cây rụng lá',
                'Mùa đông lạnh, mưa ít, nhiều loài cây rụng lá'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 22,
            question: 'Cảnh quan thiên nhiên tiêu biểu cho vùng lãnh thổ phía Nam là',
            answers: [
                'Rừng nhiệt đới ẩm gió mùa',
                'Rừng cận xích đạo gió mùa',
                'Rừng cận nhiệt đới khô',
                'Rừng xích đạo gió mùa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 23,
            question: 'Thành phần loài chiếm ưu thế ở phần lãnh thổ phía Nam là',
            answers: [
                'Xích đạo và nhiệt đới',
                'Nhiệt đới và cận nhiệt đới',
                'Cận nhiệt đới và xích đạo',
                'Cận xích đạo và ôn đới'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 24,
            question: 'Cảnh quan rừng thưa nhiệt đới khô được hình thành nhiều nhất ở vùng nào?',
            answers: [
                'Ven biển Bắc Trung Bộ',
                'Duyên hải Nam Trung Bộ',
                'Tây Nguyên',
                'Nam Bộ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 25,
            question: 'Thiên nhiên vùng núi nào sau đây mang sắc thái cận nhiệt đới gió mùa?',
            answers: [
                'Vùng núi cao Tây Bắc',
                'Vùng núi Trường Sơn',
                'Vùng núi thấp Tây Bắc',
                'Vùng núi Đông Bắc'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 26,
            question: 'Đai nhiệt đới gió mùa phân bố ở độ cao trung bình',
            answers: [
                'Ở miền Bắc dưới 600 - 700m; miền Nam dưới 900 - 1000m',
                'Ở miền Bắc và miền Nam dưới 600 - 700m đến 900 - 1000m',
                'Ở miền Bắc dưới 900 - 1000m, miền Nam dưới 600 - 700m',
                'Ở miền Bắc trên 600 - 700m; miền Nam trên 900 - 1000m'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 27,
            question: 'Trong đai nhiệt đới gió mùa, sinh vật chiếm ưu thế là các hệ sinh thái',
            answers: [
                'Ôn đới',
                'Cận nhiệt đới',
                'Xa van',
                'Nhiệt đới'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 28,
            question: 'Các nhóm đất chủ yếu của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Đất phù sa và feralit',
                'Đất feralit và feralit có mùn',
                'Feralit có mùn và đất mùn',
                'Đất mùn và đất mùn thô'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 29,
            question: 'Đặc điểm khí hậu nào sau đây thuộc đai ôn đới gió mùa trên núi?',
            answers: [
                'Nhiệt độ tháng lạnh nhất trên 10°C',
                'Nhiệt độ tháng nóng nhất trên 35°C',
                'Nhiệt độ trung bình năm dưới 5°C',
                'Nhiệt độ trung bình năm dưới 15°C'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 30,
            question: 'Hệ sinh thái đặc trưng của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Rừng lá kim trên đất feralit có mùn',
                'Rừng gió mùa lá rộng thường xanh',
                'Rừng lá kim trên đất feralit',
                'Rừng cận nhiệt đới lá rộng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 31,
            question: 'Đai ôn đới gió mùa trên núi chỉ có ở',
            answers: [
                'Trường Sơn Nam',
                'Trường Sơn Bắc',
                'Hoàng Liên Sơn',
                'Dãy Bạch Mã'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 32,
            question: 'Đặc điểm nổi bật của địa hình miền Bắc và Đông Bắc Bắc Bộ là',
            answers: [
                'Chủ yếu là đồi núi cao; đồng bằng mở rộng',
                'Gồm 4 cánh cung lớn; đồng bằng mở rộng',
                'Chủ yếu là đồi núi thấp; đồng bằng mở rộng',
                'Chủ yếu là núi cao, địa hình ven biển đa dạng'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 33,
            question: 'Sông ngòi miền Bắc và Đông Bắc Bắc Bộ có đặc điểm là',
            answers: [
                'Dày đặc, chảy theo hướng vòng cung và tây bắc - đông nam',
                'Dày đặc, sông ngòi đều chảy theo hướng vòng cung',
                'Dày đặc, đều chảy theo hướng tây bắc - đông nam',
                'Dày đặc, chảy theo hướng tây bắc - đông nam và tây - đông'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 34,
            question: 'Hệ sinh thái đặc trưng của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Rừng nhiệt đới lá rộng và lá kim',
                'Rừng thưa nhiệt đới và lá kim',
                'Rừng cận nhiệt đới lá rộng và lá kim',
                'Rừng cận nhiệt đới khô và lá kim'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 35,
            question: 'Phạm vi đới cảnh quan rừng nhiệt đới gió mùa, biểu hiện rõ rệt nhất là',
            answers: [
                'Từ dãy Bạch Mã trở ra',
                'Từ dãy Hoành Sơn trở ra',
                'Từ dãy Hoành Sơn trở vào',
                'Từ dãy Bạch Mã trở vào'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 36,
            question: 'Nhóm đất có diện tích lớn nhất trong đai nhiệt đới gió mùa là',
            answers: [
                'Đất phù sa',
                'Đất feralit có mùn',
                'Đất feralit',
                'Đất xám phù sa cổ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 37,
            question: 'Dọc tả ngạn sông Hồng và rìa phía tây, tây nam đồng bằng Bắc Bộ là giới hạn của miền địa lí tự nhiên nào sau đây?',
            answers: [
                'Miền Bắc và Đông Bắc Bắc Bộ',
                'Miền Tây Bắc và Bắc Trung Bộ',
                'Miền Nam Trung Bộ',
                'Nam Bộ'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 38,
            question: 'Sự phân hóa thiên nhiên của vùng biển - thềm lục địa, vùng đồng bằng ven biển và vùng đồi núi là biểu hiện của sự phân hóa theo chiều',
            answers: [
                'Bắc - Nam',
                'Đông - Tây',
                'Độ cao',
                'Tây - Đông'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 39,
            question: 'Đặc trưng khí hậu của phần lãnh thổ phía Bắc là',
            answers: [
                'Nhiệt đới ẩm gió mùa có mùa đông lạnh',
                'Cận nhiệt đới gió mùa có mùa đông lạnh',
                'Cận xích đạo gió mùa nóng quanh năm',
                'Nhiệt đới khô gió mùa có mùa đông lạnh'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 40,
            question: 'Nhiệt độ trung bình năm ở phần lãnh thổ phía Bắc là',
            answers: [
                '20°C',
                '22°C',
                'Trên 20°C',
                '24°C'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        }
    ],
    [
        {
            id: 1,
            question: 'Khu vực có mưa nhiều nhất vào thời kì đầu mùa hạ ở nước ta là',
            answers: [
                'Bắc Trung Bộ và Tây Bắc',
                'Đồng bằng sông Hồng và Tây Bắc',
                'Tây Nguyên và đồng bằng Nam Bộ',
                'Bắc Trung Bộ và Nam Trung Bộ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 2,
            question: 'Khu vực chịu ảnh hưởng mạnh nhất của gió phơn Tây Nam là',
            answers: [
                'Tây Bắc',
                'Đông Bắc',
                'Đồng bằng sông Hồng',
                'Bắc Trung Bộ'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 3,
            question: 'Sự phân chia mùa khí hậu thành mùa mưa và mùa khô ở phần lãnh thổ phía Nam đặc biệt rõ nét từ vĩ độ',
            answers: [
                '16°B trở vào',
                '16°B trở ra',
                '14°B trở vào',
                '14°B - 16°B'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 4,
            question: 'Hệ sinh thái đặc trưng của khu vực cực Nam Trung Bộ nước ta là',
            answers: [
                'Xa van cây bụi',
                'Rừng thưa nhiệt đới khô',
                'Rừng nhiệt đới',
                'Rừng thường xanh trên đá vôi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 5,
            question: 'Khí hậu miền Nam Trung Bộ và Nam Bộ có đặc điểm nào sau đây?',
            answers: [
                'Nóng, ẩm quanh năm',
                'Tính chất cận xích đạo',
                'Tính chất ôn hòa',
                'Khô hạn quanh năm'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 6,
            question: 'Thành phần loài chiếm ưu thế ở phần lãnh thổ phía Bắc nước ta là',
            answers: [
                'Cây lá kim và thú có lông dày',
                'Cây chịu hạn, rụng lá theo mùa',
                'Động thực vật cận nhiệt đới',
                'Động thực vật nhiệt đới'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 7,
            question: 'Thiên nhiên vùng núi Đông Bắc nước ta có đặc điểm nào sau đây?',
            answers: [
                'Cảnh quan cận xích đạo gió mùa',
                'Cảnh quan nhiệt đới nóng quanh năm',
                'Mang sắc thái cận nhiệt đới gió mùa',
                'Cảnh quan giống như vùng ôn đới núi cao'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 8,
            question: 'Đặc trưng của khí hậu miền Bắc và Đông Bắc Bắc Bộ là',
            answers: [
                'Mùa mưa lùi dần về mùa thu - đông',
                'Gió phơn Tây Nam hoạt động mạnh',
                'Chịu ảnh hưởng của gió mùa Đông Bắc',
                'Phân chia hai mùa mưa, khô sâu sắc'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 9,
            question: 'Sự phân hóa thiên nhiên theo độ cao ở nước ta biểu hiện rõ qua các thành phần',
            answers: [
                'Khí hậu, đất đai, sinh vật',
                'Sông ngòi, đất đai, khí hậu',
                'Sinh vật, đất đai, sông ngòi',
                'Khí hậu, sinh vật, sông ngòi'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 10,
            question: 'Hệ sinh thái rừng nhiệt đới gió mùa phát triển trên các loại thổ nhưỡng đặc biệt ở nước ta không phải là loại rừng',
            answers: [
                'Thường xanh trên đá vôi ở phía Bắc',
                'Cây bụi gai nhiệt đới khô trên đá vôi',
                'Ngập mặn trên đất mặn ven biển',
                'Tràm trên đất phèn ở Nam Bộ'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 11,
            question: 'Đai cận nhiệt đới gió mùa trên núi ở nước ta có đặc điểm là',
            answers: [
                'Các tháng đều có nhiệt độ trên 28°C',
                'Không có tháng nào nhiệt độ dưới 25°C',
                'Không có tháng nào nhiệt độ trên 25°C',
                'Chỉ có 2 tháng nhiệt độ trên 25°C'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 12,
            question: 'Phát biểu nào sau đây không phải là đặc điểm của phần lãnh thổ phía Bắc nước ta?',
            answers: [
                'Trong năm có một mùa đông lạnh',
                'Thời tiết thường diễn biến phức tạp',
                'Có một mùa khô sâu sắc kéo dài',
                'Biên độ nhiệt độ trung bình năm lớn'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 13,
            question: 'Phát biểu nào sau đây không đúng về sự phân hóa thiên nhiên theo độ cao của nước ta?',
            answers: [
                'Nhóm đất feralit chiếm phần lớn diện tích đai nhiệt đới gió mùa',
                'Ranh giới đai cận nhiệt đới gió mùa trên núi miền Bắc thấp hơn miền Nam',
                'Các loài chim di cư thuộc khu hệ Himalaya chỉ có ở độ cao trên 2600m',
                'Đai ôn đới gió mùa trên núi chỉ có ở miền Tây Bắc và Bắc Trung Bộ'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 14,
            question: 'Phát biểu nào sau đây không đúng với khí hậu của phần lãnh thổ phía Nam nước ta?',
            answers: [
                'Biên độ nhiệt độ trung bình năm lớn',
                'Nhiệt độ trung bình năm trên 25°C',
                'Phân hóa hai mùa mưa và khô rõ rệt',
                'Nền nhiệt độ thiên về khí hậu xích đạo'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 15,
            question: 'Nhận xét nào sau đây không đúng với sự thay đổi nhiệt độ theo Bắc - Nam ở nước ta?',
            answers: [
                'Biên độ nhiệt độ năm càng vào Nam càng giảm',
                'Nhiệt độ trung bình năm tăng dần từ Bắc - Nam',
                'Nhiệt độ trung bình năm giảm dần từ Bắc - Nam',
                'Nhiệt độ mùa hạ ít có sự khác nhau giữa hai miền'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 16,
            question: 'Đặc điểm nổi bật của thiên nhiên miền Tây Bắc và Bắc Trung Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Đồi núi thấp chiếm ưu thế với các dãy núi có hướng vòng cung',
                'Địa hình cao, các dãy núi xen thung lũng sông có hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 17,
            question: 'Đặc điểm thiên nhiên nổi bật của miền Bắc và Đông Bắc Bắc Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Địa hình có các sơn nguyên bóc mòn và các cao nguyên badan',
                'Địa hình cao, các dãy núi xen kẽ thung lũng sông hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 18,
            question: 'Đặc điểm thiên nhiên nổi bật của miền Nam Trung Bộ và Nam Bộ nước ta là',
            answers: [
                'Khí hậu cận xích đạo gió mùa với nền nhiệt độ cao quanh năm',
                'Đồi núi thấp chiếm ưu thế với các dãy núi có hướng vòng cung',
                'Địa hình cao, các dãy núi xen thung lũng sông có hướng tây bắc - đông nam',
                'Gió mùa Đông Bắc hoạt động mạnh, tạo nên mùa đông lạnh nhất ở nước ta'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 19,
            question: 'Cảnh quan thiên nhiên tiêu biểu cho vùng lãnh thổ phía Bắc là đới rừng',
            answers: [
                'Nhiệt đới gió mùa',
                'Xa van và cây bụi',
                'Cận nhiệt đới',
                'Ôn đới gió mùa'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 20,
            question: 'Ở vùng lãnh thổ phía Bắc, thành phần loài chiếm ưu thế là',
            answers: [
                'Xích đạo',
                'Nhiệt đới',
                'Cận nhiệt',
                'Ôn đới'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 21,
            question: 'Biểu hiện của cảnh quan thiên nhiên phần lãnh thổ phía Bắc là',
            answers: [
                'Mùa đông lạnh, tất cả cây rụng lá',
                'Mùa đông lạnh, không mưa, nhiều loài cây rụng lá',
                'Mùa đông lạnh ẩm mưa nhiều, nhiều loài cây rụng lá',
                'Mùa đông lạnh, mưa ít, nhiều loài cây rụng lá'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 22,
            question: 'Cảnh quan thiên nhiên tiêu biểu cho vùng lãnh thổ phía Nam là',
            answers: [
                'Rừng nhiệt đới ẩm gió mùa',
                'Rừng cận xích đạo gió mùa',
                'Rừng cận nhiệt đới khô',
                'Rừng xích đạo gió mùa'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 23,
            question: 'Thành phần loài chiếm ưu thế ở phần lãnh thổ phía Nam là',
            answers: [
                'Xích đạo và nhiệt đới',
                'Nhiệt đới và cận nhiệt đới',
                'Cận nhiệt đới và xích đạo',
                'Cận xích đạo và ôn đới'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 24,
            question: 'Cảnh quan rừng thưa nhiệt đới khô được hình thành nhiều nhất ở vùng nào?',
            answers: [
                'Ven biển Bắc Trung Bộ',
                'Duyên hải Nam Trung Bộ',
                'Tây Nguyên',
                'Nam Bộ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 25,
            question: 'Thiên nhiên vùng núi nào sau đây mang sắc thái cận nhiệt đới gió mùa?',
            answers: [
                'Vùng núi cao Tây Bắc',
                'Vùng núi Trường Sơn',
                'Vùng núi thấp Tây Bắc',
                'Vùng núi Đông Bắc'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 26,
            question: 'Đai nhiệt đới gió mùa phân bố ở độ cao trung bình',
            answers: [
                'Ở miền Bắc dưới 600 - 700m; miền Nam dưới 900 - 1000m',
                'Ở miền Bắc và miền Nam dưới 600 - 700m đến 900 - 1000m',
                'Ở miền Bắc dưới 900 - 1000m, miền Nam dưới 600 - 700m',
                'Ở miền Bắc trên 600 - 700m; miền Nam trên 900 - 1000m'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 27,
            question: 'Trong đai nhiệt đới gió mùa, sinh vật chiếm ưu thế là các hệ sinh thái',
            answers: [
                'Ôn đới',
                'Cận nhiệt đới',
                'Xa van',
                'Nhiệt đới'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 28,
            question: 'Các nhóm đất chủ yếu của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Đất phù sa và feralit',
                'Đất feralit và feralit có mùn',
                'Feralit có mùn và đất mùn',
                'Đất mùn và đất mùn thô'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 29,
            question: 'Đặc điểm khí hậu nào sau đây thuộc đai ôn đới gió mùa trên núi?',
            answers: [
                'Nhiệt độ tháng lạnh nhất trên 10°C',
                'Nhiệt độ tháng nóng nhất trên 35°C',
                'Nhiệt độ trung bình năm dưới 5°C',
                'Nhiệt độ trung bình năm dưới 15°C'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 30,
            question: 'Hệ sinh thái đặc trưng của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Rừng lá kim trên đất feralit có mùn',
                'Rừng gió mùa lá rộng thường xanh',
                'Rừng lá kim trên đất feralit',
                'Rừng cận nhiệt đới lá rộng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 31,
            question: 'Đai ôn đới gió mùa trên núi chỉ có ở',
            answers: [
                'Trường Sơn Nam',
                'Trường Sơn Bắc',
                'Hoàng Liên Sơn',
                'Dãy Bạch Mã'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 32,
            question: 'Đặc điểm nổi bật của địa hình miền Bắc và Đông Bắc Bắc Bộ là',
            answers: [
                'Chủ yếu là đồi núi cao; đồng bằng mở rộng',
                'Gồm 4 cánh cung lớn; đồng bằng mở rộng',
                'Chủ yếu là đồi núi thấp; đồng bằng mở rộng',
                'Chủ yếu là núi cao, địa hình ven biển đa dạng'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 33,
            question: 'Sông ngòi miền Bắc và Đông Bắc Bắc Bộ có đặc điểm là',
            answers: [
                'Dày đặc, chảy theo hướng vòng cung và tây bắc - đông nam',
                'Dày đặc, sông ngòi đều chảy theo hướng vòng cung',
                'Dày đặc, đều chảy theo hướng tây bắc - đông nam',
                'Dày đặc, chảy theo hướng tây bắc - đông nam và tây - đông'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 34,
            question: 'Hệ sinh thái đặc trưng của đai cận nhiệt đới gió mùa trên núi là',
            answers: [
                'Rừng nhiệt đới lá rộng và lá kim',
                'Rừng thưa nhiệt đới và lá kim',
                'Rừng cận nhiệt đới lá rộng và lá kim',
                'Rừng cận nhiệt đới khô và lá kim'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 35,
            question: 'Phạm vi đới cảnh quan rừng nhiệt đới gió mùa, biểu hiện rõ rệt nhất là',
            answers: [
                'Từ dãy Bạch Mã trở ra',
                'Từ dãy Hoành Sơn trở ra',
                'Từ dãy Hoành Sơn trở vào',
                'Từ dãy Bạch Mã trở vào'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 36,
            question: 'Nhóm đất có diện tích lớn nhất trong đai nhiệt đới gió mùa là',
            answers: [
                'Đất phù sa',
                'Đất feralit có mùn',
                'Đất feralit',
                'Đất xám phù sa cổ'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 37,
            question: 'Dọc tả ngạn sông Hồng và rìa phía tây, tây nam đồng bằng Bắc Bộ là giới hạn của miền địa lí tự nhiên nào sau đây?',
            answers: [
                'Miền Bắc và Đông Bắc Bắc Bộ',
                'Miền Tây Bắc và Bắc Trung Bộ',
                'Miền Nam Trung Bộ',
                'Nam Bộ'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 38,
            question: 'Sự phân hóa thiên nhiên của vùng biển - thềm lục địa, vùng đồng bằng ven biển và vùng đồi núi là biểu hiện của sự phân hóa theo chiều',
            answers: [
                'Bắc - Nam',
                'Đông - Tây',
                'Độ cao',
                'Tây - Đông'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 39,
            question: 'Đặc trưng khí hậu của phần lãnh thổ phía Bắc là',
            answers: [
                'Nhiệt đới ẩm gió mùa có mùa đông lạnh',
                'Cận nhiệt đới gió mùa có mùa đông lạnh',
                'Cận xích đạo gió mùa nóng quanh năm',
                'Nhiệt đới khô gió mùa có mùa đông lạnh'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 40,
            question: 'Nhiệt độ trung bình năm ở phần lãnh thổ phía Bắc là',
            answers: [
                '20°C',
                '22°C',
                'Trên 20°C',
                '24°C'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        }
    ],
    [
        {
            id: 1,
            question: 'Nguyên nhân chủ yếu làm cho diện tích rừng nước ta suy giảm nhanh là do',
            answers: [
                'Cháy rừng',
                'Trồng rừng chưa hiệu quả',
                'Khai thác quá mức',
                'Chiến tranh'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 2,
            question: 'Phát biểu nào sau đây không đúng với tài nguyên rừng của nước ta?',
            answers: [
                'Tổng diện tích rừng đang tăng lên',
                'Tài nguyên rừng vẫn bị suy thoái',
                'Diện tích rừng giàu chiếm tỉ lệ lớn',
                'Chất lượng rừng chưa thể phục hồi'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 3,
            question: 'Để hạn chế xói mòn trên đất dốc ở vùng đồi núi cần thực hiện biện pháp kỹ thuật canh tác nào sau đây?',
            answers: [
                'Ngăn chặn du canh, du cư',
                'Áp dụng biện pháp nông - lâm kết hợp',
                'Bảo vệ rừng và đất rừng',
                'Làm ruộng bậc thang, đào hố vẩy cá'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 4,
            question: 'Theo mục đích sử dụng, rừng được chia thành',
            answers: [
                'Rừng phòng hồ, rừng rậm, rừng thưa',
                'Rừng sản xuất, rừng phòng hộ, rừng rậm',
                'Rừng sản xuất, rừng tre nứa, rừng cây gỗ',
                'Rừng sản xuất, rừng phòng hộ, rừng đặc dụng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 5,
            question: 'Diện tích rừng nước ta bị thu hẹp chủ yếu do',
            answers: [
                'Dịch bệnh',
                'Chiến tranh',
                'Khai thác bừa bãi và cháy rừng',
                'Cháy rừng và các thiên tai khác'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 6,
            question: 'Hậu quả của ô nhiễm mỗi trường nước, nhất là ở vùng cửa sông, ven biển là',
            answers: [
                'Biến đổi khí hậu',
                'Mưa a-xít',
                'Cạn kiệt dòng chảy',
                'Hải sản giảm sút'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 7,
            question: 'Phát biểu nào sau đây không đúng với hiện trạng sử dụng tài nguyên đất của nước ta?',
            answers: [
                'Bình quân trên đầu người nhỏ',
                'Diện tích đất chuyên dùng ngày càng ít',
                'Diện tích đất có rừng còn thấp',
                'Diện tích đất đai bị suy thoái còn rất lớn'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 8,
            question: 'Giải pháp quan trọng nhất để sử dụng hiệu quả đất nông nghiệp ở vùng đồng bằng nước ta là',
            answers: [
                'Đẩy mạnh thâm canh, tăng vụ',
                'Khai hoang mở rộng diện tích',
                'Cải tạo đất bạc màu, đất mặn',
                'Chuyển đổi cơ cấu cây trồng'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 9,
            question: 'Để chống xói mòn trên đất dốc ở vùng đồi núi, về mặt kĩ thuật canh tác cần thực hiện biện pháp',
            answers: [
                'Trồng cây theo băng, làm ruộng bậc thang',
                'Bảo vệ rừng và đất rừng',
                'Ngăn chặn nạn du canh, du cư',
                'Cải tạo đất hoang, đồi núi trọc'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 10,
            question: 'Biện pháp nào sau đây là hiệu quả nhất để chống xói mòn trên đất dốc ở vùng núi nước ta?',
            answers: [
                'Trồng cây gây rừng và làm ruộng bậc thang',
                'Trồng cây theo băng và làm ruộng bậc thang',
                'Đào hố vẩy cá, phủ xanh đất trống đồi núi trọc',
                'Áp dụng tổng thể các biện pháp thủy lợi, canh tác'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 11,
            question: 'Biện pháp để bảo vệ tài nguyên đất nông nghiệp ở vùng đồng bằng là',
            answers: [
                'Canh tác hợp lí, chống ô nhiễm đất đai',
                'Áp dụng biện pháp nông - lâm kết hợp',
                'Tổ chức định canh, định cư cho người dân',
                'Thực hiện kĩ thuật canh tác trên đất dốc'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 12,
            question: 'Biện pháp nhằm bảo vệ và phát triển rừng phòng hộ ở nước ta là',
            answers: [
                'Bảo vệ rừng, trồng rừng trên đất trống, đồi núi trọc',
                'Bảo vệ cảnh quan, đa dạng sinh học các vườn quốc gia',
                'Đảm bảo quy trì phát triển diện tích và chất lượng rừng',
                'Áp dụng các biện pháp canh tác hợp lí trên đất dốc'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 13,
            question: 'Hạn chế lớn nhất về tự nhiên để phát triển nông nghiệp ở đồng bằng sông cửu long là',
            answers: [
                'Ngập lụt và triều cường ngày càng tăng',
                'Tài nguyên rừng đang suy giảm',
                'Diện tích đất nhiễm phèn, nhiễm mặn lớn',
                'Tài nguyên khoáng sản hạn chế'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 14,
            question: 'Khó khăn lớn nhất đối với sự phát triển ngành trồng trọt ở đồng bằng sông hồng là',
            answers: [
                'Sự chênh lệch thu nhập giữa các nhóm dân cư',
                'Bình quân đất nông nghiệp trên đầu người thấp',
                'Đô thị hóa diễn ra ngày càng nhanh',
                'Thiên tai, thời tiết diễn biến thất thường'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 15,
            question: 'Biện pháp nào sau đây được sử dụng trong bảo vệ đất ở đồng bằng nước ta?',
            answers: [
                'Làm ruộng bậc thang',
                'Chống nhiễm mặn',
                'Trồng cây theo băng',
                'Đào hố kiểu vảy cá'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 16,
            question: 'Nhận định nào sau đây đúng về tài nguyên rừng của nước ta hiện nay?',
            answers: [
                'Chất lượng rừng đã được phục hồi hoàn toàn',
                'Rừng nghèo và mới phục hồi chiếm tỉ lệ lớn',
                'Diện tích rừng giảm nhanh, liên tục',
                'Diện tích rừng giàu chiếm tỉ lệ lớn'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 17,
            question: 'Biện pháp nào là chủ yếu nhất để cải tạo đất hoang, đồi núi trọc?',
            answers: [
                'Đầu tư thủy lợi, làm ruộng bậc thang',
                'Trồng cây theo băng, đào hố vảy cá',
                'Phát triển mô hình nông - lâm kết hợp',
                'Bảo vệ đất rừng và trồng rừng mới'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 18,
            question: 'Phần lớn diện tích rừng nước ta hiện nay là',
            answers: [
                'Rừng nguyên sinh chất lượng tốt',
                'Rừng non mới phục hồi và rừng trồng',
                'Rừng trồng chưa khai thác được',
                'Rừng nghèo và rừng mới phục hồi'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 19,
            question: 'Để đảm bảo vai trò của rừng đối với việc bảo vệ môi trường, theo quy hoạch chúng ta phải đảm bảo độ che phủ rừng như thế nào?',
            answers: [
                '20 - 30%, vùng núi dốc phải đạt 40 - 50%',
                '30 - 40%, vùng núi dốc phải đạt 50 - 60%',
                '40 - 45%, vùng núi dốc phải đạt 60 - 70%',
                '45 - 50%, vùng núi dốc phải đạt 70 - 80%'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 20,
            question: 'Tính đa dạng sinh học cao thể hiện ở',
            answers: [
                'Số lượng thành phần loài',
                'Sự phát triển của sinh vật',
                'Diện tích rừng lớn',
                'Sự phân bố sinh vật'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 21,
            question: 'Nguyên tắc quản lí, sử dụng và phát triển rừng đặc dụng là',
            answers: [
                'Bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên',
                'Trồng rừng trên đất trống, đồi núi trọc ở các vùng trung du và miền núi',
                'Đảm bảo duy trì phát triển diện tích rừng và chất lượng',
                'Duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng rừng'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 22,
            question: 'Để đảm bảo vai trò của rừng đối với việc bảo vệ môi trường ở vùng núi dốc, theo quy hoạch chúng ta phải đạt',
            answers: [
                '40 - 50%',
                '50 - 60%',
                '60 - 70%',
                '70 - 80%'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 23,
            question: 'Số lượng loài sinh vật bị mất dần lớn nhất thuộc về',
            answers: [
                'Thực vật',
                'Thú',
                'Chim',
                'Cá'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 24,
            question: 'Nguyên tắc quản lí, sử dụng và phát triển rừng phòng hộ là',
            answers: [
                'Bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên',
                'Trồng rừng trên đất trống, đồi núi trọc ở các vùng trung du và miền núi',
                'Có kế hoạch, biện pháp bảo vệ, nuôi dưỡng rừng hiện có, trồng rừng trên đất trống, đồi núi trọc',
                'Duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng rừng'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 25,
            question: 'Nguyên tắc quản lí, sử dụng và phát triển rừng sản xuất là',
            answers: [
                'Bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên',
                'Trồng rừng trên đất trống, đồi núi trọc ở các vùng trung du và miền núi',
                'Có kế hoạch, biện pháp bảo vệ, nuôi dưỡng rừng hiện có, trồng rừng trên đất trống, đồi núi trọc',
                'Đảm bảo duy trì, phát triển diện tích và chất lượng rừng, duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng đất rừng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 26,
            question: 'Biện pháp quan trọng nhất nhằm bảo vệ rừng đặc dụng của nước ta là',
            answers: [
                'Trồng rừng trên đất trống đồi trọc và khai thác hợp lí',
                'Bảo vệ cảnh quan đa dạng sinh học ở các vườn quốc gia',
                'Đảm bảo duy trì phát triển diện tích và chất lượng rừng',
                'Có kế hoạch, biện pháp bảo vệ nuôi dưỡng rừng hiện có'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 27,
            question: 'Biểu hiện tính đa dạng cao của sinh vật tự nhiên ở nước ta là',
            answers: [
                'Loài, hệ sinh thái, gen',
                'Gen, hệ sinh thái, loài thú',
                'Loài thú, hệ sinh thái',
                'Loài cá, gen, hệ sinh thái'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 28,
            question: 'Biện pháp cải tạo đất nông nghiệp ở đồng bằng là',
            answers: [
                'Làm ruộng bậc thang',
                'Đào hố vẩy cá',
                'Bón phân thích hợp',
                'Trồng cây theo băng'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 29,
            question: 'Biểu hiện của tình trạng mất cân bằng sinh thái môi trường ở nước ta là',
            answers: [
                'Đất đai bị bạc màu',
                'Nguồn nước bị ô nhiễm trầm trọng',
                'Khoáng sản cạn kiệt',
                'Thiên tai bão lụt, hạn hán gia tăng'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 30,
            question: 'Hoạt động nông nghiệp nào sau đây có nguy cơ cao dẫn tới ô nhiễm đất?',
            answers: [
                'Đẩy mạnh thâm canh, tăng vụ',
                'Trồng lúa nước làm đất bị glây',
                'Sử dụng thuốc trừ sâu, phân hóa học',
                'Canh tác không hợp lý trên đất dốc'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 31,
            question: 'Nguyên nhân chủ yếu làm cho diện tích rừng ngập mặn ở khu vực nam bộ giảm nhanh trong những năm gần đây là',
            answers: [
                'Phá rừng để lấy gỗ',
                'Phá rừng để nuôi tôm',
                'Thiên tai hạn hán',
                'Cháy rừng'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 32,
            question: 'Nguồn tài nguyên sinh vật dưới nước, đặc biệt là nguồn hải sản bị giảm sút rõ rệt do nguyên nhân chủ yếu nào sau đây?',
            answers: [
                'Ô nhiễm môi trường nước và khai thác quá mức',
                'Khai thác quá mức và bùng phát dịch bệnh',
                'Dịch bệnh và các hiện tượng thời tiết thất thường',
                'Thời tiết thất thường và khai thác quá mức'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 33,
            question: 'Tổng diện tích rừng nước ta đang tăng dần nhưng tài nguyên rừng vẫn bị suy giảm vì',
            answers: [
                'Chất lượng rừng chưa thể phục hồi',
                'Diện tích rừng nghèo và rừng mới phục hồi tăng lên',
                'Rừng nguyên sinh hiện nay còn rất ít',
                'Diện tích rừng nghèo và rừng mới phục hồi là chủ yếu'
            ],
            correct: 0,
            explain: 'GIAI_THICH'
        },
        {
            id: 34,
            question: 'Biểu hiện của sự suy thoái tài nguyên đất ở khu vực đồi núi là',
            answers: [
                'Nhiễm mặn',
                'Nhiễm phèn',
                'Glây hóa',
                'Xói mòn'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 35,
            question: 'Biện pháp bảo vệ nào sau đây được thực hiện với cả ba loại rừng ở nước ta?',
            answers: [
                'Trồng rừng trên đất trống, đồi trọc',
                'Bảo vệ đa dạng sinh vật của các vườn quốc gia',
                'Giao quyền sử dụng đất và bảo vệ rừng cho người dân',
                'Duy trì phát triển độ phì và chất lượng rừng'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 36,
            question: 'Sự suy giảm tính đa dạng sinh học của nước ta không biểu hiện ở',
            answers: [
                'Số lượng thành phần loài',
                'Các kiểu hệ sinh thái',
                'Tốc độ sinh trưởng sinh vật',
                'Nguồn gen quý hiếm'
            ],
            correct: 2,
            explain: 'GIAI_THICH'
        },
        {
            id: 37,
            question: 'Nguyên nhân về mặt tự nhiên làm suy giảm tính đa dạng sinh học ở nước ta là',
            answers: [
                'Phát triển nông nghiệp',
                'Biến đổi khí hậu',
                'Chiến tranh tàn phá',
                'Săn bắt động vật'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 38,
            question: 'Biện pháp nào sau đây không để bảo vệ đa dạng sinh học ?',
            answers: [
                'Xây dựng và mở rộng hệ thống vườn quốc gia',
                'Có kế hoạch mở rộng diện tích đất nông nghiệp',
                'Ban hành “sách đỏ việt nam”.',
                'Quy định cụ thể việc khai thác'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        },
        {
            id: 39,
            question: 'Nguyên nhân chủ yếu nào sau đây làm cho đất feralit ở nước ta bị chua?',
            answers: [
                'Tích tụ ô xít nhôm',
                'Quá trình phong hóa diễn ra mạnh',
                'Tích tụ ô xít sắt',
                'Mưa nhiều, rửa trôi các chất ba dơ'
            ],
            correct: 3,
            explain: 'GIAI_THICH'
        },
        {
            id: 40,
            question: 'Biện pháp chủ yếu trong sử dụng đất nông nghiệp ở Bắc Trung Bộ là',
            answers: [
                'Đắp đê ngăn lũ, ngập lụt',
                'Chống cát bay, cát chảy',
                'Chuyển đổi mục đích sử dụng đất hợp lí',
                'Khai thác mặt nước nuôi trồng thủy sản'
            ],
            correct: 1,
            explain: 'GIAI_THICH'
        }
    ]
]

export default questions