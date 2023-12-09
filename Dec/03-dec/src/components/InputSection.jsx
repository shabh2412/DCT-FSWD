export default function InputSection(
  {
    email,
    set_email,
    set_email_list,
    changeHandler = () => { }
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
        onChange={changeHandler}
      />
      <button onClick={() => {
        // email_list.push(email);
        set_email_list((prevList) => {
          const tempList = JSON.parse(JSON.stringify(prevList));
          tempList.push(email);
          return tempList;
        });
        // set_email("");
      }}
      >Send Invitation
      </button>
    </div>
  </>;
}