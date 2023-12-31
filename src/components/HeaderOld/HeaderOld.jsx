import "./HeaderOld.scss";
import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillBell } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";

function HeaderOld() {
    const [isLogin, setIslogin] = useState(false);

    return (
        <div className="bg-primary">
            <div className="container-xl g-xl-0 align-items-center d-flex justify-content-between py-2-5">
                <div className="left-header d-flex justify-content-between gap-3">
                    <div className="course-menu d-flex justify-content-between align-items-center">
                        <div className="active-menu">
                            <BiMenu fill="#fff" size={20} />
                        </div>
                        <div className="menu-container"></div>
                    </div>
                    <div className="search">
                        <div className="only-search-icon">
                            <BsSearch fill="#fff" size={20} />
                        </div>
                        <div className="bg-white search-input">
                            <input type="text" className="" />
                            <BsSearch fill="#777" size={20} />
                        </div>
                    </div>
                </div>
                <Link to={"/"} className="center-header" />
                <div className="right-header">
                    {isLogin ? (
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <Link>
                                <AiFillBell fill="#fff" size={20} />
                            </Link>
                            <div>
                                <Link className="mobile-action-tool">
                                    <AiFillCaretDown fill="#fff" size={20} />
                                </Link>
                                <div className="pc-action-tool gap-3">
                                    <Link>
                                        <BiSolidBookAlt fill="#fff" size={20} />
                                    </Link>
                                    <Link>
                                        <BiSolidUser fill="#fff" size={20} />
                                    </Link>
                                    <Link>
                                        <HiOutlineLogout
                                            stroke="#fff"
                                            size={20}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center">
                            <div className="pc-sign-in-up justify-content-between align-items-center gap-3">
                                <Link to={"/login"} className="sign-in-btn">
                                    <span className="text-white fw-bold">
                                        Đăng nhập
                                    </span>
                                </Link>
                                <Link to={"/register"} className="sign-up-btn">
                                    <span className="text-white fw-bold">
                                        Đăng ký
                                    </span>
                                </Link>
                            </div>
                            <Link className="mobile-sign-in-up">
                                <AiFillCaretDown
                                    fill="#fff"
                                    size={20}
                                    className="mobile-action-tool"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderOld;
