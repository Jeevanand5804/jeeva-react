import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  Modal,
  CardContent,

} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function StudentCourse() {
  const [dept, setDept] = useState("");
  const [title, setTitle] = useState("");
  const [fees, setFees] = useState("");
  const [courses, setCourses] = useState([]);
  const [editFormData, setEditFormData] = useState({
    courseId: "",
    dept: "",
    title: "",
    fees: "",
  });
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
   

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/createCourse", {
        dept,
        title,
        fees,
      })
      .then((response) => {
        fetchCourses();
        setCourses((prevCourses) => [...prevCourses, response.data]);
        setDept("");
        setTitle("");
        setFees("");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deleteCourse/${id}`)
      .then((response) => {
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course._id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getCourse");
      const filterCourse = response.data.filter(
        (courses) => courses.dept && courses.dept.trim() !== ""
      );
      setCourses(filterCourse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  const handleEdit = (course) => {
    setEditFormData({
      courseId: course._id,
      dept: course.dept,
      title: course.title,
      fees: course.fees,
    });
    setIsEditFormOpen(true);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:3000/editCourse/${editFormData.courseId}`,
        editFormData
      )
      .then((response) => {
        const updatedCourses = courses.map((course) => {
          if (course._id === editFormData.courseId) {
            return {
              ...course,
              dept: editFormData.dept,
              title: editFormData.title,
              fees: editFormData.fees,
            };
          }
          return course;
        });
        setCourses(updatedCourses);
        handleEditFormClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
    setEditFormData({
      courseId: "",
      dept: "",
      title: "",
      fees: "",
    });
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{ borderRight: "3px solid black", height: "100vh" }}
        >
          <Box
            elevation={3}
            sx={{
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:"10px",
              boxShadow: "5px 5px 25px rgba(0, 0, 0, 0.2)",
              padding: "16px",
              width: "400px",
              margin: "100px",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="div"
                align="center"
                gutterBottom
              >
                Courses
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Dept"
                  fullWidth
                  margin="normal"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                />
                <TextField
                  label="Title"
                  fullWidth
                  margin="normal"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  label="Fees"
                  fullWidth
                  margin="normal"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {courses.length > 0 ? (
              courses.map((course) => (
                <Grid item xs={12} md={4} key={course._id}>
                  <Card
                    sx={{
                      marginTop: 5,
                      backgroundColor: "whitesmoke",
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1" component="div">
                        Dept:{course.dept}
                      </Typography>
                      <Typography variant="body2">
                        Title:{course.title}
                      </Typography>
                      <Typography variant="body3">
                        Fees:{course.fees}
                      </Typography>
                      <hr />
                      <DeleteOutlineIcon
                        variant="outlined"
                        sx={{ color: "#ff0000", float: "right" }}
                        onClick={() => handleDelete(course._id)}
                      >
                        Delete
                      </DeleteOutlineIcon>
                      <EditIcon
                        sx={{
                          color: "blue",
                          float: "right",
                          marginRight: "10px",
                        }}
                        onClick={() => handleEdit(course)}
                      ></EditIcon>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" sx={{ margin: "100px" }}>
                  No courses available (or) connection error
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* Edit Modal */}
      <Modal
        open={isEditFormOpen}
        onClose={handleEditFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            alignContent: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Edit Course</Typography>
          <form onSubmit={handleEditSubmit}>
            <TextField
              label="Dept"
              fullWidth
              margin="normal"
              name="dept"
              value={editFormData.dept}
              onChange={(e) =>
                setEditFormData({ ...editFormData, dept: e.target.value })
              }
            />
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              name="title"
              value={editFormData.title}
              onChange={(e) =>
                setEditFormData({ ...editFormData, title: e.target.value })
              }
            />
            <TextField
              label="Fees"
              fullWidth
              margin="normal"
              name="fees"
              value={editFormData.fees}
              onChange={(e) =>
                setEditFormData({ ...editFormData, fees: e.target.value })
              }
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ marginBottom: "5px", float: "right" }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleEditFormClose}
              sx={{ marginBottom: " 5px", float: "right", marginRight: "5px" }}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default StudentCourse;