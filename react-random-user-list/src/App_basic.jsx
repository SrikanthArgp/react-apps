import ContactCards from "./ContactCards";
import { useEffect, useState } from "react";
import axios from 'axios';


const App = () => {
  const [numContact, setNumContact] = useState(0);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${numContact}`)
      .then((response) => {
        setContactList(response.data.results);
        console.log("API WAS CALLED");
        console.log(response)
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [numContact]);



  // useEffect(() => {
  //   //fetch way `~
  //   fetch(`https://randomuser.me/api/?results=${numContact}`)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setContactList(res.results);
  //       console.log("API WAS CALLED");
  //       console.log(res.results);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     })
  // }, [numContact]);

  return (
    <div className={"bg-gray-100 min-h-screen"}>
      <div className="text-center text-4xl text-sky-600">Random User List</div>
      <section>
        {/* Input Section */}
        <input
          type={"number"}
          placeholder={"Num of contacts...."}
          onChange={(event) => setNumContact(event.target.value)}
          className={"ml-20 mt-6 rounded-md p-2"}
        />
      </section>

      {/* Display Section */}
      <section>
        {numContact == 0 ? (
          <div className="flex justify-center items-center text-2xl">
            No Users Yet
          </div>
        ) : (
          <div
            className={
              "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-20"
            }
          >
            <ContactCards contactList={contactList} />
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
