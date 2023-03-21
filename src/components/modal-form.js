import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Formik} from "formik";


function ModalForm(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Formik
                 initialValues={{ name: '', email: '', age: '' }}
                 validate={values => {
                     const errors = {};
                     if (!values.email) {
                         errors.email = 'Required';
                     } else if (
                         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                     ) {
                         errors.email = 'Invalid email address';
                     }

                     if (!values.name) {
                         errors.name = 'Required';
                     }

                     if (!values.age) {
                         errors.age = 'Required';
                     }

                     return errors;
                 }}
                 onSubmit={(values, { setSubmitting }) => {
                     // handle add news member
                     console.log({values});
                     props.setMembers([...props.members, values]);
                 }}
             >
                 {({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting,
                       /* and other goodies */
                   }) => (
                     <form onSubmit={handleSubmit}>
                         <label>Name: </label>
                         <input
                             type="text"
                             name="name"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.name}
                         />
                         {errors.name && touched.name && errors.name}
                         <br />
                         <label>Email: </label>
                         <input
                             type="email"
                             name="email"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.email}
                         />
                         {errors.email && touched.email && errors.email}
                         <br />
                         <label>Age: </label>
                         <input
                             type="age"
                             name="age"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.age}
                         />
                         <br />
                         {errors.age && touched.age && errors.age}
                         <button type="submit">
                             Add
                         </button>
                     </form>
                 )}
             </Formik>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default ModalForm;
