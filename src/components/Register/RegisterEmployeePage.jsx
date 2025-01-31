import RegistrationForm from "../../templates/RegistrationTemplate";    

const RegisterEmployeePage = () => {
  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Second Name", name: "secondName" },
    { label: "Last Name", name: "lastName" },
    { label: "EGN", name: "egn" },
    {
      label: "Role",
      name: "role",
      type: "select",
      options: [
        { label: "Manager", value: "Manager" },
        { label: "Technician", value: "Technician" },
        { label: "Driver", value: "Driver" },
        { label: "Administrator", value: "Administrator" },
      ],
    },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <RegistrationForm
      title="Register an Employee"
      fields={fields}
      endpoint="http://localhost:8080/api/employee/account/register"
    />
  );
};

export default RegisterEmployeePage;
