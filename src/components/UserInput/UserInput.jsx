// import "./UserInput.css";

// function UserInput() {
//   return (
//     <section className="user-input">
//       <div className="input-group">
//         <p>
//           <label className="user-input__label">Initial Investment</label>
//           <input className="user-input__input" type="number" required />
//         </p>
//         <p>
//           <label className="user-input__label">Annual Investment</label>
//           <input className="user-input__input" type="number" required />
//         </p>
//       </div>
//       <div className="input-group">
//         <p>
//           <label className="user-input__label">Expected Return</label>
//           <input className="user-input__input" type="number" required />
//         </p>
//         <p>
//           <label className="user-input__label">Duration</label>
//           <input className="user-input__input" type="number" required />
//         </p>
//       </div>
//     </section>
//   );
// }

// export default UserInput;

import "./UserInput.css";

function InputField({ label, type }) {
  return (
    <p>
      <label className="user-input__label">{label}</label>
      <input className="user-input__input" type={type} required />
    </p>
  );
}

function UserInput() {
  return (
    <section className="user-input">
      <div className="user-input__group">
        <InputField label="Initial Investment" type="number" />
        <InputField label="Annual Investment" type="number" />
      </div>
      <div className="user-input__group">
        <InputField label="Expected Return" type="number" />
        <InputField label="Duration" type="number" />
      </div>
    </section>
  );
}

export default UserInput;
