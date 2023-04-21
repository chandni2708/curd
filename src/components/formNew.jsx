import React, { useEffect, useState } from "react";
import Form from './form';
import Table from "./table";
// import Table from './table';

const FormNew = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        country: "",
        options: "",
    })
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("userDetails")) ? JSON.parse(localStorage.getItem("userDetails")) : []);
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [buttonText, setButtonText] = useState('Submit');
    const [userinfo, setUserInfo] = useState({
        hobby: [],
        response: [],
    });
    const handleInputChange = (event) => {
        const { name, value, checked } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);

        const { hobby } = userinfo;
        c33onsole.log(`${value} is ${checked}`);

        if (checked) {
            setUserInfo({
                hobby: [...hobby, value],
                response: [...hobby, value].join(', ')
            });
        }

        else {
            setUserInfo({
                hobby: hobby.filter((e) => e !== value),
                response: hobby.filter((e) => e !== value),
            });
        }
    };


    const handleSubmit = () => {
        if (editMode) {
            userDetails[currentIndex] = user;
            setUserDetails(userDetails);
            setEditMode(false);
            setCurrentIndex(-1);
            setButtonText('Submit');


        }
        else {

            setUserDetails([...userDetails, user]);
        }
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: '',
            country: '',
            options: '',
        })
    }

    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);

    const handleEdit = (index) => {
        setEditMode(true);
        setCurrentIndex(index);
        setUser(userDetails[index]);
        setButtonText('Update');


    }
    const handleView = (item) => {
        // alert("Name:   " + item.firstName + " " + item.lastName\n"Email:  "+item.email\n
        // "Mobile_No:  "+item.mobile\n "Addres:  "+item.address\n"Country:  "+item.country/n
        // "Hoobies:  "+item.hobbies);
        var newLine = "\r"
        var msg = "Name:  " + item.firstName + " " + item.lastName
        msg += newLine;
        msg += "Email:  " + item.email;
        msg += newLine;
        msg += "Mobile_No:  " + item.mobile;
        msg += newLine;
        msg += "Address:  " + item.address;
        msg += newLine;
        msg += "Country:  " + item.country;
        msg += newLine;
        msg += "Hobbies:  " + userinfo.response;
        alert(msg);
    }
    const handleDelete = (index) => {
        const newUserDetails = [...userDetails];
        newUserDetails.splice(index, 1);
        setUserDetails(newUserDetails);
    }
    return (
        <div className='container'>
            <div className='row'>
                <Form
                    user={user}
                    userDetails={userDetails}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    buttonText={buttonText}
                />
                <Table userDetails={userDetails}
                    userinfo={userinfo}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleView={handleView}
                />
            </div>
        </div>
    );
}

export default FormNew;
