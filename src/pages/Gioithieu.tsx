import { Col, Row } from 'antd';
import React from 'react';

function Gioithieu() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Giới thiệu</h2>
            <p className="text-gray-600 mb-4">Đây là video giới thiệu về Quỳnh Lưu</p>
            <div className="flex justify-center w-full">
                <iframe
                    className="w-[800px] h-[450px] rounded-lg"
                    src="https://www.youtube.com/embed/RV06_tFVl9Y"
                    title="Video giới thiệu"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div>
            <div className='py-20 px-20 '>
                <h2>Một số Link và thông tin tham kảo thêm</h2>
                <Row className='py-10'>
                    <Col span={4}>
                        {/* Image added here */}
                        <img
                            src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/365284727_308489525027801_7861884749290442490_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfLWCY-tAp9HLr3cLf9ZPkTCumMSd3Ak9MK6YxJ3cCTw_Q9aApT4fvhFSQksT4buU1Luh2H-ul4symRA9ByVml&_nc_ohc=U0N0N4iYITkQ7kNvgE0hquU&_nc_oc=AdirDG0pyR93VCYGLFAw0qGbJeRKNBTlezAUauK_OVxXLdYdMrS3JFIO6Kgo0lyItrfe_JIf4agpNKU7uUXxfskS&_nc_zt=23&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=A4VCy3uAyz26_P8zjja7eCE&oh=00_AYB2zExBWmug0-mPMUn6nd3aUwvYacnNQKMk9UZFL9st9A&oe=67BA0378"
                            alt="Placeholder"
                            className="w-full rounded-lg"
                        />
                    </Col>
                    <Col span={20}>
                        {/* Link added here */}
                        <a
                            href="https://web.facebook.com/photo/?fbid=308485238361563&set=pcb.308489438361143"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline"
                        >
                            https://web.facebook.com/photo/?fbid=308485238361563&set=pcb.308489438361143
                        </a>
                    </Col>
                </Row>
                <Row className='py-10'>
                    <Col span={4}>
                        {/* Image added here */}
                        <img
                            src="https://ngheandost.gov.vn/uploads/khxhnvna/2024_07/image-20240718145532-1.jpeg"
                            alt="Placeholder"
                            className="w-full rounded-lg"
                        />
                    </Col>
                    <Col span={20}>
                        {/* Link added here */}
                        <a
                            href="https://ngheandost.gov.vn/khxhnvna/dat-va-nguoi-xu-nghe/quynh-luu-mot-vung-san-vat-82.html#:~:text=Qu%E1%BB%B3nh%20L%C6%B0u%20l%C3%A0%20huy%E1%BB%87n%20l%E1%BB%9Bn,v%C3%B9ng%20%C4%91%E1%BB%93i%20n%C3%BAi%20r%E1%BB%99ng%20l%E1%BB%9Bn."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline"
                        >
                            https://ngheandost.gov.vn/khxhnvna/dat-va-nguoi-xu-nghe/quynh-luu-mot-vung-san-vat-82.
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        {/* Image added here */}
                        <img
                            src=" https://storage-vnportal.vnpt.vn/nbh-ubnd/2698/Anh/Di%20t%C3%ADch%20c%E1%BA%A5p%20Qu%E1%BB%91c%20gia/2.jpg"
                            alt="Placeholder"
                            className="w-full rounded-lg"
                        />
                    </Col>
                    <Col span={20}>
                        {/* Link added here */}
                        <a
                            href="http://quynhluu.nhoquan.ninhbinh.gov.vn/di-tich-lich-su-van-hoa/di-tich-lich-su-van-hoa-cap-quoc-gia-dia-diem-lich-su-khu-can-cu-cach-mang-quynh-luu-noi-diem-de-345644"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline"
                        >
                            http://quynhluu.nhoquan.ninhbinh.gov.vn/di-tich-lich-su-van-hoa
                        </a>
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Gioithieu;
