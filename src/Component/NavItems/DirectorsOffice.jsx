import { useState } from "react";

// Temp placeholder data
const items = [
  {
    id: "AR",
    name: "Assistant Registrar Academics",
    fullForm: "Assistant Registrar (Academics)",
    selected: true,
    info: "The Office of the Assistant Registrar (Academics) plays a vital role in managing and overseeing academic administration within the institution. As a key link between students, faculty, and administration, this office is responsible for academic records, curriculum coordination, admissions, examinations, and ensuring compliance with academic policies and regulations.\n\nWith a strong commitment to academic excellence, the Assistant Registrar (Academics) works closely with various departments to facilitate smooth academic operations, uphold institutional standards, and support students in their educational journey.\n\nFor any academic-related inquiries, please feel free to reach out to our office.",
  },
  {
    id: "DR",
    name: "Deputy Registrar Academics",
    fullForm: "Deputy Registrar (Academics)",
    selected: false,
    info: "The Office of the Deputy Registrar is responsible for overseeing administrative and operational aspects of the institution. This office plays a crucial role in policy implementation, institutional governance, and regulatory compliance. Working closely with the higher administration, the Deputy Registrar ensures smooth institutional processes, effective resource management, and adherence to official guidelines.\n\nThe Deputy Registrar also assists in supervising various administrative departments, managing staff affairs, and ensuring that institutional objectives align with strategic planning. By facilitating efficient administrative operations, this office supports the institution's mission of academic excellence and operational effectiveness.\n\nFor any administrative or regulatory concerns, please feel free to contact our office.",
  },
];

const DirectorsOffice = () => {
  const [dataToDisplay, setDataToDisplay] = useState(items[0]);
  const [selectedId, setSelectedId] = useState(items[0].id);

  const handleClick = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem) {
      setDataToDisplay(selectedItem);
      setSelectedId(id);
    }
  };

  return (
    <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800 flex flex-col gap-8">
      <div className="flex flex-row gap-8 md:gap-10 items-center justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`md:p-10 p-6 md:text-2xl text-xl text-center rounded-3xl cursor-pointer font-bold transition-all leading-tight ${
              selectedId === item.id
                ? "border-2 border-[#D9D9D94D] shadow-lg bg-[#D9D9D926]"
                : "bg-[#D9D9D926]"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center md:block">
        <div className="bg-[#003E70] text-white p-4 max-w-[300px] font-bold
         rounded-lg text-center md:mt-10 mt-6 text-xl md:text-2xl">
          Introduction
        </div>
      </div>

      <div>
        <p className="mt-2 md:text-lg text-md">{dataToDisplay.info}</p>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="bg-[#003E70] text-white p-4 max-w-[300px] font-bold 
        text-xl md:text-2xl rounded-lg text-center md:mt-10 mt-6">
          Academic Affairs
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-fit h-fit p-6 md:w-64 md:h-36 flex items-center justify-center md:text-2xl text-lg font-bold text-center rounded-3xl cursor-pointer transition-all border-2 border-[#D9D9D94D] shadow-sm bg-[#D9D9D926]"
            >
              ID Card
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsOffice;
