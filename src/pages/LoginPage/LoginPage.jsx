/* eslint-disable no-useless-escape */
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginPage.scss";
import { Link } from "react-router-dom";

const schema = yup.object({
    email: yup
        .string()
        .required("Email không được để trống")
        .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Định dạng email không hợp lệ"
        ),

    pwd: yup.string().required("Mật khẩu không được để trống"),
});
function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="d-flex text-center mt-5 justify-content-center">
                <div className="register-container">
                    <div className="title">Đăng nhập vào tài khoản của bạn</div>
                    <div className="sub-title">
                        <p>Học tập và giao lưu với hàng triệu học viên trên</p>
                        <p>mọi miền đất nước</p>
                    </div>
                    <div className="sso-btn">
                        <button>
                            <div>
                                <FcGoogle />
                                <span>Đăng nhập qua Google</span>
                            </div>
                        </button>
                    </div>
                    <div className="separation">
                        <div className="line-left"></div>
                        <span>Hoặc</span>
                        <div className="line-right"></div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="form-register">
                        <div className="email-input">
                            <input {...register("email")} placeholder="Email" />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div className="pwd-input">
                            <input
                                type="password"
                                {...register("pwd")}
                                placeholder="Mật khẩu"
                            />
                            <span>{errors.pwd?.message}</span>
                        </div>
                        <button className="submit-btn" type="submit">
                            Đăng nhập
                        </button>
                    </form>
                    <Link className="forget-pwd">Quên mật khẩu</Link>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
