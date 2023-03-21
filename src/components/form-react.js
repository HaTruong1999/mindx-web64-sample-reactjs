// Build 1 demo - Them thong tin member in class
import Table from 'react-bootstrap/Table';
import {useState} from "react";

const FormReact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [members, setMembers] = useState([]);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleSubmitMember = (e) => {
        e.preventDefault();
        console.log(e);
        if (name && email && age) {
            const newMember = {
                name: name,
                email: email,
                age: age,
            }
            setMembers([...members, newMember]);
        }
    }
    return (
        <>
            <article>
                <form onSubmit={handleSubmitMember}>
                    <div className='name'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            name={'name'}
                            type={'text'}
                            value={name}
                            onChange={onChangeName}
                        />
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className='age'>
                        <label htmlFor='age'>Age:</label>
                        <input
                            name={'age'}
                            type={'number'}
                            value={age}
                            onChange={onChangeAge}
                        />
                    </div>
                    <button type={'submit'}>Add new member</button>
                </form>
                <div>
                    {members.map((member, index) => {
                        return (
                            <div key={index}>
                                <h4>{member.name}</h4>
                                <h4>{member.email}</h4>
                                <h4>{member.age}</h4>
                            </div>
                        )
                    })}
                </div>
            </article>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default FormReact;

// 1. add table : React-boostrap , ant Design
// 2. 
