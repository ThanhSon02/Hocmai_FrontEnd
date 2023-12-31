/* eslint-disable no-useless-escape */
import { FcGoogle } from "react-icons/fc";
import "./RegisterPage.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Họ và tên không được để trống"),
    email: yup
        .string()
        .required("Email không được để trống")
        .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Định dạng email không hợp lệ"
        ),
    phone: yup
        .string()
        .required("Số điện thoại không được để trống")
        .matches(
            /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
            "Số điện thoại không hợp lệ"
        ),
    pwd: yup.string().required("Mật khẩu không được để trống"),
    confirm_pwd: yup
        .string()
        .oneOf(
            [yup.ref("pwd")],
            "Xác nhận mật khẩu không khớp. Vui long nhập lại"
        ),
});
function RegisterPage() {
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
                    <div className="title">Tạo tài khoản của bạn</div>
                    <div className="sub-title">
                        <p>Học tập và giao lưu với hàng triệu học viên trên</p>
                        <p>mọi miền đất nước</p>
                    </div>
                    <div className="sso-btn">
                        <button>
                            <div>
                                <FcGoogle />
                                <span>Đăng ký qua Google</span>
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
                        <div className="name-input">
                            <input
                                {...register("name")}
                                placeholder="Họ và tên"
                            />
                            <span>{errors.name?.message}</span>
                        </div>
                        <div className="email-input">
                            <input {...register("email")} placeholder="Email" />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div className="phone-input">
                            <input
                                {...register("phone")}
                                placeholder="Số điện thoại"
                            />
                            <span>{errors.phone?.message}</span>
                        </div>
                        <div className="pwd-input">
                            <div>
                                <input
                                    type="password"
                                    {...register("pwd")}
                                    placeholder="Mật khẩu"
                                />
                                <span>{errors.pwd?.message}</span>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    {...register("confirm_pwd")}
                                    placeholder="Xác nhận mật khẩu"
                                />
                                <span>{errors.confirm_pwd?.message}</span>
                            </div>
                        </div>
                        <button className="submit-btn" type="submit">
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
