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
