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
import { EditIcon } from '../../../components/EditIcon';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const UploadCategory = ({ axiosSecure, refetch }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        axiosSecure.post(`/category`, { categoryName: data.categoryName })
            .then(data => {
                toast.success('Successully deleted');
                refetch();
                onOpenChange()

            })
            .catch(e => {
                toast.error('Error occured')
            })


    }

    return (
        <>
            <button onClick={onOpen} className="inline-flex ml-3 cursor-pointer text-gray-500">Create One</button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <ModalHeader className="flex flex-col gap-1">Create Category</ModalHeader>
                                <ModalBody>
                                    <div>
                                        <label htmlFor="email" className="body-2 text-black">Name</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter category Name"

                                                {...register("categoryName", {
                                                    required: "*categoryName is required",
                                                })}
                                            />

                                            {errors.categoryName?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.categoryName.message}</p>)}

                                        </div>
                                    </div>

                                </ModalBody>
                                <ModalFooter>

                                    <Button color="primary" type='submit'>
                                        Create
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

export default UploadCategory;