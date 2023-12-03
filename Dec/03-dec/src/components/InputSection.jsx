export default function InputSection(
  {
    email,
    set_email,
    set_email_list
  }
) {
  return <>
    <h1>Enter email address</h1>
    <div style={{
      border: "1px solid hotpink",
      padding: "10px",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    }} >
      <input
        type="email"
        name="emailInput"
        id="emailInput"
        value={email}
        onChange={(e) => {
          // console.log(e?.target?.value);
          const value = e?.target?.value;
          set_email(value);
        }}
      />
      <button onClick={() => {
        // email_list.push(email);
        set_email_list((prevList) => {
          const tempList = prevList;
          tempList.push(email);
          return tempList;
        });
        set_email("");
      }}
      >Send Invitation
      </button>
    </div>
  </>;
}