import { useEffect, useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable, Alert } from "../../components";

import { CategoryService } from "../../../repositories";
import { CategoryAdd } from "../../../views";
const List = () => {
  const Title = "Category";
  const [anchorEl, setAnchorEl] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [clickedRow, setClickedRow] = useState(null);
  const [show, setShow] = useState(null);
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    title: "",
    description: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const breadcrumb = [{ name: `${Title} List` }];
  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = () => {
    CategoryService.get().then((data) => {
      setRows(data);
    });
  };

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 400 },
    {
      field: "status",
      headerName: "Status",
      width: 300,
      renderCell: (params) =>
        params.row.status === "1" ? (
          <span className="badge badge-glow bg-primary">Active</span>
        ) : (
          <span className="badge badge-glow bg-danger">Inactive</span>
        ),
    },
    {
      field: "image",
      headerName: "Thumbnail",
      width: 300,
      renderCell: (params) => (
        <img
          src={`/src/assets/uploads/categories/${params.row.image}`}
          alt=""
          style={{ height: 50, width: "auto" }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <FaEllipsisV
            variant="outlined"
            size={20}
            onClick={(event) => handleMenuClick(event, params.row._id)}
          />
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem key={index} onClick={menuItem.onClick}>
                {menuItem.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ),
    },
  ];
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditAction = (id) => {
    const rowIndex = rows.findIndex((row) => row._id === id);
    handleClose();
    setFormData(rows[rowIndex]);
    setEditMode(true);
    setShow(true);
  };

  const handleDeleteAction = (id) => {
    CategoryService.delete(id)
      .then(() => {
        fetchCategoryList();
        Alert("success", `${Title} has been deleted successfully`);
        handleClose();
      })
      .catch((error) => {});
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };
  const handleOpenModal = () => {
    setShow(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const menuItems = useMemo(
    () => [
      { label: "Edit", onClick: () => handleEditAction(clickedRow) },
      { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
      // Add more items as needed
    ],
    [clickedRow]
  );
  const handleModalSubmit = (formData) => {
    if (editMode) {
      // If in edit mode, update existing admin
      CategoryService.update(clickedRow, formData)
        .then(() => {
          setErrors({});
          handleCloseModal();
          Alert("success", `${Title} has been updated successfully`);
          fetchCategoryList();
          handleClose();
          // Optionally, you can redirect or perform other actions after successful update
        })
        .catch((error) => {
          handleErrors(error);
        });
    } else {
      // If not in edit mode, create new admin
      CategoryService.create(formData)
        .then(() => {
          setErrors({});
          handleCloseModal();
          Alert("success", `${Title} data has been created successfully`);
          fetchCategoryList();
          handleClose();
          // Optionally, you can redirect or perform other actions after successful addition
        })
        .catch((error) => {
          handleErrors(error);
        });
    }
    // Handle form submission logic here
  };
  const handleErrors = (error) => {
    if (error.status === 422) {
      const newErrors = {};
      error.data.data.forEach((item) => {
        const fieldName = item.path;
        const errorMsg = item.msg;
        newErrors[fieldName] = errorMsg;
      });
      setErrors(newErrors);
    } else {
      Alert("error", `Error performing. Please try again.`);
    }
  };
  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title={`${Title} Management`} />
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              Create New
            </button>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="row">
          <div className="col-12">
            <section className="invoice-list-wrapper">
              <div className="card">
                <div className="card-datatable table-responsive">
                  <DataTable columns={columns} rows={rows} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CategoryAdd
        editMode={editMode}
        initialFormData={formData}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        errors={errors}
        show={show}
      />
    </div>
  );
};

export default List;
