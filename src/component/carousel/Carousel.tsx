import React from 'react';
import { Carousel } from 'antd';

const Carouselapp: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div className="w-5/5 "> {/* Khung Carousel căn giữa */}
            <Carousel className="h-[350px]" afterChange={onChange} autoplay autoplaySpeed={1000}> {/* Chuyển slide mỗi 1 giây */}
                <div className="h-[350px] overflow-hidden">
                    <img
                        src="https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/62946dd51a1b855737a8136c/content_danh-gia-truong-thpt-quynh-luu-3-nghe-an-co-tot-khong__2_.jpg"

                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-[350px] overflow-hidden">
                    <img
                        src="https://datafiles.nghean.gov.vn/nan-ubnd/2814/quantritintuc20238/12327e91da6376f1f36bbcae6504c8638290107364182712.jpg"

                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-[350px] overflow-hidden">
                    <img
                        src="https://datafiles.nghean.gov.vn/nan-ubnd/2298/quantritintuc20244/a3%20(3)638485434090715961.jpg"

                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-[350px] overflow-hidden">
                    <img
                        src="https://lienminhhoptacxanghean.org.vn/uploads/news/2022_05/image-20220527221003-1.jpeg"

                        className="h-full w-full object-cover"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Carouselapp;
