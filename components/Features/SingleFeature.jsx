import Image from "next/image";

const SingleComponent = ({ icon, heading, paragraph }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between p-4 md:max-w-[33%] text-center sm:text-start">
      <Image src={icon} alt="Icon" width={50} height={50} className="mx-auto" />
      <div className="sm:ml-4">
        <h2 className="text-lg font-semibold text-center sm:text-start">
          {heading}
        </h2>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleComponent;
