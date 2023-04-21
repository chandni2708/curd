import React from 'react';

function Table(props) {
    const handleView = (item) => {
        props.handleView(item);
    }
    // const Table = (props) => {

    return (
        <div className='container'>
            <div className="row mb-3">
                <div className="col-lg-12">
                    <h1><i class="bi bi-person-lines-fill"></i> Manage User Information</h1>
                    <hr />
                </div>  
            </div>
            <div className="row text-light">
                <div className="col-lg-12">
                    <table class="table table-bordered border-light text-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Address</th>
                                <th scope="col">Country</th>
                                <th scope="col">Hobbies</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.userDetails.length > 0 ?
                                props.userDetails.map((item, index) =>
                                    <tr key={item.firstName}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.firstName + " " + item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.address}</td>
                                        <td>{item.country}</td>
                                        <td>{props.userinfo.response}</td>
                                        <td className="d-flex justify-content-between">
                                            <button className="btn btn-info" onClick={() => handleView(item)}>View</button>
                                            <button className="btn btn-secondary" id="edit" onClick={() => props.handleEdit(index)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => props.handleDelete(index)}> Delete</button>
                                        </td>
                                    </tr>
                                )

                                : <tr>
                                    <th scope="row" colSpan={8}>No Records Found !</th>
                                </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
