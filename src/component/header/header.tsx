import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <><header className="flex justify-center items-center px-6 py-4 bg-white shadow-md">
            <img
                src="public/951165fc-fae4-4c5b-9d8e-3010e77da74d.jpg"
                alt="EundeParfum"
                className="h-10 w-auto"
            />
            <h2 className="text-4xl  ml-4 font-grechen">Quỳnh Lưu Mãi Đỉnh</h2>

        </header>
            <nav className="flex justify-center items-center px-6 py-4 bg-white shadow-md gap-10">
                <Link to="/" className="text-lg text-gray-700 hover:text-green-400">Trang chủ</Link>
                <Link to="/gioithieu" className="text-lg text-gray-700 hover:text-green-400">Giới Thiệu</Link>

                <Link to="/nhom" className="text-lg text-gray-700 hover:text-green-400">Nhóm</Link>
            </nav></>

    );
};

export default Header;
