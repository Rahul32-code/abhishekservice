import { FaUserMd } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="scroll-m-20 bg-white/25 py-10 px-4">
      <div className="text-start sm:text-center mb-10 ">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
          About Us
        </h2>
        <p className="text-slate-700 max-w-2xl mx-auto leading-tight">
          Explore the wide range of dental services we offer to keep your smile
          healthy and bright.
        </p>
      </div>
      <div className="container mx-auto sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0n0AxrEC4HAkcvZFo8YrJBVh7sNNixSG1w&s"
            alt="about"
            className="w-80 lg:w-[420px] rounded-3xl shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-start sm:text-center lg:text-left">
          <div className="flex items-center justify-start sm:justify-center lg:justify-start space-x-2">
            <FaUserMd className="text-green-600 w-7 h-7" />
            <h2 className="text-xl sm:text-2xl lg:text3xl font-bold text-green-600">About Us</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            earum vero dignissimos, doloremque corrupti sapiente unde quae
            corporis voluptate, quisquam eius fuga explicabo repellendus quasi
            distinctio nulla iure maiores suscipit.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis,
            sint optio temporibus iure dicta at inventore natus veniam maiores
            dolore alias placeat reiciendis ipsum doloremque error quisquam
            eligendi. Assumenda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
