
const SectionTitle = ({heding, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4  py-4 mb-5">{heding}</h2>
        </div>
    );
};

export default SectionTitle;