import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it

        return (
            <div>
                <form id='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Заполните заявку на обратную связь</h1>
                    <div className="input-group mb-3">
                        <input
                            {...register('lastName',{
                                required: true,
                                maxLength: 50,
                                pattern: /^[А-Яа-я]+$/i
                            })}
                            type={'text'}
                            className={'form-control'}
                            placeholder='Фамилия' />
                    </div>
                    {errors?.lastName?.type == 'required'&&(
                        <p>Поле обязательно для заполнения</p>
                    )}
                    {errors?.lastName?.type == 'maxLength'&&(
                        <p>Поле не может содержать более 50 символов</p>
                    )}
                    {errors?.lastName?.type == 'pattern'&&(
                        <p>Поле заполнено некорректно</p>
                    )}
                    <input className='btn btn-outline-primary' type="submit" />
                </form>
            </div>
    );
};

export default Form;