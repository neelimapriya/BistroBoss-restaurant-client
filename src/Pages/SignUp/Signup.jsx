import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiospublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const Axiospublic = useAxiospublic();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          Axiospublic.post("/user", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={signupImg} alt="" className="  mx-auto" />
          </div>
          <div className="card  w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 ">
            <h2 className="text-center text-3xl font-bold">Sign Up Now!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-600">Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  name="photo"
                  type="text"
                  placeholder="Your photo url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <p className="text-red-600">photo is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                  })}
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one upper case character, one lower case
                    character and one special character.
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center pb-3">
              <small>
                Already Have an account ?{" "}
                <Link className="text-yellow-600" to="/login">
                  Login here.
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
