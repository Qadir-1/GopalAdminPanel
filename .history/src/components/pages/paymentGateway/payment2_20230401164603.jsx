/** @format */

import React from "react";
import BaseUrl from "../../BaseUrl";
import { useState, useEffect } from "react";
import HOC from "../../layout/HOC";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "../../Auth";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

const Payment2 = () => {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);
  const params = useParams();
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState(false);

  const url =
    "https://b7w3czz0m2.execute-api.ap-south-1.amazonaws.com/development/api/users/GetAllPaymentsByAdmin";

  const fetchDishes = async () => {
    try {
      const res = await axios.get(url, auth);
      //  console.log(res?.data?.details);
      setPayments(res?.data?.details);
      /* if (res?.data?.message) {
        setDishes([]);
        toast("No Dishes Found");
      } else {
        setDishes(res?.data);
      }*/
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (id) => {
    const url = BaseUrl() + `/api/admin/dishes/${id}`;
    try {
      const res = await axios.delete(url, auth);
      toast.success("Deleted Successfully");
      fetchDishes();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Payments
          </span>
        </div>
        <div>
          <div >
            <table >
              <thead>
                <tr >
                  <th>
                    Amount
                  </th>
                  <th>
                    Amount Paid
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Order Status
                  </th>
                  <th>
                    User
                  </th>
                  <th>
                    Restaurant Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900">
                      <td >
                        {e?.amount}
                      </td>
                      <td >
                        {e?.amount_paid}
                      </td>
                      <td >
                        {e?.date}
                      </td>
                      <td >
                        {e?.orderStatus}
                      </td>
                      <td >
                        {e?.userObject?.name}
                      </td>
                      <td >
                        {e?.restaurantObject?.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default HOC(Payment2);
