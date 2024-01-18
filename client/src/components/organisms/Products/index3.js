import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from './index3';


const Index3 = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
            const categories = response.data.categories;
            setCategories(categories);
        } catch(error) {
          console.log(error);
        }

    }
    fetchCategories()
  }, []);
  return(
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md mt-4">
        <h3 className="py-4 font-medium text-lg"> Sách hay mỗi ngày</h3>
        <Button />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <div className=" w-1/7 w-[144px] border rounded-lg h-[304px] bg-gray-100 cursor-pointer bg-cover object-cover">
              <img
                className="rounded-t-lg w-full h-[148px]"
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />
              <div className="py-[4px] px-2">
                <img
                  className="w-[89p] h-[20px]"
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                />
              </div>
              <div className="px-2 flex flex-col w-full h-[80px]">
                <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                  {category.strCategoryDescription}
                </p>
                <div className="flex">
                  <div className="font-medium">441.000</div>
                  <sup className="top-[0.5em]">đ</sup>
                </div>{" "}
              </div>
              <div className="border-t-[1px] py-2 w-[135px] h-[35px]  mx-2">
                <p className="font-medium text-gray-400 text-xs">
                  Giao thứ 2, 15/01
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Index3;