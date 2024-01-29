// import { useState } from "react";
// import "./UserInput.css";

// function UserInput() {
//   const [userInput, setUserInput] = useState({
//     initialInvestment: 10000,
//     annualInvestment: 1200,
//     expectedReturn: 6,
//     duration: 10,
//   });

//   function handleChange(inputIdentifier, newValue) {
//     setUserInput((prevUserInput) => {
//       return {
//         ...prevUserInput,
//         [inputIdentifier]: newValue,
//       };
//     });
//   }

//   return (
//     <section className="user-input">
//       <div className="user-input__group">
//         <p>
//           <label className="user-input__label">Initial Investment</label>
//           <input
//             className="user-input__input"
//             type="number"
//             required
//             value={userInput.initialInvestment}
//             onChange={(evt) =>
//               handleChange("initialInvestment", evt.target.value)
//             }
//           />
//         </p>
//         <p>
//           <label className="user-input__label">Annual Investment</label>
//           <input
//             className="user-input__input"
//             type="number"
//             required
//             value={userInput.annualInvestment}
//             onChange={(evt) =>
//               handleChange("annualInvestment", evt.target.value)
//             }
//           />
//         </p>
//       </div>
//       <div className="user-input__group">
//         <p>
//           <label className="user-input__label">Expected Return</label>
//           <input
//             className="user-input__input"
//             type="number"
//             required
//             value={userInput.expectedReturn}
//             onChange={(evt) => handleChange("expectedReturn", evt.target.value)}
//           />
//         </p>
//         <p>
//           <label className="user-input__label">Duration</label>
//           <input
//             className="user-input__input"
//             type="number"
//             required
//             value={userInput.duration}
//             onChange={(evt) => handleChange("duration", evt.target.value)}
//           />
//         </p>
//       </div>
//     </section>
//   );
// }

// export default UserInput;

// import { useState } from "react";
import "./UserInput.css";

function InputField({ label, value, onChange }) {
  return (
    <p>
      <label className="user-input__label">{label}</label>
      <input
        className="user-input__input"
        type="number"
        required
        value={value}
        onChange={onChange}
      />
    </p>
  );
}

function UserInput({ onChange, userInput }) {
  // const [userInput, setUserInput] = useState({
  //   initialInvestment: 10000,
  //   annualInvestment: 1200,
  //   expectedReturn: 6,
  //   duration: 10,
  // });

  // function handleInputChange(inputIdentifier, newValue) {
  //   setUserInput((prevUserInput) => {
  //     return {
  //       ...prevUserInput,
  //       [inputIdentifier]: newValue,
  //     };
  //   });
  // }

  return (
    <section className="user-input">
      <div className="user-input__group">
        <InputField
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={({ target: { value } }) =>
            onChange("initialInvestment", value)
          }
        />
        <InputField
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={({ target: { value } }) =>
            onChange("annualInvestment", value)
          }
        />
      </div>
      <div className="user-input__group">
        <InputField
          label="Expected Return"
          value={userInput.expectedReturn}
          onChange={({ target: { value } }) =>
            onChange("expectedReturn", value)
          }
        />
        <InputField
          label="Duration"
          value={userInput.duration}
          onChange={({ target: { value } }) => onChange("duration", value)}
        />
      </div>
    </section>
  );
}

export default UserInput;
