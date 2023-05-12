import React, { useEffect, useState } from "react";
import Form from './form';
import Table from "./table";
    import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const addSuccess = () => toast.success('Task Added Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const deleteSuccess = () => toast.success('Task Delete Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const updateSuccess = () => toast.success('Task Updated Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const addFail = () => toast.error('Please Enter All Fields', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    const handleInputChange = (event) => {
        const { name, value, checked } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);

        const { hobby } = userinfo;
        // console.log(`${value} is ${checked}`);

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


    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        if (user.firstName === "" && 
        user.lastName === "" && 
        user.address === "" && 
        user.country === "" && 
        user.mobile === "" &&
        user.mobile === "") {
            addFail();
            return false;

        }
        if (editMode) {
            userDetails[currentIndex] = user;
            setUserDetails(userDetails);
            setEditMode(false);
            setCurrentIndex(-1);
            setButtonText('Submit');
            updateSuccess();
        }
        else {

            setUserDetails([...userDetails, user]);
            addSuccess();
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
    // const handleView = (item) => {
    //     // alert("Name:   " + item.firstName + " " + item.lastName\n"Email:  "+item.email\n
    //     // "Mobile_No:  "+item.mobile\n "Addres:  "+item.address\n"Country:  "+item.country/n
    //     // "Hoobies:  "+item.hobbies);
    //     var newLine = "\r"
    //     var msg = "Name:  " + item.firstName + " " + item.lastName
    //     msg += newLine;
    //     msg += "Email:  " + item.email;
    //     msg += newLine;
    //     msg += "Mobile_No:  " + item.mobile;
    //     msg += newLine;
    //     msg += "Address:  " + item.address;
    //     msg += newLine;
    //     msg += "Country:  " + item.country;
    //     msg += newLine;
    //     msg += "Hobbies:  " + userinfo.response;
    //     alert(msg);
    // }
    const handleDelete = (index) => {
        const newUserDetails = [...userDetails];
        newUserDetails.splice(index, 1);
        setUserDetails(newUserDetails);
        deleteSuccess()
    }
    return (
        <div className='container'>
            <div className='row'>
                <ToastContainer
                    position="bottom-right"
                    // autoClose={1000}
                    autoCloseDelay={4000}
                    // hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={true}
                    pauseOnHover={false}
                    theme="light"
                    transition={Zoom}
                />
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
                />
            </div>
        </div>
    );
}

export default FormNew;
