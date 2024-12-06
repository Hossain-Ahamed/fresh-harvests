
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import LoadingPage from "../../Others/LoadingPage";
import Error from "../../Others/Error";
import CategoryDataRow from "./CategoryDataRow";
import UploadCategory from "./UploadCategory";

const Category = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/category`);
            // return res?.data;


            const res ={
                "success": true,
                "message": "Categories retrieve successfully!",
                "data": [
                    {
                        "id": "6751516f9c52879c1fde6558",
                        "categoryName": "fruits",
                        "createdAt": "2024-12-05T07:08:31.499Z",
                        "updatedAt": "2024-12-05T07:08:31.499Z"
                    },
                    {
                        "id": "6751569e0e539396658e60a9",
                        "categoryName": "Salad",
                        "createdAt": "2024-12-05T07:30:38.699Z",
                        "updatedAt": "2024-12-05T07:30:38.699Z"
                    },
                    {
                        "id": "6751584feaeaa5cc21bbe21b",
                        "categoryName": "Vegetable",
                        "createdAt": "2024-12-05T07:37:51.344Z",
                        "updatedAt": "2024-12-05T07:37:51.344Z"
                    }
                ]
            }
            return res.data;
        },


    });


    if (isLoading) return <LoadingPage />
    if (error) return <Error />
    return (
        <div>
            <div className='w-full p-3 lg:pl-24 mb-0 bg-gray-200 user-select-none flex justify-between'>
                <h2 className='inline '>Category</h2>
                <UploadCategory axiosSecure={axiosSecure} refetch={refetch}/>
            </div>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal '
                  >
                     Title
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                  >ID</th>
                 
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                  >
                    Action
                  </th>
                </tr>
              </thead>
            <tbody>{data && Array.isArray(data) && data.map(i => <CategoryDataRow key={i.id} data={i} axiosSecure={axiosSecure} refetch={refetch} />)}</tbody> 
            </table>

        </div>
    );
};

export default Category;
