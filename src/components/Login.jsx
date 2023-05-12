import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup';

function Login() {

    const validationSchema = Yup.object().shape({
        firstName : Yup.string().required("first name is required").matches()
    })

    const toastSubmit = () => {
        toast.success('Registered Successfully');
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            location: '',
            technology: '',
            profilePicture: ''
        },
        validationSchema,
        onSubmit: data => {
            toastSubmit();
            console.log(data);
        }
    })
    return (
        <>
            <ToastContainer />
            <Container>
                <Form className='mt-4' onSubmit={formik.handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicFirst'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter First Name'
                            name='firstName'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicLast'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicLocation'>
                        <Form.Label>Preferred Location</Form.Label>
                        <br />
                        <Form.Check
                            inline
                            label='Indore'
                            name='location'
                            type={'radio'}
                            id={`inline-radio-1`}
                            onChange={formik.handleChange}
                            value='Indore'
                        />
                        <Form.Check
                            inline
                            label='Pune'
                            name='location'
                            type={'radio'}
                            id={`inline-radio-2`}
                            onChange={formik.handleChange}
                            value='Pune'
                        />
                        <Form.Check
                            inline
                            name='location'
                            label='Mumbai'
                            type={'radio'}
                            id={`inline-radio-3`}
                            onChange={formik.handleChange}
                            value='Mumbai'
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicTech'>
                        <Form.Label>Choose your technologies</Form.Label>
                        <br />
                        <Form.Check
                            inline
                            label='Java'
                            name='technology'
                            type={'checkbox'}
                            id={`inline-checkbox-1`}
                            onChange={formik.handleChange}
                            value='Java'
                        />
                        <Form.Check
                            inline
                            label='Python'
                            name='technology'
                            type={'checkbox'}
                            id={`inline-checkbox-2`}
                            onChange={formik.handleChange}
                            value='Python'
                        />
                        <Form.Check
                            inline
                            name='technology'
                            label='JavaScript'
                            type={'checkbox'}
                            id={`inline-checkbox-3`}
                            onChange={formik.handleChange}
                            value='JavaScript'
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group controlId='formFile' className='mb-3'>
                        <Form.Label>Upload your profile picture</Form.Label>
                        <Form.Control
                            type='file'
                            name='profilePicture'
                            onChange={e => formik.setFieldValue('file', e.target.files[0])}
                        />
                    </Form.Group>
                    <hr />

                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Check me out' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mb-4'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login
