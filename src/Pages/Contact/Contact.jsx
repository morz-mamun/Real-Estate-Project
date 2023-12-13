
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        "service_8pcv9n5",
        "template_aqo69xf",
        form,
        "kFrB08mXntYRm3Yl5"
      )
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: "Email Send successfully",
          });
        },
        () => {
          Toast.fire({
            icon: "error",
            title: "Something wrong!",
          });
        }
      );
    form.reset();
  };
  return (
    <div>
      {/* <Helmet>
        <title></title>
      </Helmet> */}
      <div className=" flex items-center justify-center max-w-4xl mx-auto min-h-screen">
        <div className="card-body bg-base-300 rounded-lg">
          <p className="text-4xl text-center border-b-4 border-red-600 w-fit mx-auto uppercase mb-5">
            Lets Talk
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className=" font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className=" text-black input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className=" font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className=" text-black input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className=" font-bold">Your Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Your Subject*"
                className=" text-black input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className=" font-bold">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message*"
                className=" text-black input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline border-b-4 shadow-xl border-red-600 hover:border-red-600 hover:bg-green-600 w-1/6 mx-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
