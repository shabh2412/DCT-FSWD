import { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

export default function App() {
  // FRAGMENT => <> Can contain any number of children. </>

  const [email, set_email] = useState("");

  // let email_list = []; // this doesn't have its state.

  // making email_list stateful
  const [email_list, set_email_list] = useState([]);

  return <div style={{
    padding: "20px"
  }}>
    <InputSection
      email={email}
      set_email={set_email}
      set_email_list={set_email_list}
    />
    {/* <div style={{
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
    </div> */}
    {/*  */}
    {/* Output component */}
    <OutputSection email_list={email_list} />
    {/* <div
      style={{
        border: "1px solid green",
        marginTop: "10px",
      }}
    >
      {
        email_list?.map(function (current_element, index) {
          return <p key={`${current_element}-${index}`} > {current_element} </p>;
        })
      }
    </div> */}
  </div>
    ;
}