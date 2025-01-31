import RegistrationForm from "../../templates/RegistrationTemplate";

const RegisterCustomer = () => {
  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "User Name", name: "name" },
    { label: "Company ID", name: "companyId" },
    { label: "EGN", name: "egn" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Address", name: "address" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <RegistrationForm
      title="Register an Client"
      fields={fields}
      endpoint="http://localhost:8080/api/clients/account/auth/register"
      defaultValues={{ role: "CLIENT" }}
    />
  );
};
export default RegisterCustomer;
