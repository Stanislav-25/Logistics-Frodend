import RegistrationForm from "../../templates/RegistrationTemplate";   

const CompanyRegisterPage = () => {
  const fields = [
    { label: "Company Name", name: "name" },
    { label: "Tax Number", name: "taxNumber" },
    { label: "Address", name: "address" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <RegistrationForm
      title="Register Your Company"
      fields={fields}
      endpoint="http://localhost:8080/api/companies/account/register"
      defaultValues={{ role: "COMPANY" }}
    />
  );
};

export default CompanyRegisterPage;
