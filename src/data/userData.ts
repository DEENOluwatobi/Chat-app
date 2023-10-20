
export type User = {
    isGroupChat: boolean;
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
  
  const dummyUsers: User[] = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      avatar: "../Images/man.jpg", 
      isGroupChat: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      avatar: "../Images/man2.jpg",
      isGroupChat: false
    },
    // Add more dummy users as needed
  ];
  
  export const fetchUserData = async (): Promise<User[]> => {
    // In the future, you can replace this function with an actual API call to fetch user data from a PHP endpoint.
    // For now, we'll return the dummy data.
    return dummyUsers;
  };
  