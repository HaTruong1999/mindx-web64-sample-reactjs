import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalForm from './modal-form';

const FormikReact = () => {
    const [members, setMembers] = useState([]);
    const [modalShow, setModalShow] = useState(false);

     return (
         <div>
             <h1>Danh sách thành viên</h1>

             <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                members={members}
                setMembers={setMembers}
            />

            <Button  variant="primary" onClick={() => setModalShow(true)}>
                    Add
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
         </div>
     )
}

export default FormikReact