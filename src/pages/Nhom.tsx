import React from "react";

const Nhom: React.FC = () => {
    const names = [
        "Khánh Linh",
        "Hoàng Hiệp",
        "Đức Mua",
        "Hồ Anh",
        "Ngọc Ánh",
        "Long Nhật",
        "Việt Phát",
        "Văn Hùng",
        "Chu Hương",
        "Trương Yến",
        "Thu Huyền"
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300">
            <div className="p-8 bg-white rounded-xl shadow-xl max-w-xl w-full">
                <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-8 decoration-underline decoration-4">
                    Danh Sách Thành Viên 🌸
                </h2>
                <ul className="space-y-6">
                    {names.map((name, index) => (
                        <li
                            key={index}
                            className="flex items-center space-x-4 text-xl font-semibold text-teal-800 hover:text-pink-600 transition-all ease-in-out duration-300 hover:transform hover:scale-105"
                        >
                            {/* Decorative Flower Icon */}
                            <span className="text-2xl text-pink-500">🌺</span>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nhom;
