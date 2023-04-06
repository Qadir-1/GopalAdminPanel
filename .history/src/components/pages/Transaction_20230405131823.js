import React from 'react'
import { Button, Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const Transaction = () => {
  return (
   <>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <p style={{ fontSize: "20px", color: "black" }}>
          All Transaction
        </p>
      </div>

      <div
          style={{
            width: "100%",
            overflow: "auto",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>User</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actual Price</th>
                <th>Ratings</th>
                <th>Packs</th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>Food Name</td>
                <td>Lorem Ipsum </td>
                <td>₹525.0 </td>
                <td>₹229.5</td>
                <td>5</td>
                <td>
                    <p>10 Pack</p>
                    <p>15 Pack</p>
                    <p>20 Pack</p>
                    
                </td>
                <td>15%</td>
                <td>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
   </>
  )
}

export default HOC(Transaction)