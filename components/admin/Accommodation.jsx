import { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Accommodation = () => {
  const [inputText, setInputText] = useState();
  const [accommodationType, setAccommodationType] = useState(["Tent"]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px] text-center">Accommodation</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new accommodation type"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          {inputText}
          <button
            className="btn-primary"
            onClick={() => {
              setAccommodationType([...accommodationType, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10 mb-5">
          {accommodationType.map((accommodation, index) => (
            <div className="flex justify-between mt-4" key={index}>
              <b className="text-xl">{accommodation}</b>
              <button className="btn-primary !bg-danger" onClick={() => {
                setAccommodationType(accommodationType.filter((cat) => cat !== accommodation))
              }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;