import bai1 from '~/assets/images/bai-1.jpeg'
import bai2 from '~/assets/images/bai-2.jpeg'
import bai3 from '~/assets/images/bai-3.jpeg'
import bai4 from '~/assets/images/bai-4.jpeg'
import bai5 from '~/assets/images/bai-5.jpeg'
import Exam from '~/pages/Lesson/Exam'
import questions from './questions'

export const data = [
    {
        part: 'PHẦN 1. ĐỊA LÍ TỰ NHIÊN',
        lessons: [
            {
                id: 1,
                toLesson: '/part-1/bai-1-vi-tri-dia-ly-va-pham-vi-lanh-tho',
                image: bai1,
                name: 'Bài 1. Vị trí địa lí và phạm vi lãnh thổ',
                toExam: '/part-1/trac-nghiem-bai-1',
                numbersOfSlide: 3,
                numbersOfExam: questions[0].length,
                onClickLesson: function() {
                    return (
                        <>
                            <h3>{this.name}</h3>
                            <iframe title='slide' src="https://onedrive.live.com/embed?resid=3B0B639695C9809E%21108&amp;authkey=!ABGASgj1Lcj-xwM&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=0" frameBorder="0" width="100%" height="100%" allowFullScreen={true}></iframe>
                        </>
                    )
                },
                onClickExam: function() {
                    return (
                        <div>
                            <h3>Trắc nghiệm: {this.name}</h3>
                            <Exam questions={questions[0]}  quantity={this.numbersOfExam} id={this.id}/>
                        </div>
                    )
                },
                content: (
                    <div>
                        <b>Khái niệm đường cơ sở (tưởng tượng): </b><span>là điểm trên đất liền nhô xa nhất về biển nối với các đảo ven bờ chạy lần lượt.</span>
                        <p><b>Nội thủy: </b><span>phần bên trong đường cơ sở.</span></p>
                        <p><b>Lãnh hải: </b><span>từ đường cơ sở tính ra ngoài 12 hải lí (đường biên giới quốc gia trên biển).</span></p>
                        <p><b>Vùng tiếp giáp lãnh hải: </b><span>từ lãnh hải tính ra ngoài 12 hải lí.</span></p>
                        <p><b>Vùng đặc quyền kinh tế: </b><span>từ đường cơ sở tính ra ngoài 200 hải lí.</span></p>
                        <p><b>Thềm lục địa: </b><span>từ đường bờ biển ra biển có độ sâu 200m.</span></p>
                        <br/><p>
                            <b>Tham khảo:</b>
                            <ul>
                                <li><a href='https://i.imgur.com/sdds6bx.png' target='_blank' rel='noreferrer'>Bản đồ Đông Nam Á</a></li>
                                <li><a href='https://i.imgur.com/G1jKltT.png' target='_blank' rel='noreferrer'>Bản đồ Châu Á</a></li>
                                <li><a href='https://i.imgur.com/vMJbDHM.png' target='_blank' rel='noreferrer'>Bản đồ thế giới</a></li>
                            </ul>
                        </p>
                    </div>
                )
            },
            {
                id: 2,
                toLesson: '/part-1/bai-2-thien-nhien-nhiet-doi-am-gio-mua',
                image: bai2,
                name: 'Bài 2. Thiên nhiên nhiệt đới ẩm gió mùa',
                toExam: '/part-1/trac-nghiem-bai-2',
                numbersOfSlide: 8,
                numbersOfExam: questions[1].length,
                onClickLesson: function() {
                    return (
                        <>
                            <h3>{this.name}</h3>
                            <iframe title='slide' src="https://onedrive.live.com/embed?resid=3B0B639695C9809E%21117&amp;authkey=!AE-tZrDZvpmqLxI&amp;em=2&amp;wdAr=1.7777777777777777" frameBorder="0" width="100%" height="100%" allowFullScreen={true}></iframe>
                        </>
                    )
                },
                onClickExam: function() {
                    return (
                        <div>
                            <h3>Trắc nghiệm: {this.name}</h3>
                            <Exam questions={questions[1]}  quantity={this.numbersOfExam} id={this.id}/>
                        </div>
                    )
                },
                content: (
                    <div>
                        <b>Gió tín phong Bắc bán cầu:</b>
                        <ul>
                            <li>Nguồn gốc: cao áp chí tuyến.</li>
                            <li>Thời gian hoạt động: quanh năm.</li>
                            <li>Hướng gió: Đông Bắc.</li>
                            <li>Tính chất: ở Việt Nam gió mùa đã lấn át tín phong vì thế tín phong hoạt động xen kẽ gió mùa và chỉ mạnh lên rõ rệt vào các thời kì chuyển tiếp giữa 2 mùa gió.</li>
                        </ul>
                        <br/>
                        <b>Gió mùa mùa đông:</b>
                        <ul>
                            <li>Nguồn gốc: cao áp Xi Bia.</li>
                            <li>Thời gian hoạt động: tháng 11 - tháng 04.</li>
                            <li>Hướng gió: Đông Bắc.</li>
                            <li>Tính chất: đầu mùa lạnh khô, giữa và cuối mùa lạnh ẩm.</li>
                        </ul>
                        <br/>
                        <b>Gió mùa mùa hạ:</b>
                        <ul>
                            <li>Nguồn gốc:</li>
                            <ul>
                                <li>Đầu mùa hạ: từ cao áp Bắc Ấn Độ Dương.</li>
                                <li>Giữa và cuối mùa hạ: cao áp cận chí tuyến bán cầu Nam Nam Ấn Độ Dương và cao áp Australia.</li>
                            </ul>
                        </ul>
                        <br/><p>
                            <b>Tham khảo:</b>
                            <ul>
                                <li><a href='https://vi.wikipedia.org/wiki/Kh%C3%AD_h%E1%BA%ADu_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Khí hậu Việt Nam</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_l%C3%BD_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Địa lý Việt Nam</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/S%C3%B4ng_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Sông Việt Nam</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/H%E1%BB%87_%C4%91%E1%BB%99ng_v%E1%BA%ADt_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Hệ động vật Việt Nam</a></li>
                            </ul>
                        </p>
                    </div>
                )
            },
            {
                id: 3,
                toLesson: '/part-1/bai-3-su-phan-hoa-da-dang-cua-thien-nhien',
                image: bai3,
                name: 'Bài 3. Sự phân hóa đa dạng của thiên nhiên',
                toExam: '/part-1/trac-nghiem-bai-3',
                numbersOfSlide: 6,
                numbersOfExam: questions[2].length,
                onClickLesson: function() {
                    return (
                        <>
                            <h3>{this.name}</h3>
                            <iframe title='slide' src="https://onedrive.live.com/embed?resid=3B0B639695C9809E%21120&amp;authkey=!AHHJnz8LbfTCj6A&amp;em=2&amp;wdAr=1.7777777777777777" frameBorder="0" width="100%" height="100%" allowFullScreen={true}></iframe>
                        </>
                    )
                },
                onClickExam: function() {
                    return (
                        <div>
                            <h3>Trắc nghiệm: {this.name}</h3>
                            <Exam questions={questions[2]}  quantity={this.numbersOfExam} id={this.id}/>
                        </div>
                    )
                },
                content: (
                    <div>
                        <b>Miền Bắc:</b>
                        <ul>
                            <li>Vị trí giới hạn: từ dãy Bạch Mã trở ra Bắc.</li>
                            <li>Đặc điểm khí hậu:</li>
                            <ul>
                                <li>Kiểu khí hậu: nhiệt đới ẩm gió mùa, có một mùa đông lạnh.</li>
                                <li>Nhiệt độ trung bình năm: trên 20°C, có 2 - 3 tháng nhiệt độ dưới 18°C.</li>
                                <li>Biên độ nhiệt: cao.</li>
                                <li>Phân mùa: mùa đông, mùa hè.</li>
                                <li>Cảnh quan thiên nhiên tiêu biểu: đới rừng nhiệt đới gió mùa.</li>
                            </ul>
                        </ul>
                        <br/>
                        <b>Miền Nam:</b>
                        <ul>
                            <li>Vị trí giới hạn: từ dãy Bạch Mã trở vào Nam.</li>
                            <li>Đặc điểm khí hậu:</li>
                            <ul>
                                <li>Kiểu khí hậu: cận xích đạo gió mùa, nóng quanh năm.</li>
                                <li>Nhiệt độ trung bình năm: trên 25°C, ko có tháng nào nhiệt độ dưới 20°C.</li>
                                <li>Biên độ nhiệt: thấp.</li>
                                <li>Phân mùa: mùa mưa, mùa khô.</li>
                                <li>Cảnh quan thiên nhiên tiêu biểu: đới rừng cận xích đạo gió mùa.</li>
                            </ul>
                        </ul>
                        <br/><p>
                            <b>Tham khảo:</b>
                            <ul>
                                <li><a href='https://vi.wikipedia.org/wiki/Kh%C3%AD_h%E1%BA%ADu_Vi%E1%BB%87t_Nam#Ho%C3%A0n_l%C6%B0u_kh%C3%AD_quy%E1%BB%83n' target='_blank' rel='noreferrer'>Hoàn lưu khí quyển</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/D%C3%A3y_n%C3%BAi_Tr%C6%B0%E1%BB%9Dng_S%C6%A1n' target='_blank' rel='noreferrer'>Dãy núi Trường Sơn</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/D%C3%A3y_n%C3%BAi_Ho%C3%A0ng_Li%C3%AAn_S%C6%A1n' target='_blank' rel='noreferrer'>Dãy núi Hoàng Liên Sơn</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_l%C3%BD_Vi%E1%BB%87t_Nam#C%C3%A1c_mi%E1%BB%81n_t%E1%BB%B1_nhi%C3%AAn' target='_blank' rel='noreferrer'>Các miền tự nhiên</a></li>
                            </ul>
                        </p>
                    </div>
                )
            },
            {
                id: 4,
                toLesson: '/part-1/bai-4-thuc-hanh-viet-bao-cao-ve-su-phan-hoa-tu-nhien-viet-nam',
                image: bai4,
                name: 'Bài 4. Thực hành: Viết báo cáo về sự phân hóa tự nhiên Việt Nam',
                toExam: '/part-1/trac-nghiem-bai-4',
                numbersOfSlide: 6,
                numbersOfExam: questions[3].length,
                onClickLesson: function() {
                    return (
                        <>
                            <h3>{this.name}</h3>
                            <iframe title='slide' src="https://onedrive.live.com/embed?resid=3B0B639695C9809E%21123&amp;authkey=!AOcRyEJOMokxfaA&amp;em=2&amp;wdAr=1.7777777777777777" frameBorder="0" width="100%" height="100%" allowFullScreen={true}></iframe>
                        </>
                    )
                },
                onClickExam: function() {
                    return (
                        <div>
                            <h3>Trắc nghiệm: {this.name}</h3>
                            <Exam questions={questions[3]}  quantity={this.numbersOfExam} id={this.id}/>
                        </div>
                    )
                }
            },
            {
                id: 5,
                toLesson: '/part-1/bai-5-van-de-su-dung-hop-li-tai-nguyen-thien-nhien-va-bao-ve-moi-truong',
                image: bai5,
                name: 'Bài 5. Vấn đề sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường',
                toExam: '/part-1/trac-nghiem-bai-5',
                numbersOfSlide: 6,
                numbersOfExam: questions[4].length,
                onClickLesson: function() {
                    return (
                        <>
                            <h3>{this.name}</h3>
                            <iframe title='slide' src="https://onedrive.live.com/embed?resid=3B0B639695C9809E%21126&amp;authkey=!AC5kED9eSAgJv6c&amp;em=2&amp;wdAr=1.7777777777777777" frameBorder="0" width="100%" height="100%" allowFullScreen={true}></iframe>
                        </>
                    )
                },
                onClickExam: function() {
                    return (
                        <div>
                            <h3>Trắc nghiệm: {this.name}</h3>
                            <Exam questions={questions[4]}  quantity={this.numbersOfExam} id={this.id}/>
                        </div>
                    )
                },
                content: (
                    <div>
                        <p>
                            <b>Tham khảo:</b>
                            <ul>
                                <li><a href='https://monre.gov.vn/VanBan/Lists/VanBanChiDao/Attachments/3012/b4_Signed.pdf' target='_blank' rel='noreferrer'>Biếu số 04: HIỆN TRẠNG SỬ DỤNG ĐẤT CẢ NƯỚC THEO CÁC VÙNG ĐỊA LÝ TỰ NHIÊN - KINH TẾ TÍNH ĐẾN NGÀY 31 THÁNG 12 NĂM 2022</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/Danh_m%E1%BB%A5c_s%C3%A1ch_%C4%91%E1%BB%8F_%C4%91%E1%BB%99ng_v%E1%BA%ADt_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Danh mục sách đỏ động vật Việt Nam</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/H%E1%BB%87_%C4%91%E1%BB%99ng_v%E1%BA%ADt_Vi%E1%BB%87t_Nam' target='_blank' rel='noreferrer'>Hệ động vật Việt Nam</a></li>
                                <li><a href='https://vi.wikipedia.org/wiki/T%C3%A0i_nguy%C3%AAn_n%C6%B0%E1%BB%9Bc' target='_blank' rel='noreferrer'>Tài nguyên nước</a></li>
                            </ul>
                        </p>
                    </div>
                )
            }
        ]
    }
]