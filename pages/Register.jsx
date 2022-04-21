import { useContext } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import blogPng from "../assets/blok.png";
import googlePng from "../assets/google.png";
import { AuthContext } from "../contexts/AuthContext";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const { signup,loginWithGoogle } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("No password provided")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  const handleSubmit = (values, { resetForm }) => {
    signup(values.email, values.password)
      .then(() => {
        navigate("/");
        toastSuccessNotify("Registered in successfully!");
      })
      .catch((error) => {
        toastErrorNotify(error);
      });
    resetForm();
  };

  const handleGoogleSingIn = () => {
    loginWithGoogle()
  }
  return (
    <Container className="login-container">
      <Box className="login-box">
        <Avatar
          className="login-avatar"
          alt="avatar_img"
          src={blogPng}
          sx={{ width: 156, height: 156 }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── Register ──
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    autoFocus
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    helperText={errors.email && touched.email}
                    error={touched.email && Boolean(errors.email)}
                    onBlur={handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    name="password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    helperText={errors.password && touched.password}
                    error={touched.password && Boolean(errors.password)}
                    onBlur={handleBlur}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    style={{ backgroundColor: "#046582", fontWeight: 700 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    // onClick={handleLogin}
                    fullWidth
                  >
                    Register
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={handleGoogleSingIn}
                    fullWidth
                  >
                    With{" "}
                    <img
                      src={googlePng}
                      alt="google"
                      style={{ width: "80px", marginLeft: "10px" }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Register;
