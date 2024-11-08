import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../components/Headings/Headings";
import InputField from "../../components/Form/InputField";
import Switch from "react-switch";
import FileUploadField from "../../components/Form/FileUpload";
import RadioField from "../../components/Form/RadioField";
import TextareaField from "../../components/Form/TextArea";

export default function AddNew() {
  const { register, handleSubmit } = useForm();
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [status, setStatus] = useState("active");
  const [inactiveReason, setInactiveReason] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleSwitchChange = (checked) => {
    setIsSwitchedOn(checked);
  };

  const statusOptions = [
    {
      value: "active",
      label: "Active",
      color: "text-green-500",
      textColor: "text-green-600",
    },
    {
      value: "inactive",
      label: "In Active",
      color: "text-red-500",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="container  mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-6  mx-auto space-y-6">
          <Heading text="Employee Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
            <InputField label="Name" name="name" register={register} />
            <InputField
              label="Employee Code"
              name="employeeCode"
              register={register}
            />
            <InputField
              label="Designation"
              name="designation"
              register={register}
            />
            <InputField label="Gender" name="gender" register={register} />
            <InputField
              label="Concern Joining Date"
              name="joiningDate"
              type="date"
              register={register}
            />
            <InputField
              label="Last Working Date"
              name="lastWorkingDate"
              type="date"
              register={register}
            />
            <InputField
              label="Reporting Manager"
              name="reportingManager"
              type="select"
              options={["Sherin"]}
              register={register}
            />
            <InputField label="Salary" name="salary" register={register} />
            <InputField
              label="Work Time Start"
              name="workStartTime"
              type="time"
              register={register}
            />
            <InputField
              label="Work Time End"
              name="workEndTime"
              type="time"
              register={register}
            />
            <InputField
              label="Week Off"
              name="weekOff"
              type="select"
              options={["Sunday"]}
              register={register}
            />
            <InputField
              label="Date of Birth"
              name="dob"
              type="date"
              register={register}
            />
          </div>
        </div>
        <div className="bg-white p-6  mx-auto space-y-6 mt-3">
          <Heading text="Set Account" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
            <InputField
              label="Employee Type"
              name="employeeType"
              options={["Traniee"]}
              register={register}
            />
            <InputField
              label="Mode of work"
              name="modeOfWork"
              options={["online"]}
              register={register}
            />
            <InputField label="User Name" name="userName" register={register} />
            <InputField label="Password" name="password" register={register} />
          </div>
        </div>

        <div className="bg-[#ECEFF0] rounded-lg p-6 flex justify-between items-center  mx-auto  mt-3">
          <Heading text="Personal Info" />
          <Switch
            checked={isSwitchedOn}
            onChange={handleSwitchChange}
            onColor="#345261"
            offColor="#345261"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={18}
          />
        </div>

        <div className="bg-white p-6  mx-auto space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
            <FileUploadField
              label="Employee Photo"
              name="EmployeePhoto"
              register={register}
            />
            <InputField
              label="Mode of work"
              name="modeOfWork"
              options={["online"]}
              register={register}
            />
            <InputField
              label="Education Qualification"
              name="education1"
              placeholder="B.E. Computer Science"
              register={register}
            />
            <FileUploadField
              label="Upload PDF"
              name="educationPdf1"
              register={register}
            />
            <InputField
              label="Education Qualification"
              name="education2"
              placeholder="M.E. Computer Science"
              register={register}
            />
            <FileUploadField
              label="Upload PDF"
              name="educationPdf2"
              register={register}
            />
            {/* Contact Information */}
            <InputField
              label="Phone Number"
              name="phoneNumber"
              register={register}
            />
            <InputField
              label="Alternative Phone Number"
              name="altPhoneNumber"
              register={register}
            />
            <InputField
              label="Email (Office)"
              name="officeEmail"
              placeholder="xyz@gmail.com"
              register={register}
            />
            <InputField
              label="Email (Personal)"
              name="personalEmail"
              register={register}
            />
            {/* Blood Group and Aadhaar Number */}
            <InputField
              label="Blood Group"
              name="bloodGroup"
              register={register}
            />
            <InputField
              label="Aadhaar Number"
              name="aadhaarNumber"
              register={register}
            />
            {/* Address - Present */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="font-semibold mb-2">Address (Present)</h3>
              <InputField
                placeholder="Address Line 1"
                name="presentAddressLine1"
                register={register}
              />
              <InputField
                placeholder="Address Line 2"
                name="presentAddressLine2"
                register={register}
              />
              <InputField
                placeholder="City"
                name="presentCity"
                register={register}
              />
              <InputField
                placeholder="District"
                name="presentDistrict"
                register={register}
              />
              <InputField
                placeholder="State"
                name="presentState"
                register={register}
              />
              <InputField
                placeholder="Country"
                name="presentCountry"
                register={register}
              />
              <InputField
                placeholder="Zip Code"
                name="presentZipCode"
                register={register}
              />
            </div>
            {/* Address - Permanent */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="font-semibold mb-2">Address (Permanent)</h3>
              <InputField
                placeholder="Address Line 1"
                name="permanentAddressLine1"
                register={register}
              />
              <InputField
                placeholder="Address Line 2"
                name="permanentAddressLine2"
                register={register}
              />
              <InputField
                placeholder="City"
                name="permanentCity"
                register={register}
              />
              <InputField
                placeholder="District"
                name="permanentDistrict"
                register={register}
              />
              <InputField
                placeholder="State"
                name="permanentState"
                register={register}
              />
              <InputField
                placeholder="Country"
                name="permanentCountry"
                register={register}
              />
              <InputField
                placeholder="Zip Code"
                name="permanentZipCode"
                register={register}
              />
            </div>
            <InputField
              label="Account Number"
              name="accountNumber"
              register={register}
            />
            <InputField label="IFSC Code" name="ifdcCode" register={register} />
            <InputField label="Bank Name" name="bankName" register={register} />
            <InputField
              label="PAN Number"
              name="panNumber"
              register={register}
            />
          </div>
        </div>

        <div className="bg-white p-6  mx-auto space-y-6 mt-3">
          <RadioField
            label="Status"
            name="status"
            register={register}  
            options={statusOptions}
          />
          <TextareaField
            label="Reason for Inactive"
            name="reasonForInactive"
            register={register}
          />
        </div>

        <div className="flex justify-end gap-5 mt-5 p-6">
          <button className="bg-transparent text-red-500 px-10 py-2 rounded-md">Discard</button>
          <button className="bg-primary text-white px-10 py-2 rounded-md">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
