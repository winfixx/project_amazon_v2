import { observer } from 'mobx-react-lite'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, WELCOME_ROUTE } from '../../../utils/const'
import Button from '../button/Button'
import InputFormAuth from '../input/InputFormAuth'
import style from './FormAuth.module.css'

const FormAuth = observer(() => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm({ mode: 'onChange' })

    const location = useLocation()
    const isLoginPath = location.pathname === LOGIN_ROUTE

    const { onSubmit, isLoading } = useAuth(isLoginPath, WELCOME_ROUTE)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className={style.container}>
            <div className={style.auth}>
                <div>
                    {isLoginPath ?
                        <h2><b>Sign In</b></h2>
                        :
                        <h2><b>Create Account</b></h2>
                    }
                </div>
                <form
                    className={style.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {isLoginPath ?
                        <>
                            <InputFormAuth
                                title={'Email'}
                                label={'email'}
                                register={register}
                                required
                            />
                            <InputFormAuth
                                title={'Password'}
                                label={'password'}
                                register={register}
                                required
                            />
                        </>
                        :
                        <>
                            <InputFormAuth
                                title={'Full Name'}
                                label={'fullName'}
                                register={register}
                                required
                            />
                            {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
                            <InputFormAuth
                                title={'Mobile Number'}
                                label={'phone'}
                                register={register}
                                pattern={{
                                    value: /^[0-9+-]+$/, message: 'Please Enter A Valide Phone Number'
                                }}
                                required
                            />
                            {errors.email && <p className={style.error}>{errors.email.message}</p>}
                            <InputFormAuth
                                title={'Email'}
                                label={'email'}
                                register={register}
                                pattern={{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Enter A Valid Email!"
                                }}
                                required
                            />
                            {errors.password && <p className={style.error}>{errors.password.message}</p>}
                            <InputFormAuth
                                title={'Password'}
                                label={'password'}
                                register={register}
                                minLength={{
                                    value: 3, message: 'Minimum of 3 Symbol'
                                }}
                                maxLength={{
                                    value: 6, message: 'Maximum of 3 Symbol'
                                }}
                                required
                            />
                        </>
                    }
                    {isLoginPath ?
                        <Button title={'Sign In'} />
                        :
                        <Button title={'Continue'} />
                    }
                </form>
            </div>

            <div className={style.description}>
                <p><b>Amazon the world's largest online marketplace</b></p>
                {isLoginPath ?
                    <div>
                        <h4>New to Amazon?</h4>
                        <Button
                            path={REGISTRATION_ROUTE}
                            title={'Create your account here'}
                            reset={reset}
                        />
                    </div>
                    :
                    <div>
                        <h4>Already have an account?</h4>
                        <Button
                            path={LOGIN_ROUTE}
                            title={'Sign In'}
                            reset={reset}
                        />
                    </div>
                }
            </div>
        </div>
    )
})

export default FormAuth