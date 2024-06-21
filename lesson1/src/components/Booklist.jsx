import React from "react";

const Booklist = ({ book }) => {
  if (book?.length === 0) {
    return <p>NO books</p>;
  }
  return (
    <ul>
      {book?.map((item) => {
        return <li id={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default Booklist;

// zadaca sama rewila
// import React from "react";

// const Booklist = (props) => {
//   return (
//     <>
//       <h2>{props.name}</h2>
//       <p>{props.price}</p>
//     </>
//   );
// };

// export default Booklist;
