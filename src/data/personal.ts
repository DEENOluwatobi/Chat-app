export type Personal = {
    name: string;
    age: number;
    status: string;
    profilePic: string;
    groups: string[];
  };
  
  export const currentUser: Personal = {
    name: "Comm. Lawyers",
    age: 30,
    status: "Active",
    profilePic: "../Images/man.jpg",
    groups: ["Group A", "Group B"],
  };
  
  // Simulate an async function to fetch the current user's data
  export const fetchPersonalData = async (): Promise<Personal> => {
    // In the future, replace this with an actual API call to fetch the current user's data from a PHP endpoint.
    // For now, we'll simulate an asynchronous delay and then return the currentUser object.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(currentUser);
      }, 1000); // Simulate a 1-second delay
    });
  };
  