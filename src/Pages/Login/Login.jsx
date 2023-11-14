import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Login = () => {
    // const capctchaRef =useRef(null)
    const [disabled, setDisabled]=useState(true)
    const {signIn}=useContext(AuthContext)
    const location =useLocation()
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || '/';
    console.log('state in the location', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result=>{
      const user =result.user;
      console.log(user)
      alert('User Logged in')
      navigate(from, {replace:true})
    })
  };
  const handlevalidateCaptcha =(e)=>{
    const user_captcha_value=e.target.value;
    console.log(user_captcha_value)
    if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
    }else{
        setDisabled(true)
    }
  }
  return (
    <div>
       <Helmet>
            <title>Bistro Boss | Login</title>
        </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" className=" w-2/3 mx-auto" />
          </div>
          <div className="card  w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate/>
                </label>
                <input onBlur={handlevalidateCaptcha}
               
                  name="captcha"
                  type="text"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
               

              </div>

              <div className="form-control mt-6">
                <input
                // disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center pb-3"><small>New here ? <Link className="text-yellow-600" to="/signup">Create an account.</Link></small></p>
          </div>
          <Link to='/'><button className="text-center btn btn-primary">Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
