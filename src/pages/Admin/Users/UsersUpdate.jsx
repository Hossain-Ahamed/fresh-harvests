import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { EditIcon } from '../../../components/EditIcon';
import toast from 'react-hot-toast';

const UsersUpdate = ({ data, axiosSecure, refetch }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
     
        const uploadData = {

            userName : data.userName,
            fullName : data.fullName,
            email : data.email,
            phoneNumber : data.phoneNumber,
            profileImage : data.profileImage,

        }
        axiosSecure.put(`/users/${data.id}`, uploadData)
            .then(data => {
                toast.success('Successully deleted');
                refetch();
                onOpenChange()

            })
            .catch(e => {
                toast.error('Error occured')
            })
        console.log(data)


    }

    return (
        <>
            <button onClick={onOpen} className="inline-flex ml-3 cursor-pointer text-gray-500"><EditIcon /></button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <ModalHeader className="flex flex-col gap-1">Update User</ModalHeader>
                                <ModalBody>
                                    <div>
                                        <label htmlFor="email" className="body-2 text-black">User Name</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter User Name"
                                                defaultValue={data?.userName}
                                                {...register("userName", {
                                                    required: "*userName is required",
                                                })}
                                            />

                                            {errors.userName?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.userName.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="body-2 text-black">Full Name</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter Full Name"
                                                defaultValue={data?.fullName}
                                                {...register("fullName", {
                                                    required: "*fullName is required",
                                                })}
                                            />

                                            {errors.fullName?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.fullName.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="body-2 text-black">Email</label>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter email address"
                                                defaultValue={data?.email}
                                                {...register("email", {
                                                    required: "*email is required",
                                                })}
                                            />

                                            {errors.email?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.email.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label className="body-2 text-black">Phone number</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter phone number"
                                                defaultValue={data?.phoneNumber}
                                                {...register("phoneNumber", {
                                                    required: "*phoneNumber is required",
                                                })}
                                            />

                                            {errors.phoneNumber?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.phoneNumber.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="body-2 text-black">Profile Image link</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter Profile image url"
                                                defaultValue={data?.profileImage}
                                                {...register("profileImage", {
                                                    required: "*profileImage is required",
                                                })}
                                            />

                                            {errors.profileImage?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.profileImage.message}</p>)}

                                        </div>
                                    </div>

                                </ModalBody>
                                <ModalFooter>

                                    <Button color="primary" type='submit'>
                                        Update
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default UsersUpdate;