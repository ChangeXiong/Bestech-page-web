import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from 'axios';
const Register = () => {
    const [formData, setFormData] = useState([]);
    const [laoname, setLaoname] = useState("");
    const [engname, setEngname] = useState("");
    const [nicname, setNicname] = useState("");
    const [gender, setGender] = useState("");
    const [cvperson, setCvperson] = useState("");
    const [date, setDate] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [datein, setDatein] = useState("");
    const [tell, setTell] = useState("");
    const [res, setRes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission here
        const url = "https://api.sheety.co/764ffda23d1636ac54296097cc9cbb57/cmpBestech/formsubmit";
        let body = {
            formsubmit: {
                laoname,
                engname,
                nicname,
                gender,
                date,
                position,
                salary,
                datein,
                cvperson,
                tell
            }
        }
        axios.post(url, body).then((res) => {
            if (res) {
                setRes(res);
                toast.success("ທ່ານສົ່ງອີເມວສຳເລັດ, ພວກເຮົາຈະຕິດຕໍ່ກັບໃນໄວໆນີ້ ຂໍຂອບໃຈ", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLaoname("");
                setEngname("");
                setNicname("");
                setGender("");
                setCvperson("");
                setDate("");
                setPosition("");
                setSalary("");
                setDatein("");
                setTell("");
            } else {
                toast.error("ທ່ານສົ່ງອີເມວບໍສຳເລັດ", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        })
    };

    return (
        <div className='container mx-auto justify-center' id='register'>
            <div data-aos="fade-up" className="w-full">
            <div className="row">
                <div className="col-md-5">
                    <div className="w-full lg:w-1/2 px-0 mt-5 p-5 mb-10 lg:mb-0">
                        <div className="relative transition-all h-full overflow-hidden max-w-max mx-auto rounded-md">
                            <Image
                                src="/flex-ui-assets/gif/84565-about-us.gif"
                                alt="image"
                                width={750}
                                height={750}
                                className="cursor-pointer transition ease-in-out hover:scale-125 duration-700"
                            />
                        </div>

                    </div>
                    <div className="relative">
                        <h4>ການພັດທະນາລະບົບ Software,Application,Website</h4>
                        <p className="tracking-tighter">
                            ຄວາມກ້າວໜ້າຂອງສັງຄົມທີ່ພັດທະນາຂື້ນມາເລືອຍໆເຮັດໃຫ້ຫຼາຍໆທຸລະກິດ ຫຼື ຫຼາຍພາກສ່ວນຕ້ອງການຄວາມສະກວດ
                            ໃນການນຳ Software ເພືອໃຫ້ການເຮັດວຽກດຳເນີນໄປຢ່າງວ່ອງໄວ, ລົດບັນຫາຄວາມຜິດພາດ ແລະ ປະສິດທິພາບ
                            ຂອງວຽກງານມີຫຼາຍຂື້ນ ດັ່ງນັ້ນພວກເຮົາຈືງພັດທະນາໂດຍເນັ້ນໃສ່ການພັດທະນາໃຫ້ບໍ ລິການພັດທະນາ Software,
                            Application, Website, ນຳເອົາ Software ທີ່ມີຄຸນນະພາບສູງມາໃຫ້ບໍລິການພ້ອມທັ້ງ ໃຫ້ຄຳປືກສາດ້ວຍລາຄາທີ່ເປັນມິດ
                            ເພືອຕອບສະໜອງຄວາມ ຕ້ອງການ ແລະ ອຳນວຍຄວາມສະດວກ ໃຫ້ແກ່ມະນຸດ
                        </p>
                    </div>

                </div>
                <div className="col-md-7">
                    <div className="card p-2 mb-6 dark:text-white text-black border-2">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title">ຟອມສະຫມັກເຂົ້າ ບໍລິສັດ BesTech SaaS Consultancy</h2>
                        </div>
                        <div className="card-body mt-2 justify-self-center show-5  bg-white">
                            <form action="" onSubmit={handleSubmit} noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="LaoName" className='mb-2'>ຊື່ແລະນາມສະກຸນເປັນພາສາລາວ</label>
                                            <input type="text" name="LaoName" id="" className='form-control' value={laoname} onChange={(e) => setLaoname(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="EngName" className='mb-2'>ຊື່ແລະນາມສະກຸນເປັນພາສາອັງກິດ</label>
                                            <input type="text" name="EngName" id="" className='form-control' value={engname} onChange={(e) => setEngname(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="NicName" className='mb-2'>ຊື່ຫລິນ</label>
                                            <input type="text" name="NicName" id="" className='form-control' value={nicname} onChange={(e) => setNicname(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="Gender" className='mb-2'>ເພດ</label>
                                            <select name="Gender" className='form-control' value={gender} onChange={(e) => setGender(e.target.value)} required>
                                                <option value="">ກາລຸຸນາລະບຸເພດ</option>
                                                <option value="ເພດຍິງ">ເພດຍິງ</option>
                                                <option value="ເພດຊາຍ">ເພດຊາຍ</option>
                                            </select>
                                        </div>

                                        <div className="form-group mt-4">
                                            <label htmlFor="CVperson" className='mb-2'>ເອກະສານກ່ຽວຂ້ອງ CV ແລະ ໃບຄະແນນ</label>
                                            <input type="file" name="CVperson" id="" className='form-control' value={cvperson} onChange={(e) => setCvperson(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="Date" className='mb-2'>ວັນເດືອນປິເກິດ</label>
                                            <input type="date" name="Date" id="" className='form-control' value={date} onChange={(e) => setDate(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="Salary" className='mb-2'>ເງິນເດືອນຂັ້ນເລິມຕົ້ນ</label>
                                            <input type="number" name="Salary" id="" className='form-control' value={salary} onChange={(e) => setSalary(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="Gender" className='mb-2'>ຕຳແຫນ່ງ</label>
                                            <select name="Gender" className='form-control' value={position} onChange={(e) => setPosition(e.target.value)} required>
                                                <option value="">ກາລຸຸນາລະບຸຕຳແຫນ່ງ</option>
                                                <option value="ເພດຍິງ">ເພດຍິງ</option>
                                                <option value="ເພດຊາຍ">ເພດຊາຍ</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="Laoname" className='mb-2'>ວັນທີເຂົ້າທຳງານ</label>
                                            <input type="date" name="LaoName" id="" className='form-control' value={datein} onChange={(e) => setDatein(e.target.value)} required />
                                        </div>
                                        <div className="form-group mt-4">
                                            <label htmlFor="Laoname" className='mb-2'>ເບິໂທຕິດຕໍ</label>
                                            <input type="number" name="LaoName" id="" className='form-control' value={tell} onChange={(e) => setTell(e.target.value)} required />
                                        </div>

                                    </div>
                                    <div className="form-group justify-center mb-2 text-center mt-4">
                                        <button type='submit' className='btn btn-primary'> Send Messages</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;
