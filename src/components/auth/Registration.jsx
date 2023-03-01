import {useForm} from "react-hook-form";
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import { auth } from '../../app/firebase'

const Registration = (props) => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            sendEmailVerification(userCredential.user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-modal">
            <div className="title-modal">Регистрация</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                    <label htmlFor="firstName">Имя:</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Введите ваше имя" 
                        {...register('firstName', {
                            required: "Параметр обязателен", 
                            maxLength: {
                                value: 20,
                                message: 'Ваше имя должно быть меньше 20 символов'
                            }, 
                            minLength: {
                                value: 3,
                                message: 'Ваше имя должно быть больше 3 символов'
                            } 
                        })}
                    />
                    {errors.firstName && <span className="error" role="alert">{errors.firstName?.message}</span>}
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email не подходит под нужный формат"
                            }
                        })}
                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                <div className="form-input">
                    <label htmlFor="login">Login: </label>
                    <input 
                        type="text" 
                        name="login" 
                        placeholder="Введите логин"
                        {...register("login", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /[A-Za-z]/,
                              message: "Логин должен содержать только латинские символы"
                            },
                            maxLength: 20, 
                            minLength: 3
                        })}
                    />
                    {errors.login && <span className="error" role="alert">{errors.login?.message}</span>}
                </div>
                <div className="form-input">
                    <label htmlFor="password">Пароль: </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 5,
                              message: "Минимальная длина пароля 5 символов"
                            }
                          })}
                    />
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className="form-input">
                    <label htmlFor="cpassword">Повторите пароль: </label>
                    <input 
                        type="password" 
                        name="cpassword" 
                        placeholder="Повторите пароль"
                        {...register("cpassword", {
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Ваши пароли не совпадают";
                                }
                            },
                            required: 'Параметр обязателен'
                        })}
                    />
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                </div>
                <div>
                    <label htmlFor="submit"></label>
                    <input type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )

};

export default Registration