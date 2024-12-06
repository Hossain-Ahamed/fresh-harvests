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
const ProductsDataUpdate = ({ data, axiosSecure, refetch }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {

        const images = data.images.split[' '];
        const uploadData = {
            ...data,
            images
        }
        axiosSecure.put(`/prodcuts/${data.id}`, uploadData)
            .then(data => {
                toast.success('Successully updated');
                refetch();
                onOpenChange()

            })
            .catch(e => {
                toast.error('Error occured')
            })


    }

    return (
        <>
            <button onClick={onOpen} className="inline-flex ml-3 cursor-pointer text-gray-500"><EditIcon /></button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <ModalHeader className="flex flex-col gap-1">Update Category</ModalHeader>
                                <ModalBody>
                                    <div>
                                        <label className="body-2 text-black">Product Name</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter Product Name"
                                                defaultValue={data?.productName}
                                                {...register("productName", {
                                                    required: "*productName is required",
                                                })}
                                            />

                                            {errors.productName?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.productName.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label className="body-2 text-black">Price</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter Price"
                                                defaultValue={data?.price}
                                                {...register("price", {
                                                    required: "*price is required",
                                                })}
                                            />

                                            {errors.price?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.price.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label className="body-2 text-black">stock</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter stock"
                                                defaultValue={data?.stock}
                                                {...register("stock", {
                                                    required: "*stock is required",
                                                })}
                                            />

                                            {errors.stock?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.stock.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label className="body-2 text-black">categoryId</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter categoryId"
                                                defaultValue={data?.categoryId}
                                                {...register("categoryId", {
                                                    required: "*categoryId is required",
                                                })}
                                            />

                                            {errors.categoryId?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.categoryId.message}</p>)}

                                        </div>
                                    </div>
                                    <div>
                                        <label className="body-2 text-black">images</label>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-grey-50 p-4 body-2"
                                                placeholder="Enter images"
                                                defaultValue={data?.images}
                                                {...register("images", {
                                                    required: "*images is required",
                                                })}
                                            />

                                            {errors.images?.type === "required" && (<p className='m-0 p-0 pl-1  pt-1 text-red-500 text-xs' role="alert">{errors.images.message}</p>)}

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

export default ProductsDataUpdate;