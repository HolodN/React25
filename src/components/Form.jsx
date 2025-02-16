/* eslint eqeqeq: 0 */
import React from 'react';
import {useForm} from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import {CircleMarker, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip} from 'react-leaflet'

const center = [47.282081, 39.702356]
const colorOptions={color:'purple'}
const centerPolygon=[
    [
        [47.283175, 39.698214],
        [47.283780, 39.712938],
        [47.277606, 39.721148],
        [47.272941, 39.707054]
    ]
]

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
            <div style={{ width: '90%', margin: '0 auto' }}>
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

                    <div className="input-group mb-3">
                        <input
                            {...register('firstName',{
                                required: true,
                                maxLength: 50,
                                pattern: /^[А-Яа-я]+$/i
                            })}
                            type={'text'}
                            className={'form-control'}
                            placeholder='Имя' />
                    </div>
                    {errors?.firstName?.type == 'required'&&(
                        <p>Поле обязательно для заполнения</p>
                    )}
                    {errors?.firstName?.type == 'maxLength'&&(
                        <p>Поле не может содержать более 50 символов</p>
                    )}
                    {errors?.firstName?.type == 'pattern'&&(
                        <p>Поле заполнено некорректно</p>
                    )}

                    <div className="input-group mb-3">
                        <input
                            {...register('middleName',{
                                required: true,
                                maxLength: 50,
                                pattern: /^[А-Яа-я]+$/i
                            })}
                            type={'text'}
                            className={'form-control'}
                            placeholder='Отчество' />

                    </div>
                    {errors?.middleName?.type == 'required'&&(
                        <p>Поле обязательно для заполнения</p>
                    )}
                    {errors?.middleName?.type == 'maxLength'&&(
                        <p>Поле не может содержать более 50 символов</p>
                    )}
                    {errors?.middleName?.type == 'pattern'&&(
                        <p>Поле заполнено некорректно</p>
                    )}

                    <div className="input-group mb-3">
                        <input
                            {...register('email',{
                                required: true,
                                maxLength: 50,
                                pattern: /^[A-Za-z@._-]+$/i
                            })}
                            type={'text'}
                            className={'form-control'}
                            placeholder='Email' />

                    </div>
                    {errors?.email?.type == 'required'&&(
                        <p>Поле обязательно для заполнения</p>
                    )}
                    {errors?.email?.type == 'maxLength'&&(
                        <p>Поле не может содержать более 50 символов</p>
                    )}
                    {errors?.email?.type == 'pattern'&&(
                        <p>Поле заполнено некорректно</p>
                    )}

                    <div>
                        <input className='btn btn-outline-primary' type="submit" />
                    </div>
                </form>
                <MapContainer center={center} zoom={13} style={{width:'90vw', height:'500px', margin: '20px auto'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CircleMarker
                        center={center}
                        pathOptions={{fillColor: 'blue'}} radius={200}
                    />
                    <Marker position={center}>
                        <Popup>Дом</Popup>
                        <Tooltip>При наведении</Tooltip>
                    </Marker>
                    <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
                </MapContainer>
            </div>
    );

};

export default Form;
