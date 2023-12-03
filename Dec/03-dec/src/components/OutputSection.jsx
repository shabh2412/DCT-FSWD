export default function OutputSection({
  email_list
}) {
  return <>
    <h1>
      Output Section
    </h1>
    <div
      style={{
        border: "1px solid green",
        marginTop: "10px",
      }}
    >
      {/* we will be showing output inside this div. */}
      {
        email_list?.map(function (current_element, index) {
          return <p key={`${current_element}-${index}`} > {current_element} </p>;
        })
      }
    </div>
  </>;
}