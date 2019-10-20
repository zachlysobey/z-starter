import React from 'react'
import { Formik, Form } from 'formik'

export const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
            const errors = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address'
            }
            return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 400)
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
        }) => (
            <Form>
                <h1>Hello, Formik!</h1>
                <pre>{JSON.stringify(values)}</pre>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name here..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email here..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </div>
            </Form>
        )}
    </Formik>
)
