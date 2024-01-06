import { useEffect, useState } from "react";
import LabeledInput from "./Labeledinput";

function Addpatient() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    gender: "",
    Phone: "",
    Adress: "",
    medecinID: "",
  });

  useEffect(() => {
    setFormData({ ...formData, medecinID: localStorage.getItem("userId") });
    console.log(formData);
  }, []);

  const accessToken = localStorage.getItem("accessToken");
  const createPatient = async () => {
    const res = await fetch(
      "https://doc-organizer-db6r.onrender.com/patients",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );
    if (res.status === 201) {
      const data = await res.json();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPatient();
  };
  console.log(formData)
  return (
    <>
      <div className="flex flex-col justify-center w-[100%] text-theblue">
        <h1 className="my-10 text-[30px] font-[Gilroybold]">Add a patient</h1>
        <div className="flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 grid-rows-3 gap-7">
              <LabeledInput
                type="text"
                label="First Name"
                placeholder="first name"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
              <LabeledInput
                type="text"
                label="Last Name"
                placeholder="last name"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
              <LabeledInput
                type="number"
                label="Age"
                placeholder="age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
              <div className="flex align-center justify-center">
                <LabeledInput
                  htmlFor="gender"
                  className="block text-sm  text-gray-700 text-theblue font-[Gilroy] font-bold"
                  value={formData.gender}
                  label="Gender"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  placeholder="Gender:"
                />
              </div>
              <LabeledInput
                type="number"
                value={formData.Phone}
                label="Phone number"
                placeholder="phone number"
                onChange={(e) =>
                  setFormData({ ...formData, Phone: e.target.value })
                }
              />
              <LabeledInput
                value={formData.Adress}
                label="Adress"
                onChange={(e) =>
                  setFormData({ ...formData, Adress: e.target.value })
                }
                placeholder="your adress"
              />
            </div>
            <button
                type="submit"
                className="bg-teal-500 text-white rounded-lg px-auto py-2 my-10 font-[Gilroy] w-[100%] mx-auto"
              >
                Save
              </button>
          </form>
          <div>{/* <Importfile /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Addpatient;