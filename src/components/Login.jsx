import { Formik, ErrorMessage, Form, Field } from "formik"
import { useContext, useState } from "react"
import * as Yup from "yup"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import AuthService from "../services/Auth.service"

function login() {
    const intialLoginValues = {
        userName: "",
        password: ""
    }
    const { loginClick, currentDate, setcurrentDate } = useContext(UserContext);

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const loginValidationSchema = Yup.object(
        {
            userName: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }
    )

    const onLogin = (frm) => {
        //   if(frm.userName==="admin" && frm.password==="admin")
        //   {
        //     setMessage('Login Successful');
        //     loginClick(frm.userName);
        //     navigate('/formikform');
        //   }
        //   else{
        //     setMessage('Login failed');
        //   }
        AuthService.authenticateLoginUser(frm)
            .then(response => {
                if (response.status === 200) {
                    setMessage('Login Successful');
                    loginClick(response.data);
                    navigate('/dataBinding');
                }
                else
                    setMessage('Incorrect Username and password');
            }
            )
    }

    return (<>

        <Formik initialValues={intialLoginValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => onLogin(values)}>

            <Form >
                <div className="form-group">
                    <label className="form-control" >Enter Username</label>
                    <Field className="form-control" name="userName" type="text" />
                    <ErrorMessage name="userName" component="label" className="text text-danger">

                    </ErrorMessage>
                </div>
                <div>
                    <label className="form-control" >Enter Password</label>
                    <Field className="form-control" name="password" type="text" />
                    <ErrorMessage name="password" component="label" className="text text-danger">

                    </ErrorMessage>
                </div>
                <input type="submit" value="Login" className="btn btn-warning" />
            </Form>

        </Formik>
        {message && <div className="alert alert-success">{message}</div>}
    </>)


}

export default login;