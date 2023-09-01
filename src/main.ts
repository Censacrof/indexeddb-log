import { unwrap } from "./unwrap";

export { };

const request = window.indexedDB.open("MyTestDatabase", 4);

request.onupgradeneeded = async (event) => {
  console.log("upgrade needed");
  const db = (event.target as IDBOpenDBRequest).result;
  console.log({event})

  const tokensStore = db.createObjectStore("tokens", {
    keyPath: "token",
  });

  const transaction: IDBTransaction = tokensStore.transaction;
  await unwrap(transaction);
};

const db = await unwrap(request);

const transaction = db.transaction(["tokens"], "readwrite");

const tokensStore = transaction.objectStore("tokens");

const res = await unwrap(tokensStore.add({
  token: "gigiiii",
  asdasdasd: "fuffo"
}));

console.log({res})



// const dbName = "the_name";

// const request = indexedDB.open("boiadeh", 2);

// // request.onerror = (event) => {
// //   Handle errors.
// // };

// request.onupgradeneeded = (event) => {
//   console.log("cane");
//   const db = event.target.result;

//   // Create an objectStore to hold information about our customers. We're
//   // going to use "ssn" as our key path because it's guaranteed to be
//   // unique - or at least that's what I was told during the kickoff meeting.
//   const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

//   // Create an index to search customers by name. We may have duplicates
//   // so we can't use a unique index.
//   objectStore.createIndex("name", "name", { unique: false });

//   // Create an index to search customers by email. We want to ensure that
//   // no two customers have the same email, so use a unique index.
//   objectStore.createIndex("email", "email", { unique: true });

//   // Use transaction oncomplete to make sure the objectStore creation is
//   // finished before adding data into it.
//   objectStore.transaction.oncomplete = (event) => {
//     // Store values in the newly created objectStore.
//     const customerObjectStore = db
//       .transaction("customers", "readwrite")
//       .objectStore("customers");
//     customerData.forEach((customer) => {
//       customerObjectStore.add(customer);
//     });
//   };
// };
