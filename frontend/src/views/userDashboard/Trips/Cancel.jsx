import React from "react";
import Swal from "sweetalert2";
import { TripService } from "../../../repositories";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

const Cancel = () => {
  const { tripId } = useParams();

  const handleCancel = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, leave it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          TripService.refund(tripId).then((data) => {
            if (data.status === "succeeded") {
              swalWithBootstrapButtons.fire({
                title: "Cancelled!",
                text: "Your trip has been cancelled. Your  refund will be processed soon.",
                icon: "success",
              });
            }
          });
        }
      });
  };

  return (
    <>
      <button className="btn btn-danger" onClick={handleCancel}>
        Cancel Trip
      </button>
    </>
  );
};

export default Cancel;
