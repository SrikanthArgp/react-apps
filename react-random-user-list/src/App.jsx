import ContactCards from "./ContactCards";
import { useEffect, useState } from "react";

const App = () => {
  const [numContact, setNumContact] = useState(0);
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    setIsLoading(true);
    // fetch way
    fetch(`https://randomuser.me/api/?results=${numContact}`)
      .then((response) => response.json())
      .then((res) => {
        setContactList(res.results);
        console.log("API WAS CALLED");
        console.log(res.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [numContact]);

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
      {isLoading ? (
        <div className="flex  justify-center h-screen">
          <div
            className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-600 motion-reduce:animate-[spin_2.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <section>
          {numContact == 0 ? (
            <div className="flex justify-center items-center text-2xl">
              No Users Yet
            </div>
          ) : (
            <section
              className={
                "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-20"
              }
            >
              <ContactCards contactList={contactList} />
            </section>
          )}
        </section>
      )}
    </div>
  );
};

export default App;
