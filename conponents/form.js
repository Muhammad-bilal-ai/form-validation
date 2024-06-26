import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { saveFormData } from "./firebase";

export default function ValidationForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    terms_and_conditions: false,
    privacy_policy: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    terms_and_conditions: Yup.boolean().oneOf([true], "Required"),
    privacy_policy: Yup.boolean().oneOf([true], "Required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      console.log("Form data", values);
      await saveFormData(values);
      resetForm();
    } catch (error) {
      console.error("Error saving form data", error);
      setErrors({ submit: "Failed to save form data. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="terms_and_conditions"
                className="block text-sm font-medium text-gray-700"
              >
                Terms and Conditions
              </label>
              <Field
                id="terms_and_conditions"
                name="terms_and_conditions"
                type="checkbox"
                className="mt-1"
              />
              <ErrorMessage
                name="terms_and_conditions"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="privacy_policy"
                className="block text-sm font-medium text-gray-700"
              >
                Privacy Policy
              </label>
              <Field
                id="privacy_policy"
                name="privacy_policy"
                type="checkbox"
                className="mt-1"
              />
              <ErrorMessage
                name="privacy_policy"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="reset"
                className="ml-4 bg-gray-500 text-white rounded p-2"
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
